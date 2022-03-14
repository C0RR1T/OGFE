import {useState} from "react";
import {Link} from "react-router-dom";
import {IRoute} from "../../../../static/interfaces/OGFE-Interfaces";

import "./dropdown.scss"
import {ArrowDropDown, ArrowDropUp} from "@material-ui/icons";


export default function Dropdown(props: { itemList: IRoute[], title: string }): JSX.Element {

    const [click, setClick] = useState(false);
    const [arrowDown, setArrowDown] = useState(false);

    const handleClick = () => {
        setClick(!click);
        setArrowDown(!arrowDown);
    }

    return (
        <>
            <div onClick={handleClick} className={"dropdown-title"}>
                {props.title} {arrowDown ? <ArrowDropDown className={"dropdown-arrow"}/> :
                <ArrowDropUp className={"dropdown-arrow"}/>}
            </div>
            <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                {props.itemList.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link
                                className={item.cName}
                                to={item.path}
                                onClick={() => setClick(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}