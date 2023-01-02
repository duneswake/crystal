import ReactTable from 'react-table'
import React, { useState, Component } from 'react';
import { data } from '../../public/data/rssData'


const RssTable = () => {
    return (
        <ReactTable
            previousText={"previous"}
            nextText={'next'}
            defaultSorted={[{ id: "date", desc: true }]}
            data={data}
            height={2}
            columns={columns}
            // estimatedRowHeight={4}
            defaultPageSize={62}
        />
    )
}

export default RssTable;

const columns = [
    {
        maxWidth: 92,
        width: 97,
        Header: '‡ .*​ﾟ･​｡​ﾟ​҉​̛​༽​​',
        accessor: 'date',
        Cell: e => <a id='date'>{e.value.substring(0, 11)}</a>
    },
    {
        maxWidth: 270,
        minWidth: 270,
        Header: '｡ﾟ҉̛༽ﾉ',
        accessor: 'title',
        Cell: e => <a target="_blank" href={e.original.url}> {e.value} </a>,
    },
    {
        maxWidth: 341,
        width:390,
        Header: '‡​ﾟ​.​*​҉​҉​',
        accessor: 'url',
        Cell: e => <a target="_blank" href={e.value}> {e.value} </a>
    }
]
