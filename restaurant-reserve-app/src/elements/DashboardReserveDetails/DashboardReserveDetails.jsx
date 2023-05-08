import { useQuery } from "@apollo/client"
import { GetSelectMenu } from "../../helpers/gqlHasura"
import DetailsTitle from "../DetailsTitle/DetailsTitle"
import PrimaryButton from "../PrimaryButton/PrimaryButton"
import SecondaryButton from "../SecondaryButton/SecondaryButton"
import "./DashboardReserveDetails.css"
import ModalDelete from "../ModalDelete/ModalDelete"

const DashboardReserveDetails = (props) => {

    const { data } = useQuery(GetSelectMenu, {
        variables: { menu_id: props.menu_id }
    })

    return (
        <div className="reservedetails">
            <div className="row">
                <div className="col-md-3 ps-5">
                    <div className="mt-2 mb-5">
                        <DetailsTitle title="Reserve Name :" />
                        <p>{props.name}</p>
                    </div>
                    <div className="mt-2 mb-5">
                        <DetailsTitle title="Person :" />
                        <p>{props.person}</p>
                    </div>
                    <div className="mt-2 mb-4">
                        <DetailsTitle title="Date :" />
                        <p>{props.date}</p>
                    </div>
                </div>
                <div className="col-md-4 ps-5">
                    <div className="mt-2 mb-5">
                        <DetailsTitle title="Time :" />
                        <p>{props.time}</p>
                    </div>
                    <div className="mt-2 mb-4">
                        <DetailsTitle title="Note :" />
                        <p>{props.note}</p>
                    </div>

                </div>
                <div className="col-md-4 mt-1">
                    <div className="ms-5">
                        <DetailsTitle title="Menu :" />
                        <img style={{ width: "300px" }} src={data?.menu[0].image}></img>
                        <p className="mt-3">{data?.menu[0].menu_name}</p>
                        <div className="mt-5 d-flex">
                            <PrimaryButton
                                className="button me-5"
                                label="Reschedule"
                                type="button"
                                width="100px"
                                height="35px"
                                fontsize="13px"
                                
                            />
                            <SecondaryButton
                                className="button"
                                label="Cancel Reservation"
                                type="button"
                                width="140px"
                                height="35px"
                                fontsize="13px"
                                databstoggle="modal"
                                databstarget="#deleteModal"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ModalDelete id={props.reservation_id} />
        </div>
    )
}
export default DashboardReserveDetails