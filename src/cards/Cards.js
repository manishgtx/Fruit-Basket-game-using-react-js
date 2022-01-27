import tomato from './images/tomato.jpg';
import brinjal from './images/brinjal.jpg';
import carrot from './images/carrot.jpg';
import greenpea from './images/greenpea.jpg';
import lemon from './images/lemon.jpg';
import empty from './images/empty.jpg';
import './cards.css';
const Cards = (props) => {
    return (
      <>
        <div className="position">
          <div className="cards">
            <img
              src={tomato}
              alt=""
              className="card"
            />
            <img src={brinjal} alt="" className="card" />
            <img src={carrot} alt="" className="card" />
            <img src={greenpea} alt="" className="card" />
            <img src={lemon} alt="" className="card" />
            <img src={empty} onClick={props.cardShow} alt="" className="card" />
            <p className="view">click here to view</p>
          </div>
        </div>
      </>
    );
};
export default Cards;
