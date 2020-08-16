import HttpRequester from './http'

class UserAuthService extends HttpRequester {
    constructor () {
        // api api
        super();
    }

    async authUser (email, password) {
        const {data} = await this.request('POST', 'http://localhost:8001/api/login', {email:email, password:password});
        return data;
    }

    async registerUser (name, email, password, cPassword) {
        const {data} = await this.request('POST', 'http://localhost:8001/api/register', {name: name,email:email, password:password, c_password:cPassword});
        return data;
    }
}

export default UserAuthService