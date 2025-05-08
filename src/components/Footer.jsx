const Footer = () => {
    return (
    <div>
        <section className="row  mt-4 footer-background-color">
            <div className="col-md-4 text-left text-light">
                <h5 className="p-2 text-center text-info">About Us</h5>
                <p>Get products to cure or manage a variety of health conditions on PharmaDaily! The best online Pharmacy around!</p>
            
                <br/>
            </div>
            <div className="col-md-4 text-light">
                <h5 className="p-2 text-center text-info">Reach Us Out</h5>
                <input className="form-control" type="email" placeholder="Enter your email"/>
                <br/>
                <textarea className="form-control" rows="7" placeholder="Leave a comment"></textarea>
                <br/>
                <input type="submit" value="Send Message" className="btn btn-primary"/>
            </div>
            <div className="col-md-4 ">
                <h4 className="text-center text-info">Connect With Us</h4>
                <br/>
                <a href="https://facebook.com">
                <img src="images/facebook_5.jpg" alt="" className="socialspictures"/>
                </a>
                <a href="https://instagram.com">
                <img src="images/instagram.jpg" alt="" className="socialspictures"/>
                </a>
                <h4 className="text-center text-info">Our Email for product delivery</h4>
                <p>pharmadaily254@gmail.com</p>
                <p className="text-dark">PharmaDaily! The best, fastest and most conviniently available products around!</p>
            </div>
        </section>

    </div>
    );
    }
     
   
    export default Footer;