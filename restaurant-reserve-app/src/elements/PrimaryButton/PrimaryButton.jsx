import "./PrimaryButton.css"

const PrimaryButton = (props) => {
    return (
        <div id="primarybutton">
            <button
                style={{ width: props.width, height: props.height, fontSize: props.fontsize }}
                type={props.type}
                className={props.className}
                onClick={props.onClick}
            >{props.label}</button>
        </div>
    )
}

export default PrimaryButton