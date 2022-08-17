import { memo } from "react";
import { IC_AVATAR } from "src/assets";

export const DropdownAccount = memo(()=>{
    return (<div className="avatar">
         <img src={IC_AVATAR} alt="" className="img-avatar"/>
    </div>)
})