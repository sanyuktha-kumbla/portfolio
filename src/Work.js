
import React from "react";
import Card from "./Card";


 const Work = () =>{
    return(<div id="work">
        <h1  className="text-4xl text-center pt-20 ">WORK</h1>
        <div className="flex items-center justify-center pt-10">
        <div className="grid md:grid-cols-3 gap-8 w-3/5 ">
        <Card  imgUrl={"work1.png"}/>
        <Card  imgUrl={"work2.png"}/>
        <Card  imgUrl={"work3.png"}/>
        <Card  imgUrl={"work4.png"}/>
        <Card  imgUrl={"work5.png"}/>
        <Card  imgUrl={"work6.png"}/>
        </div>
        </div>
    
       
    </div>)

 }

 export default Work;