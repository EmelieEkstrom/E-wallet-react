import { createBrowserRouter } from 'react-router-dom';

import AddCard from "../pages/Addcard/Addcard";
import CardStack from "../pages/CardStack/CardStack";
import HomePage from "../components/Homepage/HomePage";

const router = createBrowserRouter([
    {
        
        path: '/',
        element: <HomePage />
    },
    {
        path: '/lägg-till',
        element: <AddCard />

    },
    {
        path: '/mina-kort',
        element: <CardStack />            
    },
   
]);

export default router;

  