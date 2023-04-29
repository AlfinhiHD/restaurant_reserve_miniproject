import "./PrimaryButton.css"

const PrimaryButton = (props) => {
    return (
        <div id="primarybutton">
            <button
                style={{ width: props.width, height: props.height }}
                type={props.type}
                className={props.className}
            >{props.label}</button>
        </div>
    )
}

export default PrimaryButton