import ContentTitle from "../../elements/ContentTitle/ContentTitle.jsx"
import PrimaryButton from "../../elements/PrimaryButton/PrimaryButton.jsx"
import resto from "../../assets/resto.jpg"


const DashboardOnReserve = () => {
    return (
        <div className="container">
            <ContentTitle title="Here’s your reservation! / 弥和得" />


            <div className="container"
                style={{
                    backgroundColor: "#FFF0DE", borderRadius: "50px",
                    border: "1px solid #000000"
                }}>
                <div className="row">
                    <div className="col-md-4">
                        <img
                            className="py-3"
                            style={{
                                width: "290px",
                                height: "200px",
                                borderRadius: 50
                            }} src={resto} />
                    </div>
                    <div className="col-md-8 mt-4">
                        <p>Nama : Alfin</p>
                        <p>Date : 18/4/2023 </p>
                        <p>Time : 19.00 - 20.00</p>
                        <PrimaryButton
                            className="mt-2 mb-2"
                            label="Details"
                            type="button"
                            width="100px"
                            height="55px"
                        />
                    </div>
                </div>




            </div>

        </div>
    )
}
export default DashboardOnReserve