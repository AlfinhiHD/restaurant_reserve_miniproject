import "./MenuSelect.css"

const MenuSelect = (props) => {
    return (
        <div className="menuselect">
            <select
                name={props.name}
                value={props.value}
                className={props.className}
                aria-label="Default select example"
                onChange={props.onChange}
            >
                <option disable="" value="" hidden="">
                    All Category
                </option>
                <option name="category" value="Electronic">
                    Electronic
                </option>
                <option name="category" value="Furniture">
                    Furniture
                </option>
                <option name="category" value="Tools">
                    Tools
                </option>
            </select>
        </div>

    )
}
export default MenuSelect