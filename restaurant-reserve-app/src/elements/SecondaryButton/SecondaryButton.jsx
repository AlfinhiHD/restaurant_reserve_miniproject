import "./SecondaryButton.css"

const SecondaryButton = (props) => {
    return (
        <div id="secondarybutton">
            <button
                style={{ width: props.width, height: props.height, fontSize: props.fontsize }}
                type={props.type}
                className={props.className}
                onClick={props.onClick}
                data-bs-dismiss={props.databsdismiss}
            >{props.label}</button>
        </div>
    )
}

export default SecondaryButton