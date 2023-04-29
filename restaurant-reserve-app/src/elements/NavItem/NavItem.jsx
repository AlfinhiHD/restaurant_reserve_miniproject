import './NavItem.css'

const NavItem = (props) => {
    return (
        <a id='navitem'
            className={props.className}
            href={props.href}
        >{props.label}</a>
    )
}

export default NavItem