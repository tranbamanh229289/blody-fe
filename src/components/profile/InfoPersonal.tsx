import { memo } from "react";
import { IC_AVATAR, IC_CAMERA, IC_PEN } from "src/assets";

export const InforPersonal = memo(()=>{
    return (
        <div className="info-user layout-border">
            <div className="avatar-profile">
                <img src={IC_AVATAR} className="img-avatar-profile"/>
                <button className="camera">
                    <img src={IC_CAMERA} className="img-camera"/>
                </button>
            </div>
            <div className="name-user">Trần Bá Mạnh</div>
            <div className="email-user">@tranbamanhlovevietnam</div>
            <div className="introduction">If you think you can do it, you can do it</div>
            <div className="edit">
                <button className="btn btn-light btn-cf">
                    <img src={IC_PEN} alt="not found" className="img-option"/><div>Sửa</div>
                </button>
            </div>
            <div className="info-article">
                    <div className="num">
                        <label>posts</label>
                        <div className="val">10</div>
                    </div>
                    <div className="num">
                        <label>likes</label>
                        <div className="val">10</div>
                    </div>
                    <div className="num">
                        <label>dislikes</label>
                        <div className="val">10</div>
                    </div>
                </div>
        </div>
    )
})