import ContentTitle from "../../elements/ContentTitle/ContentTitle"
import InputField from "../../elements/InputField/InputField"
import InputRed from "../../elements/InputRed/InputRed"
import MenuCard from "../../elements/MenuCard/MenuCard"
import MenuSelect from "../../elements/MenuSelect/MenuSelect"
import PrimaryButton from "../../elements/PrimaryButton/PrimaryButton"
import Cart from "../Cart/Cart"
import Pagination from "../Pagination/Pagination"

const MenuPage = () => {
    return (
        <div className="">
            <div className="row">
                <div className="col-md-7">
                    <ContentTitle title="Pick your menu / 秘工駆 揶小得 芽无由" />
                    <div className="d-flex">
                        <InputRed />
                        <MenuSelect
                            className="form-select ms-5"
                        />
                        <Pagination />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <MenuCard
                                image="https://firebasestorage.googleapis.com/v0/b/example-marketplace-58fbe.appspot.com/o/menu%2FScreenshot_2023-04-18_031321-removebg-preview.png?alt=media&token=3bfb1f45-573b-42f1-822e-f8b963ed129a"
                                name="Sushi Makimono"
                                category="Sushi"
                                price="2"
                                quantity="1"
                            />
                        </div>
                        <div className="col-md-6">
                            <MenuCard
                                image="https://firebasestorage.googleapis.com/v0/b/example-marketplace-58fbe.appspot.com/o/menu%2FScreenshot_2023-04-18_033820-removebg-preview.png?alt=media&token=3015467e-5b66-4e20-9adb-5302d1f42a9f"
                                name="Sushi Makimono"
                                category="Sushi"
                                price="2"
                                quantity="1"
                            />
                        </div>
                        <div className="col-md-6">
                            <MenuCard
                                image="https://firebasestorage.googleapis.com/v0/b/example-marketplace-58fbe.appspot.com/o/menu%2F1%20531440.png?alt=media&token=376ef3cc-9d57-465a-a956-49bc9e484438"
                                name="Sushi Makimono"
                                category="Sushi"
                                price="2"
                                quantity="1"
                            />
                        </div>
                        <div className="col-md-6">
                            <MenuCard
                                image="https://firebasestorage.googleapis.com/v0/b/example-marketplace-58fbe.appspot.com/o/menu%2F1%20531443.png?alt=media&token=eeaec026-b659-43f5-8e12-9bc05fb04bbc"
                                name="Sushi Makimono"
                                category="Sushi"
                                price="2"
                                quantity="1"
                            />
                        </div>
                    </div>


                </div>
                <div className="col-md-1">
                    <div style={{ backgroundColor: "#B1464A", height: "570px", borderRadius: "100px" }}></div>
                </div>
                <div className="col-md-4">
                    <ContentTitle title="Cart / 駕屡淘" />
                    <Cart />
                    <div className="mt-5 d-flex justify-content-center">
                        <PrimaryButton
                            className=""
                            type="button"
                            label="Checkout"
                            width="150px"
                            height="40px"
                        />
                    </div>
                </div>

            </div >
        </div>
    )
}
export default MenuPage