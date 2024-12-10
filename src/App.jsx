import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';
import './App.css';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <h1 className="text-3xl font-bold text-blue-500 text-center mt-6">
        All Coffee: {coffees.length}
      </h1>

      <div className="mt-8 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {coffees.map((coffee) => (
          <CoffeeCard 
          key={coffee._id} coffee={coffee} 
          coffees={coffees} setCoffees={setCoffees} />
        ))}
      </div>
    </div>
  );
}

export default App;
