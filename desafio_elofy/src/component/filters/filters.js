import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import InputGroup from 'react-bootstrap/InputGroup'
import 'bootstrap/dist/css/bootstrap.min.css'

const Filters = ({ updateData }) => {

    let [filtersActive, setFiltersActive] = useState([])

    function handleChange(e) {

        if (e.target.checked === true) {
            setFiltersActive([...filtersActive.filter(f => f !== e.target.value), e.target.value])
            updateData([...filtersActive.filter(f => f !== e.target.value), e.target.value])
        } else {
            setFiltersActive([...filtersActive.filter(f => f !== e.target.value)])
            updateData(filtersActive.filter(f => f !== e.target.value))
        }

    }

    return (
        <div className="container-filters text-muted">
            <Dropdown className="container-dropdown">
                <Dropdown.Toggle className="text-muted" variant="white" id="dropdown-basic">
                    Filtros
                </Dropdown.Toggle>
                <Dropdown.Menu className="menu-dropdown">
                    <div class="content-dropdown">
                        <h5 className="text-muted">PESO</h5>
                        <InputGroup className="mb-3">
                            <div className="content-input">
                                <InputGroup.Prepend className="input">
                                    <label htmlFor="abaixo">Abaixo do Peso</label>
                                    <input type="checkbox" className="checkbox" value="abaixo" id="abaixo" onChange={handleChange} />
                                </InputGroup.Prepend>
                            </div>
                            <div className="content-input">
                                <InputGroup.Prepend className="input">
                                    <label htmlFor="ideal">Peso Ideal</label>
                                    <input type="checkbox" value="ideal" id="ideal" onChange={handleChange} />
                                </InputGroup.Prepend>
                            </div>
                            <div className="content-input">
                                <InputGroup.Prepend className="input">
                                    <label htmlFor="acima">Acima do Peso</label>
                                    <input type="checkbox" value="acima" id="acima" onChange={handleChange} />
                                </InputGroup.Prepend>
                            </div>
                        </InputGroup>
                    </div>
                    <Dropdown.Divider />
                    <div class="content-dropdown middle-dropdown">
                        <h5 className="text-muted">ALTURA</h5>
                        <InputGroup className="mb-3">
                            <div className="content-input">
                                <InputGroup.Prepend className="input">
                                    <label htmlFor="baixo">Baixo</label>
                                    <input type="checkbox" value="baixo" id="baixo" onChange={handleChange} />
                                </InputGroup.Prepend>
                            </div>
                            <div className="content-input">
                                <InputGroup.Prepend className="input">
                                    <label htmlFor="medio">Mediano</label>
                                    <input type="checkbox" value="medio" id="medio" onChange={handleChange} />
                                </InputGroup.Prepend>
                            </div>
                            <div className="content-input">
                                <InputGroup.Prepend className="input">
                                    <label htmlFor="alto">Alto</label>
                                    <input type="checkbox" value="alto" id="alto" onChange={handleChange} />
                                </InputGroup.Prepend>
                            </div>
                        </InputGroup>
                    </div>
                    <Dropdown.Divider />
                    <div class="content-dropdown">
                        <h5 className="text-muted">OUTROS</h5>
                        <InputGroup className="mb-3">
                            <div className="content-input">
                                <InputGroup.Prepend className="input">
                                    <label htmlFor="intolerante">Intolerante à Lactose</label>
                                    <input type="checkbox" value="intolerante" id="intolerante" onChange={handleChange} />
                                </InputGroup.Prepend>
                            </div>
                            <div className="content-input">
                                <InputGroup.Prepend className="input">
                                    <label htmlFor="atleta">Atleta</label>
                                    <input type="checkbox" value="atleta" id="atleta" onChange={handleChange} />
                                </InputGroup.Prepend>
                            </div>
                        </InputGroup>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )

}

export default Filters