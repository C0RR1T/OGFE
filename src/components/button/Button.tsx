import {EButtonType} from "../../static/enums/OGFE-Enums";

import "./button.scss";

export default function Button(props: { label: string, type: EButtonType, marginLeft?: boolean}) {

    const classname = "button" +
        (props.type === EButtonType.PRIMARY ? " primary" : " secondary") +
        (props.marginLeft?" margin-left": "");

    return (
        <button className={classname}>
            {props.label}
        </button>
    )
}