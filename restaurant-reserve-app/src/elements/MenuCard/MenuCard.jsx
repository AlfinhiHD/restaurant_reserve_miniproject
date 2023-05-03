import "./MenuCard.css"

const MenuCard = (props) => {
    return (
        <div className="menucard card ms-5 mb-4 mt-2" style={{ backgroundColor: "#B1464A", width: "10rem" }}>
            <img src={props.image}
                style={{ width: "6rem", height: "5rem" }}
                className="card-img-top mx-auto"
                alt="image.jpg" />
            <div className="card-body pt-0">
                <div className="d-flex">
                    <h5 className="card-title">{props.name}</h5>
                    <h5 className="card-text ms-5">
                        ${props.price}
                    </h5>
                </div>
                <p className="card-text">
                    {props.category}
                </p>
                <div style = {{ backgroundColor:"#FFF0DE",borderRadius: "10px"}} className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-sm">-</button>
                    <span style={{fontSize:"13px"}}>{props.quantity}</span>
                    <button className="btn btn-sm">+</button>
                </div>
            </div>
        </div>
    )
}
export default MenuCard