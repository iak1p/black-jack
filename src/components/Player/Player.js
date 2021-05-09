import React from "react";
import "./Player.css";

export default function Player(props) {
  const {
    money,
    win,
    el,
    plusTen,
    minusTen,
    minusFive,
    plusFive,
    minusOne,
    plusOne,
    lose,
    twentyOne,
    odd
  } = props;
  return (
    <>
      <div className="player">
        <div className="header">
          <p className="winCoins">{el.winCoins}</p>
          <p>Баланс:{money}$</p>
          <p className="loseCoins">{el.loseCoins}</p>
        </div>
        <p className="stavka">Ставка:{el.stavka}$</p>
        <div className="stavki">
          <button onClick={() => plusTen(el)}>+10</button>
          <button onClick={() => minusTen(el)}>-10</button>
          <button onClick={() => plusFive(el)}>+5</button>
          <button onClick={() => minusFive(el)}>-5</button>
          <button onClick={() => plusOne(el)}>+1</button>
          <button onClick={() => minusOne(el)}>-1</button>
        </div>
        <div className="win">
          <button onClick={() => win(el)}>Выигрыш</button>
          <button onClick={() => odd(el)}>Ничья</button>
          <button onClick={() => lose(el)}>Проигрыш</button>
          <button onClick={() => twentyOne(el)}>21</button>
        </div>
      </div>
    </>
  );
}
