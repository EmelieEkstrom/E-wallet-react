import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../../App";
import "./Addcard.css";
import Card from "../../components/Card/Card";

function AddCard() {
  const navigate = useNavigate();
  const { setCards, cards } = useContext(CardContext);

  const [numberInput, setNumberInput] = useState("");
  const [expirityInput, setExpirityInput] = useState("");
  const [cvcInput, setCvcInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [vendor, setVendor] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setCards((previousCards) => [
      ...previousCards,
      {
        number: numberInput,
        expirity: expirityInput,
        cvc: cvcInput,
        name: nameInput,
        vendor: vendor,
      },
    ]);
    console.log(cards);
  }

  function goToCardStack() {
    navigate("/mina-kort");
  }

  return (
    <main>
      <h1>Add a new bank card</h1>

      <Card
        number={numberInput}
        name={nameInput}
        cvc={cvcInput}
        vendor={vendor}
        expirity={expirityInput}
        renderDeleteButton={false}
      />

      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            className="card-number"
            placeholder="Enter card number"
            value={numberInput}
            onChange={(e) => setNumberInput(e.target.value)}
          />
          <input
            className="card-expirity"
            placeholder="Enter expirity date"
            value={expirityInput}
            onChange={(e) => setExpirityInput(e.target.value)}
          />
          <input
            className="setNameInput"
            placeholder="Enter name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <div className="flip-card">
            <input
              className="card-cvc"
              placeholder="Enter cvc"
              value={cvcInput}
              onChange={(e) => setCvcInput(e.target.value)}
            />
            <label htmlFor="vendor">Vendor</label>
            <select
              id="vendor"
              name="vendor"
              value={vendor}
              onChange={(e) => setVendor(e.target.value)}
            >
              <option value="Bitcoin-Inc">BITCOIN INC</option>
              <option value="Ninja-Bank">NINJA BANK</option>
              <option value="Block-chain-inc">BLOCK CHAIN INC</option>
              <option value="Evil corp">EVIL CORP</option>
            </select>
          </div>
          <button type="submit" className="add-card">
            Add Card
          </button>
          <button type="button" id="goToCardStack" onClick={goToCardStack}>
            My cards
          </button>
        </form>
      </div>
    </main>
  );
}

export default AddCard;
