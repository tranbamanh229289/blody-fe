import { memo } from "react";
import { ContentHome } from "./components/ContentHome";
import { HeaderHome } from "./components/HeaderHome";

export const Home = memo(()=>{
    return(<div className="home">
        <HeaderHome/>
        <ContentHome />
    </div>)
})