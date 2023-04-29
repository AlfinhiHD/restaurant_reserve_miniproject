import LogoBlack from "../../assets/LogoBlack.png"
import Address from "../../elements/Address/Address"
import FooterItem from "../../elements/FooterItem/FooterItem"
import LinkButton from "../../elements/LinkButton/LinkButton"

const Footer = () => {
    return (
        <footer className="pt-5" style={{ backgroundColor: "#FFF0DE" }}>
            <div className="row">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <img
                        src={LogoBlack}
                        alt="Ichiraku Logo"
                        style={{ width: 200, height: 40 }}
                    />
                    <Address className="mt-3" />
                    <LinkButton />
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <FooterItem
                        title="Our Partner"

                        item1="Tsunagakure"
                        ref1="#"

                        item2="Iwagakure"
                        ref2="#"

                        item3="Kirigakure"
                        ref3="#"

                        item4="Amegakure"
                        ref4="#"
                    />
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <FooterItem
                        title="Information"

                        item1="About Us"
                        ref1="#"

                        item2="Our Gallery"
                        ref2="#"

                        item3="Menu"
                        ref3="#"

                        item4="Subscription"
                        ref4="#"
                    />
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <FooterItem
                        title="Contact Us"

                        item1="ichiraku.co@konoha.com"
                        ref1="#"

                        item2="+12 80123 125420"
                        ref2="#"
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer