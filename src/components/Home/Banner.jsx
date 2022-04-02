import React from "react";
import './Banner.css';
import banner_couples from "../../assets/images/banner-couples.png";
const Banner =()=>{
    return (
        <div className=" d-flex justify-content-between align-items-center text-white banner-container">
            <div className="section-one">
                <h2>Ready to find New Friends, Dates, Models or people next door.</h2>
                <p className="mt-4 mb-4">Quick date is a one stop platform to meet new people, Share your photo & Videos, go on a paid date.</p>
                <div>
                    <button className="mr-2 p-4 border-0 rounded-pill">Create an Account</button>
                    <button className="text-white border-0 how-it-works"><span className="how-it-works">See how it works</span></button>
                </div>
            </div>
            <img src={banner_couples} alt="banner-couples" />
        </div>
    )
}

export default Banner;