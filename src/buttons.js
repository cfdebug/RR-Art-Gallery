
const Buttons = (props) => {
    return (
        <div>
            <button value={-10} onClick={props.handleIterate}>Back 10</button>
            <button value={-1} onClick={props.handleIterate}>Back</button>
            <button value={1} onClick={props.handleIterate}>Next</button>
            <button value={10} onClick={props.handleIterate}>Next 10</button>
        </div>
    )
}

export default Buttons