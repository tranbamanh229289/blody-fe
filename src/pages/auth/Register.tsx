import { memo } from "react";
import { IC_LOGO } from "../../assets";

export const Register = memo(()=>{
    return(
    <div className="register">
        <div className="main-register">
            <img src={IC_LOGO} alt="not found" className="logo-auth"/>
            <div className="form-group form-auth">
                <input placeholder="full name" type="text" className="form-control" name="name"/>
                <input placeholder="email" type="email" className="form-control" name="email"/>
                <div className="gender">
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" id="male" value={1} checked/>
                    <label className="form-check-label" htmlFor="male">male</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" id="female" value={2}/>
                    <label className="form-check-label" htmlFor="female">female</label>
                    </div>
                </div>
                <input placeholder="password" type="password" className="form-control" name="password"/>
                <input placeholder="re-enter password" type="password" className="form-control"/>
                <button className="btn btn-primary form-control" type="submit">Register</button>
            </div>
        </div>
    </div>)
})