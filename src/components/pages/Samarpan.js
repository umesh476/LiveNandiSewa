import React, { Component } from 'react';
import Header from '../common/Header';
import navData from "./config.json";
import AOS from 'aos';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import "./samarpan.css"
import Slider from '../common/Slider';
import slide1 from "./images/Samarpan/samarpan1.jpg"
import slide2 from "./images/Samarpan/samarpan2.jpg"
import slide3 from "./images/Samarpan/samarpan3.jpg"
import slide4 from "./images/Samarpan/samarpan4.jpg"
import slide5 from "./images/Samarpan/samarpan5.jpg"
import slide6 from "./images/Samarpan/samarpan6.jpg"
import slide7 from "./images/Samarpan/samarpan7.jpg"
import slide8 from "./images/Samarpan/samarpan8.jpg"
import slide9 from "./images/Samarpan/samarpan9.jpg"
import slide10 from "./images/Samarpan/samarpan10.jpg"
import slide11 from "./images/Samarpan/samarpan11.jpg"


class Samarpan extends Component {
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
                        <h2 className="text-center">Samarpan</h2>
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
                                <h1 className="nandi-smarth-heading head-parra">Samarpan</h1>
                                <p className="nandi-smarth-parra head-parra">
                                     Anonymous donation during visit of shrine, temples or religious rituals.
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
 
export default Samarpan;