
import React from 'react';

const BotCollection = ({ bots, onEnlist }) => {
  return (
    <div>
      {bots.map((bot) => (
        <div key={bot.id} className="bot-card">
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          {/* Call onEnlist when the "Enlist" button is clicked */}
          <button onClick={() => onEnlist(bot)}>Enlist</button>
        </div>
      ))}
    </div>
  );
};
const YourBotArmy = ({ army, onRelease }) => {
  return (
    <div>
      {army.map((bot) => (
        <div key={bot.id} className="bot-card">
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          {/* Call onRelease when the "Release" button is clicked */}
          <button onClick={() => onRelease(bot.id)}>Release</button>
        </div>
      ))}
    </div>
  );
};


export default BotCollection;
