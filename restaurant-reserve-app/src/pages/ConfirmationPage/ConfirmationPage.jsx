import Cart from "../../elements/Cart/Cart"
import ContentTitle from "../../elements/ContentTitle/ContentTitle"
import PrimaryButton from "../../elements/PrimaryButton/PrimaryButton"
import SecondaryButton from "../../elements/SecondaryButton/SecondaryButton"
import "./ConfirmationPage.css"


const ConfirmationPage = () => {
    return (
        <div className="confirmationpage">
            <ContentTitle title="Please confirm your data / 符鯉須 艮振武 冶旺流" />
            <div className="row">
                <div className="col-md-6">
                    <div className="ms-4">
                        <h5>Reserve Name : </h5>
                        <p>Alfin</p>
                    </div>
                    <div className="mt-4 ms-4">
                        <h5>Person : </h5>
                        <p>4</p>
                    </div>

                    <div className="mt-4 ms-4">
                        <h5>Date : </h5>
                        <p>04/19/2023</p>
                    </div>
                    <div className="mt-4 ms-4">
                        <h5>Time : </h5>
                        <p>Dinner (18.00 - 20.00)</p>
                    </div>

                    <div className="mt-4 ms-4">
                        <h5>Notes : </h5>
                        <p>Duduk di smoke area</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <Cart />
                    <div className="mt-5 d-flex">
                        <SecondaryButton
                            className="me-5"
                            label="Edit"
                            type="button"
                            width="80px"
                            height="45px"
                            fontsize="15px"
                        />
                        <PrimaryButton
                            className="button"
                            label="Confirm"
                            type="button"
                            width="100px"
                            height="45px"
                            fontsize="15px"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ConfirmationPage