import "./DetailsTitle.css"

const DetailsTitle = (props) => {
    return (
        <div className="detailstitle">
            <h5 className="mb-3">{props.title}</h5>
        </div>
    )
}
export default DetailsTitle