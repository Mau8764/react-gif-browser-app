import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChanged = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const safeInput = inputValue.trim()
        if (safeInput.length <= 1) return;
        onNewCategory(safeInput);
        setInputValue("")
    }
    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar un gif"
                value={inputValue}
                onChange={onInputChanged}
            />
        </form>

    )
}
