import { memo } from "react";
import { Dropdown } from "react-bootstrap";
import { IC_AVATAR } from "src/assets";
import SplitButton from 'react-bootstrap/SplitButton';

export const DropdownAccount = memo(()=>{
    return (<div className="avatar">
         <img src={IC_AVATAR} alt="" className="img-avatar"/>
    </div>)
})