import React, {Component} from "react";
import AppLayout from "./components/AppLayout";

class dashboard extends Component{
   

    render(){
        return(
          <AppLayout>
            <div>   
            <label>
              Name:
              <input type="text" className="rounded text-pink-500" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </div>
          </AppLayout>
        )
    }
}
export default dashboard;