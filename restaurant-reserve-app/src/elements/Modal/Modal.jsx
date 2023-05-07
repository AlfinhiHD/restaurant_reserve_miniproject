import { useContext } from "react"
import ReserveContext from "../../context/ReserveContext"
import { useNavigate } from "react-router-dom"
import PrimaryButton from "../PrimaryButton/PrimaryButton"
import TertiaryButton from "../TertiaryButton/TertiaryButton"

const Modal = ({menu}) => {
    const navigate = useNavigate()
    
    const {reserve, setReserve} = useContext(ReserveContext)

    const HandleReserve = () => {
        navigate('/reservesuccess')
    }

    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered"> 
                <div style={{backgroundColor:"#B1464A"}} class="modal-content">
                    <div class="modal-header">
                        <h1 style={{color:"#FFF0DE"}} class="modal-title fs-5" id="exampleModalLabel">Confirm reservation?</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-footer">
                        <PrimaryButton
                            className="button me-5"
                            label="Confirm"
                            type="button"
                            width="100px"
                            height="45px"
                            fontsize="15px"
                            onClick={HandleReserve}
                            databstoggle="modal" 
                            databstarget="#exampleModal"
                        />
                        <TertiaryButton
                            className="button"
                            label="Close"
                            type="button"
                            width="80px"
                            height="45px"
                            fontsize="15px"
                            databsdismiss="modal"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal