import React from 'react'
//assests
import classes from "./HomeScreen.module.css";
import black from "../../assests/Images/black.jpg";


const HomeScreen = () => {

    return (
        <div className={classes.screen_container}> 
            <div className={classes.slide}>
                <div className={classes.greySqaure}>

                    <h1 className={classes.title}>Ruby Sunday </h1>
                    <h1 className = {classes.title}>Photography</h1>
                </div>
                <div className = "welcome">
                    <div className="header" style={{ color: Math.random() < 0.5 ? 'pink' : 'blueviolet'}}>welcome</div>
            <img className = {classes.slide_image} src = {black} width= "100%" alt = "black"/>
                </div>
                </div>
            </div>
    )
}
export default HomeScreen;


