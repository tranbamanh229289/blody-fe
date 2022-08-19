import { memo, useCallback, useState } from "react";
import { Header } from "src/components/Header";
import { Post } from "src/components/article/Post";
import { ContentArticle } from "../../components/article/ContentArticle";
import { IC_UP, IC_SAVE } from "../../assets";

export const SaveArticle = memo(()=>{
    const [isShowPost, setIsShowPost] = useState<boolean>(false);
    const handleChangeShowPost = useCallback((status:boolean)=>()=>{
        setIsShowPost(status);
    }, [isShowPost]);

    return(
        <div className="save-article">
            <div className={"wrapper-save-article" + (isShowPost ? " opacity":"")}>
                <Header/>
                <ContentArticle/>
                <div className="save">
                    <div className="wrapper-save">
                        <button className="btn btn-danger">
                            <img src={IC_SAVE} alt="" /> Lưu nháp
                        </button>
                        <button className="btn btn-primary" onClick={handleChangeShowPost(true)}>
                            Bước tiếp theo
                        </button>
                    </div>
                    <a href="#top-page" className="top-page">
                        <img src={IC_UP} alt=""/>
                    </a>
                </div>
            </div>
            {isShowPost && <Post save="Đăng bài" onExit={handleChangeShowPost(false)}/>}
        </div>
       
    )
})