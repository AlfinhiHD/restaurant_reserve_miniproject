import { useNavigate } from "react-router-dom"
import PrimaryButton from "../PrimaryButton/PrimaryButton"
import TertiaryButton from "../TertiaryButton/TertiaryButton"
import { DeleteResevation, GetReservationData } from "../../helpers/gqlHasura"
import { useMutation } from "@apollo/client"

const ModalDelete = ({ id }) => {

    const userString = sessionStorage.getItem("user");
    const user = JSON.parse(userString);

    const navigate = useNavigate()
    const [deleteResevation] = useMutation(DeleteResevation, {
        refetchQueries: [{
            query: GetReservationData,
            variables: {
                userid: user.userid
            }
        }],
    });

    const HandleDelete = () => {
        deleteResevation({
            variables: {
                reservation_id: id
            }
        })
        navigate('/dashboard')
    }

    return (
        <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div style={{ backgroundColor: "#B1464A" }} className="modal-content">
                    <div className="modal-header">
                        <h1 style={{ color: "#FFF0DE" }} className="modal-title fs-5" id="exampleModalLabel">Confirm reservation?</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-white">
                        Are you sure? You will lost your reserve money
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
                            onClick={HandleDelete}
                            databstoggle="modal"
                            databstarget="#deleteModal"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalDelete