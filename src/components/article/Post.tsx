import { memo } from "react";
import { topics } from "src/utils";

interface IVPost{
    save:string,
    onExit: ()=>void,
}
export const Post = memo(({save, onExit}: IVPost)=>{
    
    return (
    <div className="post layout-border">
        <div className="form-group">
            <label htmlFor="topic-post">Mô tả</label>
            <textarea className="form-control" id="topic-post" rows={3}></textarea>
        </div>
        <div className="select-topic">
            <label >Chủ đề</label>
            <select name="topic" className="form-select">
                {Object.keys(topics).map((key, index)=>{
                    console.log(typeof(key))
                    return <option value="" key={index}>{key}</option>
                })}
            </select>
        </div>
        <div className="create-post">
            <button className="btn btn-light" onClick={onExit}>Quay lại</button>
            <button className="btn btn-primary">{save}</button>
        </div>
    </div>)
})