import React, {useEffect} from 'react'

/* {
    header: ['identificador', 'nome_usuário', 'altura', 'lactose', 'peso', 'atleta']
    data: ['1', 'josé', '1,5', '0', '70', '1']
} */

const parseCSV = (text) => {
    const result = {
        header: [],
        data: [],
        inf: '',
        
    }

    const [firstLine, ...content] = text.split('\n')
    const [header, ...inf] = firstLine.split(';* ')

    result.header = header.split(';')

    result.inf = inf.toString().replace('\r', '')
    
    content.filter(item => item).forEach((item) => {
        result.data.push(item.split(';').filter(item => item && item !== '\r'))
    })
    
    return result
}

const Table = () => {

    useEffect(() => {
        fetch('./arquivo_lanches.csv')
            .then(response => response.text())
            .then((text) => {
                parseCSV(text)
            })
    }, [])

    return (
        <div></div>
    )
}

export default Table