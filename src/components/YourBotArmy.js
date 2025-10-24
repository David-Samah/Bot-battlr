import React from 'react';

const YourBotArmy = ({ army, onRelease, onDelete }) => {
  return (
    <div>
      {army.map((bot) => (
        <div key={bot.id} className="bot-card">
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>

          {/* Release Button */}
          <button onClick={() => onRelease(bot.id)}>Release</button>

          {/* Delete Button */}
          <button onClick={() => onDelete(bot.id)}>Delete</button> {/* Ensure onDelete is passed */}
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;

