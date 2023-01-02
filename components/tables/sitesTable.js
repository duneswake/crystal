import ReactTable from 'react-table'
import React, { useState, Component } from 'react';
import { data } from '../../public/data/siteData'


const maxWidth = 400;
const magicSpacing = 18;
let max=0;

function width(acc){
    for (var i = 0; i < data.length; i++) {
        if (data[i] !== undefined && data[i][acc] !== null) {
            if ((data[i][acc] || 'null').length > max) {
                max = (data[i][acc] || 'null').length;
            }
        }
    }
    return Math.min(maxWidth, max * magicSpacing)
}

const SitesTable = () => {
    return (
        <ReactTable
            previousText={"previous"}
            nextText={'next'}
            // defaultSorted={[{ id: "origin", desc: true }]}
            data={data}
            height={2}
            columns={columns}
            defaultPageSize={42}
            // minRows={0}
            // showPaginationBottom={data.length > 42 ? true: false}
        />
    )
}

export default SitesTable;

const columns = [

    {
        width: width('url')*.7,
        Header: '｡ﾟ҉̛༽ﾉ',
        accessor: 'url',
        Cell: e => <a  id='site' target="_blank" href={e.original.url}> {e.value} </a>,
    },
    {
        width: 300,
        Header: '‡ .*​ﾟ･​｡​ﾟ​҉​̛​༽​​',
        accessor: 'origin',
        Cell: e => <a target="_blank" href={e.original.url}> {e.value} </a>,
    }
]

