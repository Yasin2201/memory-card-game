import { useEffect, useState } from "react"
import Gameplay from "./Gameplay"

const Cards = () => {
    const [char, setChar] = useState([])
    const [loading, setLoading] = useState(false)

    //Gets characters on component mount
    useEffect(() => {
        const getRick = async () => {
            setLoading(true)
            try {
                const characters = [1, 2, 3, 4, 5, 6, 7, 8]
                const response = await fetch(`https://rickandmortyapi.com/api/character/${characters}`)
                const data = await response.json()

                setChar(data)
                setLoading(false)
                return data
            } catch {
                console.error("Error")
                setLoading(false)
            }
        }
        getRick()
    }, [])

    return (
        <div>
            {loading ? <div>Loading...</div> : <Gameplay cards={char} />}
        </div>
    )
}

export default Cards