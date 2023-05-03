import "./InputRed.css"

const InputRed = (props) => {
    return (
        <div id="inputred">
            <input
                className="form-control"
                type={props.type}
                id={props.id}
                name={props.name}
                style={props.style}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                inputclass={props.inputclass}
                placeholder="Search by name"
            />
        </div>
    )
}
export default InputRed