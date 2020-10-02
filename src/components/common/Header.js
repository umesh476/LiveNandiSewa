import React, { Component } from 'react';
import {Link,withRouter} from "react-router-dom";
import Menubar from './Menubar';
import rawData from "../pages/config.json";
import "./common.css";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Header extends Component {
    state = { 
        isSelected:false
     }
    handleClick=()=>{
        this.setState({
            isSelected:!this.state.isSelected
        })
    }   
    render() { 
        return ( 
            <header>
        {/* <!-- Header Start --> */}
        <div className="header-area">
            <div className="main-header ">
                <div className="header-top d-none d-lg-block">
                    <div className="container-fluid">
                        <div className="col-xl-12">
                            <div className="row d-flex justify-content-between align-items-center">
                                <div className="header-info-left d-flex">
                                    <ul>     
                                        <li>Phone: +91 1234567890</li>
                                        <li>Email: noreply@nandisewa.org</li>
                                    </ul>
                                    {/* <div className="header-social">    
                                        <ul>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a  href="https://www.facebook.com/sai4ull"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li> <a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        </ul>
                                    </div> */}
                                </div>
                                {/* <div className="header-info-right d-flex align-items-center">
                                    <div className="select-this">
                                        <form action="#">
                                            <div className="select-itms">
                                                <select name="select" id="select1">
                                                    <option value="">English</option>
                                                    <option value="">Bangla</option>
                                                    <option value="">Arabic</option>
                                                    <option value="">Hindi</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                    <ul className="contact-now">     
                                        <li><a href="#">Subscribe Now</a></li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom  header-sticky header-mobile-container">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            {/* <!-- Logo --> */}
                            <div className="col-xl-2 col-lg-2">
                                <div className="logo">
                                    {/* <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a> */}
                                    <div className="header-main-heading">Nandi Sewa Sansthan</div>
                                    <div className="hindi-text">परोSपि हितवान् बन्धु</div>
                                </div>
                                {/* **********Collapse************ */}
                                        <div className={`collapse`} id="collapse1">
                                            <div className="collapse-content-container">
                                                <div>
                                                    {rawData && rawData.navs.map((ele, index) => {
                                                        return (
                                                            <div key={index}>
                                                                {!ele.dropdown ? 
                                                                <div className="link-container">
                                                                <Link to={ele.to} className={`collapse-link ${this.props.location.pathname===ele.to?"selected-color":""}`}>{ele.title}</Link>
                                                                </div>
                                                                :
                                                                    <div >
                                                                        <div data-toggle="collapse" data-target="#collapse2" className="collapse-content-2 link-container" onClick={this.handleClick}>
                                                                           <div className="dropdown-title">{ele.dropdown.title}</div>
                                                                           {this.state.isSelected ?<ExpandLessIcon className="expandicon selected-color"/>:<ExpandMoreIcon className="expandicon"/>}
                                                                        </div>
                                                                        <div className={`collapse`} id="collapse2">
                                                                            <div className="collapse-content-child">{
                                                                            ele.dropdown.child.map((child,i)=>{
                                                                                return(
                                                                                    <div  key={i} className="link-container">
                                                                                        <Link className={`collapse-link ${this.props.location.pathname===ele.to?"selected-color":""}`} to={child.to}>{child.title}</Link>
                                                                                    </div>
                                                                                )
                                                                            })
                                                                            }</div>
                                                                        </div>
                                                                    </div>
                                                            }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>

                            </div>
                            <div className="col-xl-10 col-lg-10">
                                <div className="menu-wrapper  d-flex align-items-center justify-content-end">
                                    {/* <!-- Main-menu --> */}
                                    <div className="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">                                                                                          
                                                <li><Link to="/home">Home</Link></li>
                                                <li><Link to="/about">About</Link></li>
                                                <li><Link >Initiatives</Link>
                                                    <ul className="submenu">
                                                        <li><Link to="/nandisamarth">Nandi Samarth</Link></li>
                                                        <li><Link to="/protsahan">Protsahan</Link></li>
                                                        <li><Link to="/shagun">Shagun</Link></li>
                                                        <li><Link to="/samarpan">Samarpan</Link></li>
                                                        <li><Link to="/sanskritisahyog">Sanskritik Sahyog</Link></li>
                                                        <li><Link to="/aayogya">Aayogya</Link></li>
                                                        <li><Link to="/annakshetra">Annakshetra(Mass Kitchen)</Link></li>

                                                    </ul>
                                                </li>
                                                <li><Link to="/joining">Joining</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/* <!-- Header-btn --> */}
                                    <div className="header-right-btn d-none d-lg-block ml-20">
                                        <Link to="/donate" className="btn header-btn">Donate</Link>
                                    </div>
                                </div>
                            </div> 
                            {/* <!-- Mobile Menu --> */}
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                    <div className="header-mobile">
                       <Menubar />
                   </div>
                </div>
            </div>
        </div>
        {/* <!-- Header End --> */}
       
    </header>
         );
    }
}
 
export default withRouter(Header);