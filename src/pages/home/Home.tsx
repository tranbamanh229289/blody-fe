import { memo } from "react";
import { ContentHome } from "src/components/home/ContentHome";
import { HeaderHome } from "src/components/home/HeaderHome"

export const Home = memo(()=>{
    return(<div className="home">
        <HeaderHome/>
        <ContentHome />
    </div>)
})