import uniqid from "uniqid"
import { useState } from "react"
import "./styles/display.css"

const Gameplay = props => {
    const [currScore, setCurrScore] = useState([])

    const updateScore = (e) => {
        setCurrScore([...currScore, e.target.id])
    }

    const checkScore = (e) => {
        const alreadyClicked = currScore.find((item) => { return item === e.target.id })
        if (alreadyClicked) {
            console.log("gameover")
            setCurrScore([])
        }
    }

    const play = (e) => {
        updateScore(e)
        checkScore(e)
    }
    // console.log(props)
    // console.log(currScore)
    return (
        <div>
            <h2>Score: {currScore.length} || High Score: 0</h2>
            <div id="displayCards">
                {props.cards.map((card) => {
                    return (
                        <div key={uniqid()} className="card">
                            <img src={card.image} alt={card.name} id={card.id} onClick={play} />
                            <h3 className="charInfo">{card.name}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Gameplay