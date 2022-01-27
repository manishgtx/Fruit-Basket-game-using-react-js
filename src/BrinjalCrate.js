import basket from './Images/Brinjalbasket.svg';
const BrinjalCrate = (props) => {
    return (
      <img
        src={basket}
        className="brinjal-crate"
        style={{ transform: `translateY(-${props.Y}px)`}}
        alt=""
      />
    );
};

export default BrinjalCrate;