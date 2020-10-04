import React, { Component } from 'react'
import Header from '../common/Header';
import AOS from 'aos';
import navData from "./config.json";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import "./nandisamarth.css";
import Slider from '../common/Slider';
import slide1 from "./images/NandiSamarth/nandisamarth1.jpg"
import slide2 from "./images/NandiSamarth/nandisamarth2.jpg"
import slide3 from "./images/NandiSamarth/nandisamarth3.jpg"
import slide4 from "./images/NandiSamarth/nandisamarth4.jpg"
import slide5 from "./images/NandiSamarth/nandisamarth5.jpg"
import slide6 from "./images/NandiSamarth/nandisamarth6.jpg"
import slide7 from "./images/NandiSamarth/nandisamarth7.jpg"
import slide8 from "./images/NandiSamarth/nandisamarth8.jpg"
import slide9 from "./images/NandiSamarth/nandisamarth9.jpg"
import slide10 from "./images/NandiSamarth/nandisamarth10.jpg"
import slide11 from "./images/NandiSamarth/nandisamarth11.jpg"

class NandiSamarth extends Component {
    state = {  }
componentDidMount=()=>{
    AOS.init({
        offset:80,
        delay:20,
        duration:1000,
        easing:"ease-in-out",
        mirror:true,
        once:false,
        // desable:"mobile"
     })
}

    render() { 
        let slides=[{photo:slide1},{photo:slide2},{photo:slide3},{photo:slide4},{photo:slide5},
            {photo:slide6},{photo:slide7},{photo:slide8},{photo:slide9},{photo:slide10},{photo:slide11},
        ]
        return ( 
            <div>
                <Header />
                <div className="service-area section-padding30">
                    <div class="section-tittle text-center mb-60">
                        <h2 className="text-center"> Nandi Samarth</h2>
                    </div>
                <div className="img-container">
                    {slides && slides.map((ele,index)=>{
                        return(
                            <Card data-aos="zoom-in">
                                <CardActionArea>
                                    <div className="img-wrapper">
                                    <img src={ele.photo} className="nandi-smarth-photo inner-img"/>
                                    </div>
                                <CardContent className="swap-top">
                                <h1 className="nandi-smarth-heading head-parra">
                                       Nandi Samarth
                                </h1>
                                <p className="nandi-smarth-parra head-parra">
                                To Provide easy loans to poor vendors so as to start their livelihood and small business.
                                </p>
                                </CardContent>    
                                </CardActionArea>
                            </Card>
                        )
                    })}
                </div>
                </div>
             </div>
         );
    }
}
 
export default NandiSamarth;