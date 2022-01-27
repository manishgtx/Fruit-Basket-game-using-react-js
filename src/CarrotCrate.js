import Carrotbasket from './Images/Carrotbasket.png';
const CarrotCrate = (props) => {
    return (
        <img
        src={Carrotbasket}
        className="carrot-crate"
        style={{ transform: `translateY(-${props.Y}px)`}}
        alt=""
      />
    );
};

export default CarrotCrate;