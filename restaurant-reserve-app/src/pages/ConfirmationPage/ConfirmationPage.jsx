import { useNavigate } from "react-router-dom"
import ContentTitle from "../../elements/ContentTitle/ContentTitle"
import PrimaryButton from "../../elements/PrimaryButton/PrimaryButton"
import SecondaryButton from "../../elements/SecondaryButton/SecondaryButton"
import "./ConfirmationPage.css"
import { useContext } from "react"
import ReserveContext from "../../context/ReserveContext"
import { useQuery } from "@apollo/client"
import { GetMenuData, GetSelectMenu } from "../../helpers/gqlHasura"
import Modal from "../../elements/Modal/Modal"


const ConfirmationPage = () => {

    const { reserve, setReserve } = useContext(ReserveContext)

    const { data } = useQuery(GetSelectMenu, {
        variables: { menu_id: reserve.menuselected}
    })
    
    const navigate = useNavigate();

    return (
        <div className="confirmationpage">
            <ContentTitle title="Please confirm your data / 符鯉須 艮振武 冶旺流" />
            <div className="row">
                <div className="col-md-6">
                    <div className="ms-4">
                        <h5>Reserve Name : </h5>
                        <p>{reserve.reserve_name}</p>
                    </div>
                    <div className="mt-4 ms-4">
                        <h5>Person : </h5>
                        <p>{reserve.person}</p>
                    </div>

                    <div className="mt-4 ms-4">
                        <h5>Date : </h5>
                        <p>{reserve.date}</p>
                    </div>
                    <div className="mt-4 ms-4">
                        <h5>Time : </h5>
                        <p>{reserve.time}</p>
                    </div>

                    <div className="mt-4 ms-4">
                        <h5>Notes : </h5>
                        <p>{reserve.notes}</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="">
                        <h5>Menu Selected : </h5>
                        <img style={{width:"450px"}} src={data?.menu[0].image}/>
                        <p className="mt-2">{data?.menu[0].menu_name}</p>
                    </div>
                    <div className="mt-4">
                        <h5>Price to pay : </h5>
                        <p>${data?.menu[0].price}</p>
                    </div>
                    <div className="mt-5 d-flex">
                        <PrimaryButton
                            className="button me-5"
                            label="Confirm"
                            type="button"
                            width="100px"
                            height="45px"
                            fontsize="15px"
                            databstoggle="modal" 
                            databstarget="#exampleModal"
                        />
                        <SecondaryButton
                            className="button"
                            label="Edit"
                            type="button"
                            width="80px"
                            height="45px"
                            fontsize="15px"
                            onClick={() => navigate('/reserveform')}
                        />
                    </div>
                </div>
            </div>
        <Modal menu={data?.menu[0].menu_name} />
        </div>
    )
}
export default ConfirmationPage