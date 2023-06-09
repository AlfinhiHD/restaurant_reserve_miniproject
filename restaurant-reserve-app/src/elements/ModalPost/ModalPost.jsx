import { useContext } from "react"
import ReserveContext from "../../context/ReserveContext"
import { useNavigate } from "react-router-dom"
import PrimaryButton from "../PrimaryButton/PrimaryButton"
import TertiaryButton from "../TertiaryButton/TertiaryButton"
import { GetReservationData, PostReserve } from "../../helpers/gqlHasura"
import uuid from 'react-uuid';
import { useMutation } from "@apollo/client"

const ModalPost = () => {
    const userString = sessionStorage.getItem("user");
    const user = JSON.parse(userString);

    const navigate = useNavigate()

    const [postReserve] = useMutation(PostReserve, {
        refetchQueries: [{
            query: GetReservationData,
            variables: {
                userid: user.userid
            }
        }],
    });

    const { reserve, setReserve } = useContext(ReserveContext)

    const HandleReserve = () => {
        postReserve({
            variables: {
                object: {
                    userid: user.userid,
                    reservation_id: uuid(),
                    reserve_name: reserve.reserve_name,
                    person: reserve.person,
                    date: reserve.date,
                    time: reserve.time,
                    menu_id: reserve.menuselected,
                    notes: reserve.notes
                }
            }
        })
        navigate('/reservesuccess')
    }

    return (
        <div className="modal fade" id="postModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div style={{ backgroundColor: "#B1464A" }} className="modal-content">
                    <div className="modal-header">
                        <h1 style={{ color: "#FFF0DE" }} className="modal-title fs-5" id="exampleModalLabel">Confirm reservation?</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-footer">
                        <TertiaryButton
                            className="button me-5"
                            label="Close"
                            type="button"
                            width="80px"
                            height="45px"
                            fontsize="15px"
                            databsdismiss="modal"
                        />
                        <PrimaryButton
                            className="button"
                            label="Confirm"
                            type="button"
                            width="100px"
                            height="45px"
                            fontsize="15px"
                            onClick={HandleReserve}
                            databstoggle="modal"
                            databstarget="#postModal"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalPost