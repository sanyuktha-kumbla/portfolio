
const Card = ({imgUrl}) =>{


    return(
        <div className="container shadow-md h-1/5">
            <img src={require("./assets/"+(imgUrl))}  alt=""></img>
            <p>Social Developer Website</p>
        </div>
    )


}

export default Card;