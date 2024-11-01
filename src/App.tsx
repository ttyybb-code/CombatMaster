
import React, { useState } from 'react';
import CreatureForm from './CreatureForm.tsx'; // Import the CreatureForm component

interface Creature {
  name: string;
  initiative: number;
}

const App: React.FC = () => {
  const [creatures, setCreatures] = useState<Creature[]>([]); // State to store the list of creatures
  const [turnIndex, setTurnIndex] = useState<number>(0); // State to track the current turn

  // Function to add a new creature
  const handleAddCreature = (name: string, initiative: number) => {
    const newCreature = { name, initiative };
    setCreatures((prevCreatures) => {
      // Add the new creature and sort the list by initiative
      const updatedCreatures = [...prevCreatures, newCreature].sort(
        (a, b) => b.initiative - a.initiative
      );
      return updatedCreatures;
    });
  };

  // Function to cycle to the next turn
  const handleNextTurn = () => {
    setTurnIndex((prevIndex) => (prevIndex + 1) % creatures.length);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: '100vh',
        paddingTop: '20px'
      }}
    >
      <h1>Combat Master</h1>

      {/* Creature form to add new creatures */}
      <CreatureForm onAddCreature={handleAddCreature} />

      {/* Display the list of creatures sorted by initiative */}
      <ul>
        {creatures.map((creature, index) => (
          <li
            key={index}
            style={{
              fontWeight: index === turnIndex ? 'bold' : 'normal', // Highlight the current creature's turn
            }}
          >
            {creature.name} - Initiative: {creature.initiative}
          </li>
        ))}
      </ul>

      {/* Button to cycle through turns */}
      {creatures.length > 0 && (
        <button onClick={handleNextTurn}>Next Turn</button>
      )}
    </div>
  );
};

export default App;
