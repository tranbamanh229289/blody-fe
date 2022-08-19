import { memo } from "react";
import { IC_LOGO, IC_MESSAGE, IC_NOTIFI, IC_WRITE, IC_AVATAR} from "../assets";

export const Header=memo(()=>{
    return (
        <div className="header" id="top-page">
            <div className="content-header">
                <a href="/home"><img src={IC_LOGO} alt="not found" className="logo-home"/></a>
                <div className="search">
                    <input type="text" placeholder="search article" className="form-control"/>
                </div>
                <div className="options">
                    <button className="option message">
                        <img src={IC_MESSAGE} alt="not found" className="img-option"/>
                    </button>
                    <div className="option write-post">
                        <a href="write-posts" className="btn btn-light btn-cf">
                            <img src={IC_WRITE} alt="not found"  className="img-option"/>
                            <div>Viết bài</div>
                        </a>
                    </div>
                    <button className="option notification">
                        <img src={IC_NOTIFI} alt="not found" className="img-option" />
                    </button>
                    <div className="avatar-header">
                        <a href="/profile"><img src={IC_AVATAR} alt="" className="img-avatar"/></a>
                    </div>
                </div>
            </div>
        </div>)
})