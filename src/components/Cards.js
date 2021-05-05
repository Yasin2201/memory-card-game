import { useEffect, useState } from "react"

function Cards() {
    const [char, setChar] = useState({})

    useEffect(() => {
        async function getRick() {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character/[1, 2, 3]")
                const data = await response.json()

                console.log(data)
                setChar({ data })
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
        </div>
    )
}

export default Cards