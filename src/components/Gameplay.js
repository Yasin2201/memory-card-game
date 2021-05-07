import uniqid from "uniqid"
import { useEffect, useState } from "react"
import "./styles/display.css"

const Gameplay = props => {
    const [currScore, setCurrScore] = useState([])
    const [highScore, setHighScore] = useState(0)
    const randomCharacters = props.cards

    const updateScore = (e) => {
        setCurrScore([...currScore, e.target.id])
    }

    const checkScore = (e) => {
        const alreadyClicked = currScore.find((item) => { return item === e.target.id })
        //Restarts Game
        if (alreadyClicked) {
            if (currScore.length > highScore) {
                setHighScore(currScore.length)
            }
            setCurrScore([])
        }
    }

    //Randomizes Cards
    const randomize = () => {
        randomCharacters.sort(() => Math.random() - 0.5)
        return randomCharacters
    }

    useEffect(() => {
        randomize()
    })

    const updateScoreBoard = (e) => {
        updateScore(e)
        checkScore(e)
    }

    return (
        <div>
            <h2 id="scoreCard">Score: {currScore.length} || High Score: {highScore}</h2>
            <div id="displayCards">
                {randomCharacters.map((card) => {
                    return (
                        <div key={uniqid()} className="card">
                            <img src={card.image} alt={card.name} id={card.id} onClick={updateScoreBoard} />
                            <h3 className="charInfo">{card.name}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Gameplay