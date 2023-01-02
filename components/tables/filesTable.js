import ReactTable from 'react-table'
import React, { useState, Component } from 'react';
import { filedata } from '../../public/data/fileData';

const maxWidth = 400;
const magicSpacing = 18;
let max=0;

function width(acc){
    for (var i = 0; i < filedata.length; i++) {
        if (filedata[i] !== undefined && filedata[i][acc] !== null) {
            if ((filedata[i][acc] || 'null').length > max) {
                max = (filedata[i][acc] || 'null').length;
            }
        }
    }
    return Math.min(maxWidth, max * magicSpacing)
}

const FilesTable = () => {



    return (
        <ReactTable
            previousText={"previous"}
            nextText={'next'}
            defaultSorted={[{ id: "auth", desc: true }]}
            data={filedata}
            height={2}
            columns={columns}
            defaultPageSize={42}
            // minRows={25}
            // showPaginationBottom={data.length > 42 ? true: false}
        />
    )
}

export default FilesTable;

const columns = [
    {
        // maxWidth: 200,
        width: width('auth')*.4,
        Header: '‡ .*​ﾟ･​｡​ﾟ​҉​̛​༽​​',
        accessor: 'auth',
        Cell: e => <a target="_blank" href={e.original.url}> {e.value} </a>,
    },
    {
        width: width('title')*2,
        Header: '‡​ﾟ​.​*​҉​҉​',
        accessor: 'title',
        Cell: e => <a target="_blank" href={e.original.url}> {e.value} </a>,
    }
]
