import basket from "./Images/Peasbasket.png";
const PeaCrate = (props) => {
  return (
    <img
      src={basket}
      className="pea-crate"
      style={{ transform: `translateY(-${props.Y}px)` }}
      alt=""
    />
  );
};

export default PeaCrate;
