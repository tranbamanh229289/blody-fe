import React, { useState } from "react";
import { memo, useCallback, useEffect, useRef } from "react";



export const ContentArticle = memo(()=>{
    console.log("Xin chao")
    const refTitlePost = useRef<HTMLTextAreaElement | null>(null);
    const [title, setTitle] = useState<string>("");
    const refContentPost = useRef<HTMLTextAreaElement | null>(null);
    const [content, setContent] = useState<string>("")
    const textTitleChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>)=>{
        setTitle(event.target.value)
    },[title])

    const textContentChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>)=>{
        setContent(event.target.value)
    }, [content])

    useEffect(()=>{
        if(refTitlePost && refTitlePost.current){
            // refTitlePost.current.style.height= "0px"
            const scrollHeight = refTitlePost.current.scrollHeight;
            refTitlePost.current.style.height = scrollHeight + "px";
        }
        if(refContentPost && refContentPost.current){
            // refContentPost.current.style.height= "0px"
            const scrollHeight = refContentPost.current.scrollHeight;
            refContentPost.current.style.height = scrollHeight + "px";
        }
    },[title, content])

    return (
        <div className="main-post">
            <form className="form-group">
            <textarea className="textarea-post title-post" name="title" onChange={textTitleChange}
            placeholder="Tiêu đề bài viết" autoFocus ref={refTitlePost}/>
            <textarea className="textarea-post content-post"name="content" onChange={(textContentChange)}
            placeholder="Nội dung bài viết" ref={refContentPost}/>
            </form>
        </div>
    )
})