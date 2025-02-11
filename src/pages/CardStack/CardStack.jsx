import { useContext } from "react";
import "./CardStack.css";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../../App";
import Card from "../../components/Card/Card"

function CardStack() {
  const navigate = useNavigate();
  const { cards, setCards } = useContext(CardContext); // Fallback till en tom array om cards är undefined

  const title = "Mina kort";

  const handleDeleteCard = (id) => {
    console.log(`Deleted card with id: ${id}`);
    // Implementera borttagningslogik här om nödvändigt
    const newCards = [...cards.slice(0, id), ...cards.slice(id + 1)];
    setCards(newCards);
  };

  // Hantera rendering om listan är tom
  if (cards.length === 0) {
    return (
      <div>
        <h2>{title}</h2>
        <p>Inga kort tillgängliga</p>
        <button type="button" id="goBack" onClick={() => navigate("/")}>
          Hem
        </button>
      </div>
    );
  }

  console.log(cards);

  return (
    <div>
      <h2>{title}</h2>
      <button type="button" id="goBack" onClick={() => navigate("/")}>
        Hem
      </button>
      <div className="card-list">
        {cards.map((card, index) => (
          <Card 
            key={index}
            number={card.number}
            name={card.name}
            cvc={card.cvc}
            vendor={card.vendor}
            expirity={card.expirity}
            deleteCard={handleDeleteCard}
            id={index}
            renderDeleteButton={true}
          />
        ))}
      </div>
    </div>
  );
}

console.log();
export default CardStack;
