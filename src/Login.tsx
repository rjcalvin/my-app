import { inject, observer } from "mobx-react";
import React, {  useState } from "react";



const Login= (props)=> {
  const [userName,setName] = useState('')
  const[password, setPassword] = useState('')

  const onChangeUser = (event: React.ChangeEvent<HTMLInputElement>) =>{
setName(event.target.value)
  }
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(e.target.value)

  }
 const onSubmit = (e:  React.MouseEvent)=>{
   e.preventDefault();
   const {userLogin} = props.rootStore.authStore;
  const { history} = props;
   userLogin(userName,password).then(res=>{
     if(res=== true) history.push('/dashboard');
   })


 }
    return (  
      <div className="App">
        
        <h1>Login</h1>
        {/* <Link to="/dashboard">Dahboard</Link> */}
        <input  name ='userName' type='text' placeholder="enter username" className="rounded text-pink-500" onChange={onChangeUser}/>
        <input type='password' name ='password' placeholder="enter password" onChange={onChangePassword}/>
        <button onClick={onSubmit}>submit</button>

      </div>
  
    );
  }
  
  export default inject("rootStore")(observer(Login));
  