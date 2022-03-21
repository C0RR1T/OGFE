import IconRegistery from "../../icons/manager/IconRegistery";
import {IconName} from "../../icons/manager/IconManagerEnums"
import Dropdown from "../react-components/dropdown/Dropdown";

import "./navbar.scss";
import {GameMenuItems} from "./GameMenuItems";
import {Link} from "react-router-dom";
import UserSection from "./user-section/UserSection";

export default function Navbar() {
    return (
        <div className={"navbar__container"}>
            <div className={"navbar__logo_container"}>
                <IconRegistery iconName={IconName.ICON_DEER}/>
            </div>
            <div className={"navbar__navlink_container"}>
                <Dropdown itemList={GameMenuItems} title={"Games"}/>
                <Link to={"about-us"} className={"navbar__nav-item"}>About Us</Link>
                <Link to={"install-guide"} className={"navbar__nav-item"}>Installation Guide</Link>
                <Link to={"Release Notes"} className={"navbar__nav-item"}>Release Notes</Link>
                <Link to={"faq"} className={"navbar__nav-item"}>FAQ</Link>
            </div>
                <UserSection/>
        </div>
    );
}
