import React, {useState, useEffect} from 'react'
import TableGrid from './table'

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

    const[csv, setCsv] = useState(null)

    useEffect(() => {
        fetch('./arquivo_lanches.csv')
            .then(response => response.text())
            .then((text) => {
                setCsv(parseCSV(text))
            })
    }, [])

    return (
        <div>
            <TableGrid csv={csv}/>
        </div>
    )
}