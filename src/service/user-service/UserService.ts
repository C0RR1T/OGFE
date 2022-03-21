import axios from 'axios'
import UserHelper from "./UserHelper";

class UserService {
    getUserByUserNameAndPasswordService(userName:string, password:string){
        return axios.get("http://localhost:8080/api/v1/user/getUserByUserNameAndPassword", {params: {userName, password}})
            .then(response => UserHelper.setUser(response))
    }
}

export default new UserService()