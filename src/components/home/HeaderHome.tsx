import { memo, useCallback } from "react";
import { Header } from "../Header";
import { topics } from "src/utils";
export interface ITopic{
    name: string, 
    url: string
}

export const HeaderHome = memo(()=>{
    const renderTopic = useCallback(()=>{
        return <div className="topics"> 
        {Object.values(topics).map((item: ITopic, index: number)=>
        <a href={item.url} className="topic btn btn-outline-secondary" key={index}>{item.name}</a>)}</div>},[])

    return(<div className="header-home">
        <Header/>
        <div className="wrapper-topic">
            {renderTopic()}
        </div>
    </div>)
})