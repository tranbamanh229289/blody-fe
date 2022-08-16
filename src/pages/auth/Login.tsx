import { memo } from "react";
import { IC_LOGO } from "../../assets";

export const Login = memo(()=>{
    return(<div className="login">
        <div className="main-login">
            <img src={IC_LOGO} alt="not found" className="logo-auth"/>
            <div className="form-group form-auth">
                <input placeholder="email" type="email" className="form-control" name="email"/>
                <input placeholder="password" type="password" className="form-control" name="password"/>
                <button className="btn btn-primary form-control">Login</button>
            </div>
        </div>
    </div>)
})