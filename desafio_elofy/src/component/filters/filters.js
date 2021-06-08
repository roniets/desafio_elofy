import React, { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'

const Filters = ({updateData}) => {

    let [filtersActive, setFiltersActive] = useState([])

    function handleChange (e) { 

        if(e.target.checked === true) {
            setFiltersActive([...filtersActive.filter(f => f !== e.target.value), e.target.value])
            updateData([...filtersActive.filter(f => f !== e.target.value), e.target.value])
        } else{
            setFiltersActive([...filtersActive.filter(f => f !== e.target.value)])
            updateData(filtersActive.filter(f => f !== e.target.value))
        }

      }

    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Checkbox value="abaixo" id="abaixo" onChange={handleChange} aria-label="Checkbox for following text input" />
                    <label htmlFor="abaixo">Abaixo do Peso</label>
                </InputGroup.Prepend>
                <InputGroup.Prepend>
                <InputGroup.Checkbox value="ideal" id="ideal" onChange={handleChange} aria-label="Checkbox for following text input" />
                    <label htmlFor="ideal">Peso Ideal</label>
                </InputGroup.Prepend>
                <InputGroup.Prepend>
                <InputGroup.Checkbox value="acima" id="acima" onChange={handleChange} aria-label="Checkbox for following text input" />
                    <label htmlFor="acima">Acima do Peso</label>
                </InputGroup.Prepend>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Checkbox value="baixo" id="baixo" onChange={handleChange} aria-label="Checkbox for following text input" />
                    <label htmlFor="baixo">Baixo</label>
                </InputGroup.Prepend>
                <InputGroup.Prepend>
                <InputGroup.Checkbox value="medio" id="medio" onChange={handleChange} aria-label="Checkbox for following text input" />
                    <label htmlFor="medio">Mediano</label>
                </InputGroup.Prepend>
                <InputGroup.Prepend>
                <InputGroup.Checkbox value="alto" id="alto" onChange={handleChange} aria-label="Checkbox for following text input" />
                    <label htmlFor="alto">Alto</label>
                </InputGroup.Prepend>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Checkbox value="intolerante" id="intolerante" onChange={handleChange} aria-label="Checkbox for following text input" />
                    <label htmlFor="intolerante">Intolerante a Lactose</label>
                </InputGroup.Prepend>
                <InputGroup.Prepend>
                <InputGroup.Checkbox value="atleta" id="atleta" onChange={handleChange} aria-label="Checkbox for following text input" />
                    <label htmlFor="atleta">Atleta</label>
                </InputGroup.Prepend>
            </InputGroup>
        </div>
    )

}

export default Filters