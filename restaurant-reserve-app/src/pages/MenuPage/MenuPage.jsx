import ContentTitle from "../../elements/ContentTitle/ContentTitle"
import { useNavigate } from "react-router-dom"

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