import "./InputField.css"

const InputField = (props) => {
    return (
        <div id="inputfield">
            <label className="form-label mb-2" htmlFor={props.htmlFor}>
                {props.label}
            </label>
            <br/>
            <input
                className={props.className}
                type={props.type}
                id={props.id}
                name={props.name}
                style={props.style}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    )
}
export default InputField