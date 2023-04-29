import "./TextArea.css"

const TextArea = (props) => {
    return (
        <div id="textarea">
            <label className="mb-2" htmlFor={props.htmlFor}>
                {props.label}
            </label>
            <br />
            <textarea
                rows={props.rows}
                type={props.type}
                id={props.id}
                name={props.name}
                style={props.style}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                inputClass={props.inputClass}
            />
        </div>
    )
}
export default TextArea