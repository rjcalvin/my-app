import { inject, observer } from "mobx-react";
import React, {  useState } from "react";
import SideBar from "./SideBar";



const AppLayout= (props)=> {
  
    return (  
      <div className="AppLayout">
          <SideBar/>
          {props.children}
      </div>
  
    );
  }
  
  export default inject("rootStore")(observer(AppLayout));
  