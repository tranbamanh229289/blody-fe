import { memo } from "react";
import { InforPersonal } from "./InfoPersonal";

export const SideBarProfile = memo(()=>{
    return (
        <div className="sidebar-profile">
            <InforPersonal/>
        </div>
    )
})