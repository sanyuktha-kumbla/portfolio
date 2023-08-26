
const Card = ({imgUrl,text}) =>{


    return(
        <div className="container shadow-md h-1/5">
            <div className="border-gray-50 p-2 border-4">
            <img src={require("./assets/"+(imgUrl))}  alt=""></img>
            <p className="font-bold text-md">{text}</p>
            </div>
         
        </div>
    )


}

export default Card;