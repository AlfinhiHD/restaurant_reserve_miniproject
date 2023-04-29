import ig from "../../assets/instagram.png"
import tt from "../../assets/tiktok.png"
import loc from "../../assets/location.png"

import "./LinkButton.css"

const LinkButton = () => {
    return (
        <div id="linkbutton">
           <a href="#"><img src={ig}/></a> 
           <a href="#"><img src={tt}/></a> 
           <a href="#"><img src={loc}/></a> 
        </div>

    )
} 
export default LinkButton