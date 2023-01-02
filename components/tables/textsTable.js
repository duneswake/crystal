import ReactTable from 'react-table'
import React, { useState, Component } from 'react';
import { data } from '../../public/data/siteData'


const TextsTable = () => {
    return (
        <ReactTable
            previousText={"previous"}
            nextText={'next'}
            defaultSorted={[{ id: "date", desc: true }]}
            // data={data}
            height={2}
            columns={columns}
            defaultPageSize={42}
            // minRows={0}
            // showPaginationBottom={data.length > 42 ? true: false}
        />
    )
}

export default TextsTable;

const columns = [
    {
        maxWidth: 92,
        width: 97,
        Header: '‡ .*​ﾟ･​｡​ﾟ​҉​̛​༽​​',
        accessor: 'date',
    },
    {
        maxWidth: 270,
        minWidth: 270,
        Header: '｡ﾟ҉̛༽ﾉ',
        accessor: 'url',
        Cell: e => <a target="_blank" href={e.original.url}> {e.value} </a>,
    },
    {
        maxWidth: 341,
        width:390,
        Header: '‡​ﾟ​.​*​҉​҉​',
        accessor: 'date',
    }
]
