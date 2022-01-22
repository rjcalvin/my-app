import AuthStore from '@store/AuthStore/AuthStore';

let rootStoreInst:any =null;

export default class RootStore{
    public authStore : AuthStore;

    constructor(){
        if(rootStoreInst){
            return rootStoreInst;
        }
        rootStoreInst=this;
        this.authStore= new AuthStore(this)
    }
}