import IconDeer from '../IconDeer.svg';
import {IconName} from "./IconManagerEnums";
import {Component} from "react";

export default class IconRegistery extends Component<{ iconName: IconName }> {
    render() {
        let {iconName} = this.props;
        let ICON_SRC;
        let ICON_ALT;

        switch (iconName) {
            case IconName.ICON_DEER:
                ICON_SRC = IconDeer;
                ICON_ALT = "icon-deer";
                break;
        }

        return (
            <img src={ICON_SRC} alt={ICON_ALT}/>
        );
    }
}