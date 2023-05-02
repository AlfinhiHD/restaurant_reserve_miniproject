import "./ContentTitle.css"

const ContentTitle = (props) => {
    return (
        <div className="contenttitle">
            <h1>{props.title}</h1>
            <hr style={{border: "1px solid black"}} />
        </div>
    )
}
export default ContentTitle