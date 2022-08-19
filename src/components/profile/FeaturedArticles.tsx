import { memo, useCallback, useState } from "react";

export const FeaturedArticles = memo(()=>{
    const [numActive, setNumActive] = useState<number>(1); 

    const handleNext = useCallback((max:number, min:number)=>()=>{
        if(numActive < max){
            setNumActive(prev=>prev+1);
        }
        else{
            setNumActive(min);
        }
    }, [numActive])

    const handlePrevious = useCallback((min:number, max: number)=>()=>{
        if(numActive > min){
            setNumActive(prev=>prev-1);
        }
        else{
            setNumActive(max);
        }
    }, [numActive])

    const attributeActive = useCallback((id:number, valTrue: string, valFalse: string)=>{
        if(numActive === id){
            return valTrue
        }
        else return valFalse
    }, [numActive])

    return (
        <div className="featured-articles layout-border">
            <div className="title-list-articles">
                Bài viết nổi bật
            </div>
            <div className="content-featured-articles">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className={"carousel-item" + (attributeActive(1, "active", ""))}>
                        <img src="https://img.freepik.com/premium-photo/natural-landscape-huangguoshu-waterfall-guizhou_1417-8034.jpg?w=2000" 
                        className="d-block w-100" alt="not found"/>
                        </div>
                        <div className={"carousel-item" + (attributeActive(2, "active", ""))}>
                        <img src="https://i.ytimg.com/vi/JsaW3eyQ76M/maxresdefault.jpg" 
                        className="d-block w-100" alt="not found"/>
                        </div>
                        <div className={"carousel-item" + (attributeActive(3, "active", ""))}>
                        <img src="https://anhdep123.com/109-hinh-anh-phong-canh-ve-thien-nhien-dep-hung-vi/hinh-anh-phong-canh-dep/" 
                        className="d-block w-100" alt="not found"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" onClick={handlePrevious(1,3)}
                    data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" onClick={handleNext(3,1)}
                    data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
})