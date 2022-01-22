import { inject, observer } from "mobx-react";
import React from "react";
import { Route, Redirect , withRouter } from "react-router-dom";

@inject('rootStore')
@observer
class  UnAuthRoute extends React.Component<any, any> {
    constructor(props){
        super(props);
    }

    public render(){
        const { authStore } = this.props.rootStore;
        const {component} = this.props;
        return(<RoutComp component={component} isLoggedIn={authStore.isLoggedIn} {...this.props}/>) 
    }
}

const RoutComp = ({
    component: Comp,
    isLoggedIn,
    ...rest
}) => {
    return(
        <Route {...rest} render={props =>
            !isLoggedIn ?
             (<Comp {...props}/>) 
            : (<Redirect to="/dashboard"/>)
        
        }/>
    )
}

export default withRouter(UnAuthRoute);