//carousel
import { Link } from "react-router-dom";

const ImageCarousel = () => {
return (
<section className="row">
    <div className="col-md-1"></div>
    <div className="col-md-10">
        <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="images/p1.avif"alt="" className="d-block w-100" height="500px"/>
                </div>

                <div className="carousel-item">
                <img src="images/p2.avif" alt="" className="d-block w-100" height="500px"/>
                </div>

                <div className="carousel-item">
                <img src="images/p3.avif" alt="" className="d-block w-100" height="500px"/>
                </div>

                <div className="carousel-item">
                <img src="images/p4.jpeg" alt="" className="d-block w-100" height="500px"/>
                </div>
            </div>

        <Link to="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        </Link >


        <Link to="#mycarousel" className="carousel-control-next" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        </Link >

       
        </div>
    </div>
    <div className="col-md-1"></div>
</section>
);
}
 

export default ImageCarousel;