import { memo } from "react";

interface IPost{
    show:boolean
}
export const Post = memo((props:IPost)=>{
    
    return (
    <div className="post">
            <div className="description">
            <label htmlFor="description">Mô tả</label>
            <input type="text" className="form-control" id="description"/>
        </div>
        <div className="topic">
            <label >Chủ đề</label>
            <select name="topic" className="form-select">
                <option value="">Khoa học</option>
                <option value="">Công nghệ</option>
                <option value="">Nghệ thuật</option>
                <option value="">Kinh tế</option>
            </select>
        </div>
        <div className="create-posts">
            <button className="btn btn-light">Quay lại</button>
            <button className="btn btn-primary">Đăng bài</button>
        </div>
    </div>)
})