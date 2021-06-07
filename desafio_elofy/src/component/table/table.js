import React from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css'

function Random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const TableGrid = ({ csv }) => {
    if (!csv) {
        return null
    }
    console.log('Biba')
    return (

        <div>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        {csv.header.map((headerItem) => (
                            <th key={headerItem}>{headerItem}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {csv.data.map((rowItem, index) => (
                        <tr key={index}>
                            {rowItem.map((colItem) => (
                                <td key={colItem + Random(1, 1000)}> {colItem}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div >

    )

}

export default TableGrid