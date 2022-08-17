import { memo, useCallback } from "react";
import { Header } from "../Header";
import { topic } from "src/utils";
export interface ITopic{
    name: string, 
    url: string
}

export const HeaderHome = memo(()=>{
    const renderTopic = useCallback(()=>{
        return <div className="topics"> 
        {topic.map((item: ITopic, index: number)=>
        <a href={item.url} className="topic btn btn-outline-secondary" key={index}>{item.name}</a>)}</div>},[])

    return(<div className="header-home">
        <Header/>
        {renderTopic()}
    </div>)
})