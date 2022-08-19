import { memo, useCallback } from "react";
import { IC_DISLIKE, IC_LIKE, IC_OPTION, IC_VIEW } from "src/assets";
import { articles} from "src/utils";
import { IArticle} from "type";
import { Paginate } from "../Paginate";

export const ListArticles = memo(()=>{

    const getTopic = useCallback((item: number)=>{
        const id: string = item.toString();
        return id;
    },[])
   
    return (
        <div className="list-articles layout-border">
            <div className="title-list-articles">
                Tất cả bài viết 
            </div>
            <div className="content-list-articles">
                {articles.map((item: IArticle, index:number)=>{
                    return (
                    <div className="article layout-border" key={index}>
                        <div className="image-article">
                            <img src={item.linkImage} alt="" />
                        </div>
                        <div className="content-article">
                            <div className="topic-article">
                                {getTopic(item.type)}
                                <div className="option-article">
                                    <img src={IC_OPTION} alt="not_found" />
                                </div>
                            </div>
                            <div className="title-article">{item.title}</div>
                            <div className="description">{item.description}.....</div>
                            <div className="bottom-content-article">
                                <div className="left"></div>          
                                <div className="right">
                                    <div className="like-view">
                                        <img src={IC_VIEW} alt="not found" className="ic-like-view"/>
                                        <div>{item.view}</div>
                                    </div>
                                    <div className="like-view">
                                        <img src={IC_LIKE} alt="not found" className="ic-like-view"/>
                                        <div>{item.like}</div>
                                    </div>
                                    <div className="like-view">
                                        <img src={IC_DISLIKE} alt="not found" className="ic-like-view"/>
                                        <div>{item.dislike}</div>
                                    </div>
                                </div>                 
                            </div>
                        </div>
                    </div>);
                })}
            </div>
            <div className="bototm-list-articles">
                <Paginate/>
            </div>          
        </div>
    )
})