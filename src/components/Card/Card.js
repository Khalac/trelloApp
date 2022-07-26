import React from "react";
import '../Boards/Boards.scss'

function Card(props){
    const {card} = props
    return(
        <div className="card">
            <div className="card-li">{card.title}</div>
       </div>
    )
}
export default Card