import './user-section.scss'
import {Link} from "react-router-dom";
import Button from "../../../../components/button/Button";
import {EButtonType} from "../../../../static/enums/OGFE-Enums";
import {AccountCircle} from "@material-ui/icons";

export default function UserSection() {

    //Todo jeol: change to user request
    let userIsLoggedIn = true;

    if (userIsLoggedIn) {
        return (
            <div className={"user-section__profile_container"}>
                <Link to={"/profile"}>
                    <AccountCircle className={"user-section__icon"}/>
                </Link>
            </div>
        );
    } else {
        return (
            <div className={"user-section__profile_container"}>
                <Link to={"log-in"}>
                    <Button label={"Log In"} type={EButtonType.SECONDARY}/>
                </Link>
                <Link to={"sign-up"}>
                    <Button label={"Sign Up"} type={EButtonType.PRIMARY} marginLeft={true}/>
                </Link>
            </div>
        );
    }
}