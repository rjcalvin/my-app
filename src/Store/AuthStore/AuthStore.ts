import { action,computed, observable } from "mobx";
import LocalStorage from "@shared/LocalStorage";
import jwt from 'jsonwebtoken';
import RootStore from "@store/RootStore";

interface IUserDetail{
    name: String;
    email:String;
    Img?: String;
}
class AuthStore {
    @observable public isLoggedIn: boolean = false;
    @observable public userDetails: IUserDetail;

    private rootStore : RootStore;
    private localStorage : any;

    constructor(rootStoreInst: RootStore){
        this.rootStore= rootStoreInst;
        this.localStorage = new LocalStorage();
        this.isUserAuthenticated();
    }

    @computed
    public get getIsLoggedIn(){
        return this.isLoggedIn;
    }
    @action
    public setIsLoggedIn(value: boolean){
        return this.isLoggedIn=value;
    }

    public isUserAuthenticated() {
    const userToken = this.localStorage.get('userToken');
    // const { exp } = jwt.decode(userToken);
    // this.isLoggedIn = exp * 1000> Date.now() ? true : false;
    this.setIsLoggedIn(userToken!==null) 
    }

    public userLogin = async (userName :String, password: String) =>{
        this.setIsLoggedIn(true);
        this.localStorage.set('userToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
        return true;

    }

    
}
export default AuthStore;