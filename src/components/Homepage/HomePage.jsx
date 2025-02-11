import { CardContext } from "../../App";
import { useContext } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  const { cards } = useContext(CardContext);
  console.log(cards);

  return (
    <main>
      <div>
        <ul>
          <p>Navigering</p>
          <li>
            <Link to="/lägg-till">Lägg till</Link>
          </li>
          <li>
            <Link to="/mina-kort">Mina kort</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

//console.log(HomePage);
export default HomePage;
