import { memo } from "react";
import { IC_LOGO, IC_MESSAGE, IC_NOTIFI, IC_WRITE, IC_AVATAR } from "../assets";

export const Header=memo(()=>{
    return (
        <div className="header" id="top-page">
            <img src={IC_LOGO} alt="not found" className="logo-home" />
            <div className="search">
                <input type="text" placeholder="search article" className="form-control"/>
            </div>
            <div className="options">
                <div className="option message">
                    <img src={IC_MESSAGE} alt="not found" className="img-option"/>
                </div>
                <div className="option notification">
                    <img src={IC_NOTIFI} alt="not found" className="img-option" />
                </div>
                <div className="option write-post">
                    <a href="write-posts" className="btn btn-light write">
                        <img src={IC_WRITE} alt="not found"  className="img-option"/>
                        Viết bài
                    </a>
                </div>
                <div className="avatar">
                    <img src={IC_AVATAR} alt="" className="img-avatar"/>
                </div>
            </div>
        </div>)
})