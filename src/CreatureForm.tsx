
import React, { useState } from 'react';

interface CreatureFormProps {
  onAddCreature: (name: string, initiative: number) => void;
}

const CreatureForm: React.FC<CreatureFormProps> = ({ onAddCreature }) => {
  const [name, setName] = useState<string>('');
  const [initiative, setInitiative] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim() === '' || initiative <= 0) {
      alert('Please enter a valid name and initiative score.');
      return;
    }


    onAddCreature(name, initiative);


    setName('');
    setInitiative(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={name}
          placeholder="Creature Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="number"
          value={initiative}
          placeholder="Initiative Score"
          onChange={(e) => setInitiative(Number(e.target.value))}
          required
          min="1"
        />
      </div>
      <button type="submit">Add Creature</button>
    </form>
  );
};

export default CreatureForm;
