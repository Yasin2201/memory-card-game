import { useEffect, useState } from "react"
import Gameplay from "./Gameplay"

const Cards = () => {
    const [char, setChar] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getRick = async () => {
            try {
                const characters = [1, 2, 3, 4]
                const response = await fetch(`https://rickandmortyapi.com/api/character/${characters}`)
                const data = await response.json()

                // randomize(data)
                setChar(data)
                setLoading(false)
                return data
            } catch {
                console.error("Error")
            }
        }

        // const randomize = (characters) => {
        //     const randomizedChars = characters.sort(() => Math.random() - 0.5)
        //     setChar(randomizedChars)
        //     setLoading(false)
        // }

        getRick()
    }, [])

    const check = () => {
        console.log(char)

    }

    return (
        <div>
            <button onClick={check}>Check</button>
            {loading ? <div>Loading...</div> : <Gameplay cards={char} />}
        </div>
    )
}

export default Cards