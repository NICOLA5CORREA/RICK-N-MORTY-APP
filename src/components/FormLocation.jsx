import getRandomNumber from "../servers/getRandomNumber"

const FormLocation = ({ setIdLocation }) => {

    const handleSubmit = e => {
        e.preventDefault()
        const inputValue = e.target.inputId.value.trim()
        if (inputValue === '' || inputValue === '0') {
            setIdLocation(getRandomNumber(126))
        } else {
            setIdLocation(inputValue)
        }
        e.target.inputId.value = ''
    }

    return (
        <form className="input-container" onSubmit={handleSubmit}>
            <input id="inputId" type="text" placeholder="Enter a number '1 to 126'"/>
            {/* <select id="selectId" name="select">
                <option value="location">Select location</option>
                <option value="location">Optimus</option>
                <option value="location"></option>
                <option value="location"></option>
                <option value="location"></option>
                <option value="location"></option>
                <option value="location"></option>
                <option value="location"></option>
                <option value="location"></option>
                <option value="location"></option>
                <option value="location"></option>
                <option value="location"></option>
                <option value="location"></option>
                <option value="location"></option>
                <option value="location"></option>
            </select> */}
            <button >Search</button>
        </form>
    )
}


export default FormLocation
