import InputGroup from 'react-bootstrap/InputGroup'



const Filters = ({csv, updateData}) => {

    function handleChange (e) {
        updateData(e.target.value)
      }

    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Checkbox value="abaixo" id="abaixo" onChange={handleChange} aria-label="Checkbox for following text input" />
                    <label for="abaixo">Abaixo do Peso</label>
                </InputGroup.Prepend>
                <InputGroup.Prepend>
                <InputGroup.Checkbox id="ideal" aria-label="Checkbox for following text input" />
                    <label for="ideal">Peso Ideal</label>
                </InputGroup.Prepend>
                <InputGroup.Prepend>
                <InputGroup.Checkbox id="acima" aria-label="Checkbox for following text input" />
                    <label for="acima">Acima do Peso</label>
                </InputGroup.Prepend>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Checkbox id="baixo" aria-label="Checkbox for following text input" />
                    <label for="baixo">Baixo</label>
                </InputGroup.Prepend>
                <InputGroup.Prepend>
                <InputGroup.Checkbox id="medio" aria-label="Checkbox for following text input" />
                    <label for="medio">Mediano</label>
                </InputGroup.Prepend>
                <InputGroup.Prepend>
                <InputGroup.Checkbox id="alto" aria-label="Checkbox for following text input" />
                    <label for="alto">Alto</label>
                </InputGroup.Prepend>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Checkbox id="intolerante" aria-label="Checkbox for following text input" />
                    <label for="intolerante">Intolerante a Lactose</label>
                </InputGroup.Prepend>
                <InputGroup.Prepend>
                <InputGroup.Checkbox id="atleta" aria-label="Checkbox for following text input" />
                    <label for="atleta">Atleta(Bolsonaro)</label>
                </InputGroup.Prepend>
            </InputGroup>
        </div>
    )

}

export default Filters