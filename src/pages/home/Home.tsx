import { memo } from "react";
import { ContentHome } from "src/components/home/ContentHome";
import { HeaderHome } from "src/components/home/HeaderHome"

export const Home = memo(()=>{
    return(<div className="home">
        <HeaderHome/>
        <div className="banner-topic">
            <img src="https://thumbs.dreamstime.com/b/technology-science-banner-abstract-chemistry-medicine-blue-157657084.jpg" alt="not found" />
        </div>
        <ContentHome />
    </div>)
})