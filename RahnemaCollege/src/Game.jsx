

import React, { useState } from 'react';

function Game() {
  const [players, setPlayers] = useState([]);
  const [currentLetter, setCurrentLetter] = useState('');
  const [scoreTable, setScoreTable] = useState({});

  const startGame = () => {
    const numberOfPlayers = parseInt(prompt('تعداد بازیکنان را وارد کنید:'));
    const newPlayers = [];
    for (let i = 0; i < numberOfPlayers; i++) {
      const playerName = prompt(`نام بازیکن ${i + 1} را وارد کنید:`);
      newPlayers.push({ name: playerName, score: 0 });
    }
    setPlayers(newPlayers);
    generateLetter();
  };

  const generateLetter = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letter = letters.charAt(Math.floor(Math.random() * letters.length));
    setCurrentLetter(letter);
    alert(`حرف انتخاب شده: ${letter}`);
  };

  const playRound = () => {
    const enteredWords = {};
    for (let i = 0; i < players.length; i++) {
      const playerName = players[i].name;
      const wordInput = document.getElementsByName(`word-${playerName}`)[0];
      const cityInput = document.getElementsByName(`city-${playerName}`)[0];
      const foodInput = document.getElementsByName(`food-${playerName}`)[0];
      const colorInput = document.getElementsByName(`color-${playerName}`)[0];
      const word = wordInput.value;
      const city = cityInput.value;
      const food = foodInput.value;
      const color = colorInput.value;

      if (isValidWord(word) && !enteredWords[word]) {
        enteredWords[word] = true;
        players[i].score += 10;
      }

      if (isValidWord(city) && !enteredWords[city]) {
        enteredWords[city] = true;
        players[i].score += 10;
      }

      if (isValidWord(food) && !enteredWords[food]) {
        enteredWords[food] = true;
        players[i].score += 10;
      }

      if (isValidWord(color) && !enteredWords[color]) {
        enteredWords[color] = true;
        players[i].score += 10;
      }

      wordInput.value = '';
      cityInput.value = '';
      foodInput.value = '';
      colorInput.value = '';
    }

    updateScoreTable();

    const continueGame = window.confirm('آیا می خواهید بازی را ادامه دهید؟');
    if (continueGame) {
      generateLetter();
    } else {
      endGame();
    }
  };

  const updateScoreTable = () => {
    const updatedScoreTable = {};
    for (let i = 0; i < players.length; i++) {
      updatedScoreTable[players[i].name] = players[i].score;
    }
    setScoreTable(updatedScoreTable);
  };

  const endGame = () => {
    alert('بازی به پایان رسید. نتایج نهایی:\n\n' + getFinalScores());
  };

  const getFinalScores = () => {
    let finalScores = '';
    for (let i = 0; i < players.length; i++) {
      finalScores += `${players[i].name}: ${players[i].score} امتیاز\n`;
    }
    return finalScores;
  };

  const isValidWord = (word) => {
    return word && word.trim().length > 0 && word.charAt(0).toUpperCase() === currentLetter;
  };

  return (
    <div className="game-container">
      <h1>بازی اسم فامیل</h1>
      <button onClick={startGame}>شروع بازی</button>
      {players.length > 0 && (
        <div className="round">
          <h2>دور جاری</h2>
          <p>حرف فعلی: {currentLetter}</p>
          <p>کلمات را با استفاده از حرف فعلی وارد کنید:</p>
          {players.map((player, index) => (
            <div key={index}>
              <h3>{player.name}</h3>
              <div className="input-group">
                <label>نام:</label>
            
                <input type="text" name={`word-${player.name}`} />
              </div>
              <div className="input-group">
                <label>شهر:</label>
                <input type="text" name={`city-${player.name}`} />
              </div>
              <div className="input-group">
                <label>غذا:</label>
                <input type="text" name={`food-${player.name}`} />
              </div>
              <div className="input-group">
                <label>رنگ:</label>
                <input type="text" name={`color-${player.name}`} />
              </div>
            </div>
          ))}
          <button onClick={playRound}>ثبت</button>
        </div>
      )}
      {Object.keys(scoreTable).length > 0 && (
        <table className="score-table">
          <thead>
            <tr>
              <th>نام</th>
              <th>امتیاز</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={index}>
                <td>{player.name}</td>
                <td>{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Game;

