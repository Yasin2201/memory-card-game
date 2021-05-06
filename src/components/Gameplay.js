import uniqid from "uniqid"
import { useState } from "react"
import "./styles/display.css"

const Gameplay = props => {
    const [currScore, setCurrScore] = useState([])

    const updateScore = (e) => {
        setCurrScore([...currScore, e.target.id])
        // console.log(currScore)
    }
    // console.log(props)
    console.log(currScore)
    return (
        <div>
            <h2>Score: {currScore.length}</h2>
            <div id="displayCards">
                {props.cards.map((card) => {
                    return (
                        <div key={uniqid()} className="card">
                            <img src={card.image} alt={card.name} id={card.id} onClick={updateScore} />
                            <h3 className="charInfo">{card.name}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Gameplay