
import React from "react";
import Card from "./Card";


 const Work = () =>{
    return(<div id="work">
        <h1  className="text-4xl text-center pt-20 ">WORK</h1>
        <div className="flex items-center justify-center pt-10">
        <div className="grid md:grid-cols-3 gap-8 w-3/5 ">
        <Card  imgUrl={"work1.png"} text={"Ecommerce Website"}/>
        <Card  imgUrl={"work2.png"} text={"Make your Burger "}/>
        <Card  imgUrl={"work3.png"} text={"Search user on Github"}/>
        <Card  imgUrl={"work4.png"} text={"Expense Tracker"}/>
        <Card  imgUrl={"work5.png"} text={"To-do App"}/>
        <Card  imgUrl={"work6.png"} text={"Search Images"}/>
        </div>
        </div>
    
       
    </div>)

 }

 export default Work;