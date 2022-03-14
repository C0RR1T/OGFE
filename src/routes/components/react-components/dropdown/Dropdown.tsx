import {useState} from "react";
import {Link} from "react-router-dom";
import {ERoute} from "../../../../enums/OGFE-Enums";

import "./droopdown.scss"


export default function Dropdown(props: { itemList: ERoute[]; }): JSX.Element {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
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