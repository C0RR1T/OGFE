import IconRegistery from "../../icons/manager/IconRegistery";
import {IconName} from "../../icons/manager/IconManagerEnums"
import Dropdown from "../react-components/dropdown/Dropdown";

import "./navbar.scss";
import {MenuItems} from "./MenuItems";

export default function Navbar() {
    return (
        <div className={"navbar__container"}>
            <div className={"navbar__logo_container"}>
                <IconRegistery iconName={IconName.ICON_DEER}/>
            </div>
            <div className={"navbar__navlink_container"}>
                <Dropdown itemList={MenuItems}/>
            </div>
        </div>

    );
}