
import "./InputSelect.css"
const InputSelect = (props) => {
    return (
        <div className="inputselect">
            <label className="form-label mb-2" htmlFor={props.htmlFor}>
                {props.label}
            </label>
            <br/>
            <select
                name={props.name}
                value={props.value}
                className={props.className}
                aria-label="Default select example"
                onChange={props.onChange}
            >
                <option disable="" value="" hidden="">
                    Pick your time
                </option>
                <option name="category" value="Lunch (12.00 - 14.00) ">
                    Lunch (12.00 - 14.00) 
                </option>
                <option name="category" value="Dinner (18.00 - 20.00)">
                    Dinner (18.00 - 20.00)
                </option>
            </select>
        </div>
    )
}
export default InputSelect