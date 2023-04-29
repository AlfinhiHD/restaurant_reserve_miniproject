import "./FooterItem.css"

const FooterItem = (props) => {
    return (
        <div id="footeritem">
            <h5>{props.title}</h5>
            <p><a href={props.ref1}>{props.item1}</a></p>
            <p><a href={props.ref2}>{props.item2}</a></p>
            <p><a href={props.ref3}>{props.item3}</a></p>
            <p><a href={props.ref4}>{props.item4}</a></p>
        </div>
    )
}
export default FooterItem
