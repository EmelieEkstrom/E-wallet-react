import React from 'react';
import './HomePage.css';

function HomePage(props) {
  console.log(props); 

  return (
    <main>
    <div>
        <ul>
          <p>Navigering</p>
          <li><a href="lägg-till"></a>Lägg till</li>
          <li><a href="mina-kort"></a>Mina kort</li>
        </ul>         
    </div>
    </main>
  );
};

//console.log(HomePage);
export default HomePage;