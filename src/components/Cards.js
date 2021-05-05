import { useEffect, useState } from "react"
import DisplayCards from "./DisplayCards"

function Cards() {
    const [char, setChar] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const getRick = async () => {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character/[1, 2, 3]")
                const data = await response.json()

                // console.log(data)
                setChar({ data })
                setLoading(false)
                return data
            } catch {
                console.error("Error")
            }
        }
        getRick()
    }, [])

    const check = () => {
        console.log(char)

    }

    return (
        <div>
            <button onClick={check}>Check</button>
            {loading ? <div>Loading...</div> : <DisplayCards cards={char} />}
        </div>
    )
}

export default Cards