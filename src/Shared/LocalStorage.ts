let LocalStorageInst:any =null;

type StorageFields = | 'userToken' ;
export default class LocalStorage{
    private localstorage:any;

    constructor(){
        if(LocalStorageInst){
            return LocalStorageInst;
        }
        LocalStorageInst=this;
        this.localstorage=window.localStorage;
    }

public get(key : StorageFields){
    try{
        return JSON.parse(this.localstorage.getItem(key));
    }catch (error){
        return this.localstorage.getItem(key);
    }
}
public set(key: StorageFields, value:any){
    try{
    return this.localstorage.setItem(key, JSON.stringify(value));
    }catch(error){
        return this.localstorage.setItem(key, value);
    }
}
public delete(key : StorageFields){
    return this.localstorage.removeItem(key)
}
public clear(key : StorageFields){
    return this.localstorage.clear();
}
}

