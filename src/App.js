import { useState } from 'react';
import {nanoid} from 'nanoid';
import './App.css';

import ParkingLotForm from "./Components/ParkingLotForm/ParkingLotForm";
import ParkingLotList from './Components/ParkingLotList/ParkingLotList';

export default function App() {

  let [parkingLotItems, setParkingLotItems] = useState([
  {
    id: nanoid(),  
    date: "06/01/2024",
    priority: "Low", 
    link: "https://google.com/",
    description: "Ultimate source of truth.",
  },
  {
    id: nanoid(),  
    date: "05/31/2024",
    priority: "Medium", 
    link: "https://react.dev/",
    description: "React documentation and tutorial",
  },
  ]);
  
  return (
    <div className="App">
      <header>
        <h1>Browser Parking Lot</h1>
        <p>Send most of your browser tabs into retirement.</p>
      </header>
      <main>
        <ParkingLotForm />
        <ParkingLotList parkingLotItems={parkingLotItems}/>
      </main>
    </div>
  );
}
