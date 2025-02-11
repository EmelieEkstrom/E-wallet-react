/* eslint-disable react/prop-types */

function Card(props) {
  return (
    <div>
      <section className="card-info">
        <div className="front">
          <img
            src="src/assets/chip-dark.svg"
            alt="Chip Logo"
            className="chip-logo"
          />

          <p>{props.number}</p>
          <p>{props.name}</p>
          <p>{props.vendor}</p>
          <p>VALID THRU {props.expirity}</p>
        </div>

        {/*Baksidan */}
        <div className="back">
          <p className="p-cvc">{props.cvc}</p>
        </div>
      </section>
      {props.renderDeleteButton && <button onClick={() => props.deleteCard(props.id)}>Ta bort kort</button>}
    </div>
  );
}

export default Card;
