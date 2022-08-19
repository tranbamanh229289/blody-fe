import { memo, useCallback, useState } from "react";
import { FeaturedArticles } from "./FeaturedArticles";
import { ListArticles } from "./ListArticles";

export const Articles = memo(()=>{
    const [isActive, setIsActive] = useState<number>(1);
    const setNavbarActive = useCallback((id: number)=>()=>{
        setIsActive(id)
    }, [isActive])

    return (
        <div className="articles">
            <div className="header-articles layout-border">
                <a className={"nav-article " + (isActive == 1 ? "nav-article-focus":"")} href="/profile" 
                onClick={setNavbarActive(1)}><div>Bài viết</div></a>
                <a className={"nav-article " +(isActive == 2 ? "nav-article-focus":"")} href="/profile" 
                onClick={setNavbarActive(2)}><div>Nháp</div></a>
            </div>
            <div className="content-articles">
                <FeaturedArticles/>
                <ListArticles/>
            </div>
        </div>
    )
})