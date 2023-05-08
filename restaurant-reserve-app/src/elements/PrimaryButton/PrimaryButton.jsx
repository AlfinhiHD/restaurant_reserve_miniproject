import "./PrimaryButton.css"

const PrimaryButton = (props) => {
    return (
        <div id="primarybutton">
            <button
                style={{ width: props.width, height: props.height, fontSize: props.fontsize }}
                type={props.type}
                className={props.className}
                onClick={props.onClick}
                data-bs-toggle={props.databstoggle}
                data-bs-target={props.databstarget}
                disabled={props.disabled}
            >{props.label}</button>
        </div>
    )
}

export default PrimaryButton