import React, { useState, useEffect } from 'react'
import Filters from '../filters/filters'
import TableGrid from '../table/table'

const parseCSV = (text) => {
    const result = {
        header: [],
        data: [],
    }
    const [header, ...content] = text.split('\n')

    result.header = header.split(';')
    result.header.pop()

    content.filter(item => item).forEach((item) => {
        result.data.push(item.split(';'))
    })
    result.data.forEach((item) => {
        item.pop()
    })
    console.log(result)
    return result
}

export default function Reading() {

    const [csv, setCsv] = useState(null)

    function arrayFiltering (value) {
        const result = csv.data.filter(value => {
            console.log(value["4"])
            return parseFloat(value["4"]) <= 69
        })
        setCsv({header: csv.header, data: result})
        console.log(result)
    }

    useEffect(() => {
        fetch('./arquivo_lanches.csv')
            .then(response => response.text())
            .then((text) => {
                setCsv(parseCSV(text))
            })
    }, [])

    return (
        <div>
            <Filters updateData={arrayFiltering} csv={csv} />
            <br />
            <TableGrid csv={csv} />
        </div>
    )
}