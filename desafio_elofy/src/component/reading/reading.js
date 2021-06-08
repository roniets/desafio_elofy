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
        item[2] = item[2].replace(',', '.')
    })
    
    return result
}

export default function Reading() {

    const [csv, setCsv] = useState(null)
    const [backup, setBackup] = useState(null)

    function arrayFiltering (filtersActive) {

        if(filtersActive.length === 0){
            setCsv(backup)
            return 
        }

        let result = [...backup.data]

        filtersActive.forEach((f) => {

            if(filtersActive.includes('abaixo')){
                result = result.filter(value => {
                    return parseFloat(value["4"]) <= 69
                })
                
            }
    
            if(filtersActive.includes('ideal')){
                result = result.filter(value => {
                    return parseFloat(value["4"]) >= 70 && parseFloat(value["4"]) <= 89
                })
            }
    
            if(filtersActive.includes('acima')){
                result = result.filter(value => {
                    return parseFloat(value["4"]) >= 90
                })
            }
    
            if(filtersActive.includes('baixo')){
                result = result.filter(value => {
                    return parseFloat(value["2"]) <= 1.59
                })
            }
    
            if(filtersActive.includes('medio')){
                result = result.filter(value => {
                    return parseFloat(value["2"]) >= 1.60 && parseFloat(value["2"]) <= 1.79
                })
            }
    
            if(filtersActive.includes('alto')){
                result = result.filter(value => {
                    return parseFloat(value["2"]) >= 1.80
                })
            }
    
            if(filtersActive.includes('intolerante')){
                result = result.filter(value => {
                    return parseInt(value["3"]) === 1
                })
            }
    
            if(filtersActive.includes('atleta')){
                result = result.filter(value => {
                    return parseInt(value["5"]) === 1
                })
            }
        })
        
        setCsv({header: csv.header, data: result})
    }

    useEffect(() => {
        fetch('./arquivo_lanches.csv')
            .then(response => response.text())
            .then((text) => {
                setCsv(parseCSV(text))
                setBackup(parseCSV(text))
            })
    }, [])

    return (
        <div>
            <Filters updateData={arrayFiltering} />
            <br />
            <TableGrid csv={csv} />
        </div>
    )
}