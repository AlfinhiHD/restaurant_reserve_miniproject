import ContentTitle from "../../elements/ContentTitle/ContentTitle"
import InputField from "../../elements/InputField/InputField"
import InputRed from "../../elements/InputRed/InputRed"
import PrimaryButton from "../../elements/PrimaryButton/PrimaryButton"
import Pagination from "../Pagination/Pagination"
import { useNavigate } from "react-router-dom"

// import { GetSearchMenu } from "../../helpers/gqlHasura"
import { useState } from "react"
import { useQuery } from "@apollo/client"
import Carousel from "../../elements/Carousel/Carousel"

const MenuPage = () => {

    // const { data } = useQuery(GetSearchMenu)

    const navigate = useNavigate();

    return (
        <div className="">
                <div className="">
                    <ContentTitle title="Our Menu Package / 小卯瑠 雌无輸 波狗慧寿" />
                    <div className="d-flex justify-content-center">
                        <Carousel/>
                    </div>

                </div>
            </div >
    )
}
export default MenuPage