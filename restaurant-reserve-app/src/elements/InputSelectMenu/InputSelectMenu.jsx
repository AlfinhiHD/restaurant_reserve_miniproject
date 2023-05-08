
import "./InputSelectMenu.css"
const InputSelectMenu = (props) => {
    return (
        <div className="inputselectmenu">
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
                    Select Your Menu
                </option>
                <option name="category" value="1">
                    Unagi Lover 
                </option>
                <option name="category" value="4">
                    Party Pack (A)
                </option>
                <option name="category" value="2">
                    Party Pack (C)
                </option>
                <option name="category" value="3">
                    Party Pack (D)
                </option>
                <option name="category" value="5">
                    Salmon Lover
                </option>
            </select>
        </div>
    )
}
export default InputSelectMenu