import { memo } from "react";
import { ListArticles } from "../profile/ListArticles";

export const ContentHome = memo(()=>{
    return (
    <div className="content-home">
        <div className="main">
            <ListArticles/>
        </div>
    </div>)
})