import React, { Component } from 'react'
import Header from '../common/Header';
import navData from "./config.json";
import AOS from 'aos';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import "./samarpan.css"
import Slider from '../common/Slider';
import slide1 from "./images/Sanskriti/sanskriti1.jpg";
import slide2 from "./images/Sanskriti/sanskriti2.jpg"
import slide3 from "./images/Sanskriti/sanskriti3.jpg"
import slide4 from "./images/Sanskriti/sanskriti4.jpg"

class SanaskritiSahayog extends Component {
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
        let slides=[{photo:slide1},{photo:slide2},{photo:slide3},{photo:slide4},]
        return (
            <div>
            <Header /> 
            <div className="service-area section-padding30">
                    <div class="section-tittle text-center mb-60">
                        <h2 className="text-center">Sanskritik Sahyog</h2>
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
                                <h1 className="nandi-smarth-heading head-parra">Sanskritik Sahyog</h1>
                                <p className="nandi-smarth-parra head-parra">
                                For a better indian society organize and take part in such organization  of cultural promotion and tradition.
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
 
export default SanaskritiSahayog;