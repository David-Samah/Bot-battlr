
import React from 'react';

const BotCard = ({ bot, handleEnlist }) => {
  return (
    <div className="bot-card" onClick={() => handleEnlist(bot)}>
      <h3>{bot.name}</h3>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
    </div>
  );
};

export default BotCard;
