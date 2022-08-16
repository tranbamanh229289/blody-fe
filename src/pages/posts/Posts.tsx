import { memo, useCallback, useState } from "react";
import { Header } from "src/components/Header";
import { Post } from "src/components/post/Post";
import { ContentPosts } from "../../components/post/ContentPosts";
import { IC_UP, IC_SAVE } from "../../assets";

export const Posts = memo(()=>{
    const [showFormNext, setShowFormNext] = useState<boolean>(false);

    // const changeShowFormNext = useCallback((active:boolean)=>{
    //     setShowFormNext(active);
    // }, [showFormNext]);

    return(
        <div className="posts">
            <Header/>
            <ContentPosts/>
            <div className="save">
                <button className="btn btn-light"> <img src={IC_SAVE} alt="" /> Lưu nháp</button>
                <button className="btn btn-primary">Bước tiếp theo</button>
                <a href="#top-page" className="top-page"><img src={IC_UP} alt=""/></a>
            </div>
            <Post show={showFormNext} />
        </div>
       
    )
})