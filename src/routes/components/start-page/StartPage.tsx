import './start-page.scss'
import UserService from "../../../service/user-service/UserService";

export default function StartPage(){

    return(

      <div className={"start-page__container"}>
          {UserService.getUserByUserNameAndPasswordService("nikolaj","oliver")}
      </div>
    );
}