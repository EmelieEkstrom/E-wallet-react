import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { createContext, useState } from "react";

export const CardContext = createContext();

function App() {
  const [cards, setCards] = useState([])
  

  return (
    <main>
      <CardContext.Provider value={{cards, setCards}}>
        <RouterProvider router={router} />
      </CardContext.Provider>
    </main>
  );
}

export default App;
