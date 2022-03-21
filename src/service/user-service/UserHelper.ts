import {AxiosResponse} from 'axios'

class UserHelper {
    setUser(user: AxiosResponse<any>) {
        console.log("response: ", user);
    }
}

export default new UserHelper()