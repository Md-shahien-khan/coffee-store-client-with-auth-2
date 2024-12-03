import './App.css'
import {useLoaderData} from 'react-router-dom'
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  // and step 47 change the name coffe to loadedCoffess 48 usestate
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div>
      <h1 className='text-4xl text-purple-400 font-bold text-center'>My Coffee House</h1>
      {/* step 33 */}
      <h2 className='text-center'>coffee length {coffees.length}</h2>
      {/* step 35 map all the coffee */}
      <div className='grid md:grid-cols-2 m-4 gap-20'>
      {
        coffees.map(coffee => <CoffeeCard
        key={coffee._id}
        coffee={coffee}
        // step 48 sending data coffeecard
        coffees={coffees}
        setCoffees={setCoffees}
        ></CoffeeCard>)
      }
      </div>
    </div>
  )
}

export default App
