import { memo } from "react";
import { Header } from "../Header";

export const HeaderHome = memo(()=>{
    return(<div className="header-home">
        <Header/>
        <div className="bottom-header-home">
            <div className="topics">
                <a href="science" className="topic btn btn-light">Khoa học</a>
                <a href="techonology" className="topic btn btn-light">Công nghệ</a>
                <a href="art" className="topic btn btn-light">Nghệ thuật</a>
                <a href="economic" className="topic btn btn-light">Kinh tế</a>
                <a href="cuture" className="topic btn btn-light">Văn hóa</a>
                <a href="society" className="topic btn btn-light">Xã hội</a>
                <a href="religion" className="topic btn btn-light">Tôn giáo</a>
                <a href="philosophy" className="topic btn btn-light">Triết học</a>
                <a href="history" className="topic btn btn-light">Lịch sử</a>
                <a href="life" className="topic btn btn-light">Sống</a>
            </div>
        </div>
    </div>)
})