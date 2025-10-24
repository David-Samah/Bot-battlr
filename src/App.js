import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching bots:', error));
  }, []);


  const handleEnlist = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy((prevArmy) => [...prevArmy, bot]);
    } else {
      alert('This bot is already in your army!');
    }
  };
  const handleRelease = (botId) => {
    setArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== botId));
  };

  const handleDelete = (botId) => {
    
    setArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== botId));

 
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        console.log('Bot deleted from backend');
      })
      .catch((error) => console.error('Error deleting bot:', error));
  };

  return (
    <div>
      <h1>Bot Battlr</h1>

      <h2>Available Bots</h2>
      <BotCollection bots={bots} onEnlist={handleEnlist} />

      <h2>Your Bot Army</h2>
      <YourBotArmy
        army={army}
        onRelease={handleRelease}
        onDelete={handleDelete} // Ensure onDelete is passed as a prop
      />
    </div>
  );
};

export default App;
