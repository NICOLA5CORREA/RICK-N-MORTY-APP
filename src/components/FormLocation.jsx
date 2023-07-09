import getRandomNumber from "../servers/getRandomNumber"

const FormLocation = ({ setIdLocation }) => {

    const handleSubmit = e => {
        e.preventDefault()
        const inputValue = e.target.inputId.value.trim()
        if (inputValue !== '' || inputValue === '0') {
            setIdLocation(getRandomNumber(126))
        } else {
            setIdLocation(inputValue)
        }
        e.target.inputId.value = ''
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"/>
            <button >Search</button>
        </form>
    )
}


export default FormLocation
