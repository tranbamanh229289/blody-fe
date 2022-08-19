import { memo } from "react";
import { Header } from "src/components/Header";
import { Articles } from "src/components/profile/Articles";
import { SideBarProfile } from "src/components/profile/SidebarProfile";


export const Profile = memo(()=>{
    return (
        <div className="profile">
           <Header/>
            <div className="content-profile">
                <div className="background-user">
                        <img src="https://thumbs.dreamstime.com/b/winter-landscape-fir-trees-covered-snow-snowy-hill-white-cloudy-sky-long-winter-nature-forest-banner-copy-226122974.jpg"/>
                </div>
                <SideBarProfile/>
                <Articles/>
            </div>
        </div>
    )
})