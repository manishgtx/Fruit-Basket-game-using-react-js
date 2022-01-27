import React, {useState} from 'react';
import './App.css';
import market from './Images/market.svg';
import tray from './Images/tray.png';
import Menu from './menu/Menu';
import Cards from './cards/Cards';
import BrinjalCrate from './BrinjalCrate';
import CarrotCrate from './CarrotCrate';
import PeaCrate from './Pea';
import TomatoCrate from './TomatoCrate';
import LemonCrate from './LemonCrate';
import leftarrow from './Images/left.svg';
import rightarrow from './Images/right.svg';
import bigcard from './Images/big-card.png';
import cross from './Images/cross.svg';
function App() {
    const [brinjal, setBrinjal] = useState([]);
    const [carrot, setCarrot] = useState([]);
    const [pea, setPea] = useState([]);
    const [tomato, setTomato] = useState([]);
    const [lemon, setLemon] = useState([]);
    const [show,setShow] = useState('');
    // card show hidden function
    const cardShow = () => {
      setShow('card-table-show');
    }
    // Brinjal
    const brinjalY = [];
    const addBrinjalCrate = (value) => {
      for (let i = 0; i < value; i++) {
        const brinjal = { id: i, position: i * 55 };
        brinjalY.push(brinjal);
      }

      setBrinjal(brinjalY);
    };
    // Carrot
    const carrotY = [];
    const addCarrotCrate = (value) => {
      for (let i = 0; i < value; i++) {
        const carrot = { id: i, position: i * 55 };
        carrotY.push(carrot);
      }

      setCarrot(carrotY);
    };

    // Pea
    const peaY = [];
    const addPeaCrate = (value) => {
      for (let i = 0; i < value; i++) {
        const pea = { id: i, position: i * 55 };
        peaY.push(pea);
      }

      setPea(peaY);
    };

    // Tomato
    const tomatoY = [];
    const addTomatoCrate = (value) => {
      for (let i = 0; i < value; i++) {
        const tomato = { id: i, position: i * 55 };
        tomatoY.push(tomato);
      }

      setTomato(tomatoY);
    };

    // Lemon 
    const lemonY = [];
    const addLemonCrate = (value) => {
      for (let i = 0; i < value; i++) {
        const lemon = { id: i, position: i * 55 };
        lemonY.push(lemon);
      }

      setLemon(lemonY);
    };
  return (
    <main className="home">
      <div className="cabin">
        <h1 className="godown">YOUR GODOWN</h1>
        <img src={tray} alt="" className="tray" />
        <img src={market} className="market" alt="" />
        <h1 className="timer">
          120:00 <span>MINS</span>
        </h1>
        <Menu />
        <Cards cardShow={cardShow}/>

        {/* Brinjal */}
        {brinjal.map((item) => {
          return <BrinjalCrate key={item.id} Y={item.position} />;
        })}

        {/* Carrot */}
        {carrot.map((item) => {
          return <CarrotCrate key={item.id} Y={item.position} />;
        })}

        {/* Pea */}
        {pea.map((item) => {
          return <PeaCrate key={item.id} Y={item.position} />;
        })}

        {/* Tomato */}
        {tomato.map((item) => {
          return <TomatoCrate key={item.id} Y={item.position} />;
        })}

        {/* Lemon */}
        {/* Tomato */}
        {lemon.map((item) => {
          return <LemonCrate key={item.id} Y={item.position} />;
        })}
        <div className="crates-inputs">
          <input
            name="tomato"
            className="crate-input"
            onChange={(e) => addTomatoCrate(e.target.value)}
          />
          <input
            name="Brinjal"
            className="crate-input"
            onChange={(e) => addBrinjalCrate(e.target.value)}
          />
          <input
            name="carrot"
            className="crate-input"
            onChange={(e) => addCarrotCrate(e.target.value)}
          />
          <input
            name="pea"
            className="crate-input"
            onChange={(e) => addPeaCrate(e.target.value)}
          />
          <input
            name="lemon"
            className="crate-input"
            onChange={(e) => addLemonCrate(e.target.value)}
          />
          <input name="empty" className="crate-input" value={2} />
        </div>
        <div className={`card-table ${show}`}>
          <h1 className="godown rule-card">RULE CARDS</h1>
          <div className="cards-container">
            <div className="left">
              <img src={leftarrow} className="left-arrow" alt="" />
            </div>
            <div className="big-cards">
              <div className="big-card-1">
                <img src={bigcard} alt="big-card-1" />
                <h1 className="rule-heading-1">RULE 1</h1>
                <p className="rule-text-1">
                  take them and haggle to make a valueable set
                </p>
              </div>
              <div className="big-card-2">
                <img src={bigcard} alt="big-card-2" />
                <h1 className="rule-heading-2">RULE 3</h1>
                <p className="rule-text-2">
                  take them and haggle to make a valueable set
                </p>
              </div>
            </div>
            <div className="right">
              <img src={rightarrow} className="right-arrow" alt="" />
            </div>
            <h2 className='user-cards'>you have: 1,3</h2>
            <div className="close">
              <h2>Close</h2>
              <img src={cross} onClick={() => setShow('')} alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
