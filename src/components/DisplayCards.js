import uniqid from "uniqid"

function DisplayCards(props) {
    console.log(props)
    return (
        <div >
            {props.cards.data.map((card) => {
                return (
                    <div key={uniqid()}>
                        <img src={card.image} alt={card.name} />
                        <h1>{card.name}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayCards