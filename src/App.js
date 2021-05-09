import "./App.css";
import React, { useState } from "react";
import Player from "./components/Player/Player";

let playerNumber = 2;

function App() {
  const [players, setPlayers] = useState([
    {
      money: 0,
      id: 1,
      stavka: 0,
      winCoins: "",
      loseCoins: "",
    },
  ]);

  const addOnePlayer = () => {
    setPlayers([
      ...players,
      {
        money: 0,
        id: playerNumber,
        stavka: 0,
        winCoins: "",
        loseCoins: "",
      },
    ]);
    playerNumber = playerNumber + 1;
  };

  const removeOnePlayer = () => {
    players.pop();
    const newlikedArr = players.filter((el) => el !== playerNumber);
    setPlayers(newlikedArr);
    playerNumber = playerNumber - 1;
  };

  const plusTen = (item) => {
    const newArr = players.map((el) => {
      if (el.id === item.id) {
        if (item.money >= 10) {
          el.stavka = el.stavka + 10;
          el.money = el.money - 10;
        }
      }
      return el;
    });
    setPlayers(newArr);
  };
  const minusTen = (item) => {
    const newArr = players.map((el) => {
      if (el.id === item.id) {
        if (item.stavka >= 10) {
          el.stavka = el.stavka - 10;
          el.money = el.money + 10;
        }
      }
      return el;
    });
    setPlayers(newArr);
  };

  const plusFive = (item) => {
    const newArr = players.map((el) => {
      if (el.id === item.id) {
        if (item.money >= 5) {
          el.stavka = el.stavka + 5;
          el.money = el.money - 5;
        }
      }
      return el;
    });
    setPlayers(newArr);
  };
  const minusFive = (item) => {
    const newArr = players.map((el) => {
      if (el.id === item.id) {
        if (item.stavka >= 5) {
          el.stavka = el.stavka - 5;
          el.money = el.money + 5;
        }
      }
      return el;
    });
    setPlayers(newArr);
  };

  const plusOne = (item) => {
    const newArr = players.map((el) => {
      if (el.id === item.id) {
        if (item.money >= 1) {
          el.stavka = el.stavka + 1;
          el.money = el.money - 1;
        }
      }
      return el;
    });
    setPlayers(newArr);
  };
  const minusOne = (item) => {
    const newArr = players.map((el) => {
      if (el.id === item.id) {
        if (item.stavka >= 1) {
          el.stavka = el.stavka - 1;
          el.money = el.money + 1;
        }
      }
      return el;
    });
    setPlayers(newArr);
  };

  const startMoney = () => {
    const newArr = players.map((el) => {
      el.money = 50;

      return el;
    });

    setPlayers(newArr);
  };

  const win = (item) => {
    const newArr = players.map((el) => {
      if (el.id === item.id) {
        el.money = el.money + el.stavka * 2;
        el.stavka = 0;
        if (el.money > 50) {
          el.loseCoins = "";
          el.winCoins = `↑${el.money - 50}`;
        } else if (el.money <= 50) {
          el.winCoins = "";
          el.loseCoins = `↓${50 - el.money}`;
        }
      }
      return el;
    });

    setPlayers(newArr);
  };
  const lose = (item) => {
    const newArr = players.map((el) => {
      if (el.id === item.id) {
        el.stavka = 0;
        if (el.money >= 50) {
          el.loseCoins = "";
          el.winCoins = `↑${el.money - 50}`;
        } else if (el.money < 50) {
          el.winCoins = "";
          el.loseCoins = `↓${50 - el.money}`;
        }
      }
      return el;
    });

    setPlayers(newArr);
  };

  const twentyOne = (item) => {
    const newArr = players.map((el) => {
      if (el.id === item.id) {
        el.money = el.money + el.stavka * 2.5;
        el.stavka = 0;
        if (el.money >= 50) {
          el.loseCoins = "";
          el.winCoins = `↑${el.money - 50}`;
        } else if (el.money <= 50) {
          el.winCoins = "";
          el.loseCoins = `↓${50 - el.money}`;
        }
      }
      return el;
    });

    setPlayers(newArr);
  };

  const odd = (item) => {
    const newArr = players.map((el) => {
      if (el.id === item.id) {
        el.money = el.money + el.stavka;
        el.stavka = 0;
      }
      return el;
    });

    setPlayers(newArr);
  };
  return (
    <div className="App">
      <div className="btns">
        <button onClick={addOnePlayer}>+1 Игрок</button>
        <button onClick={removeOnePlayer}>-1 Игрок</button>
        <button onClick={startMoney}>Начальные деньги</button>
      </div>

      {players.map((el) => {
        return (
          <Player
            key={el.id}
            money={el.money}
            win={win}
            el={el}
            plusTen={plusTen}
            minusTen={minusTen}
            plusFive={plusFive}
            minusFive={minusFive}
            minusOne={minusOne}
            plusOne={plusOne}
            lose={lose}
            twentyOne={twentyOne}
            odd={odd}
          />
        );
      })}
    </div>
  );
}

export default App;
