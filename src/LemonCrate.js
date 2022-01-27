import basket from "./Images/Lemonbasket.png";
const LemonCrate = (props) => {
  return (
    <img
      src={basket}
      className="lemon-crate"
      style={{ transform: `translateY(-${props.Y}px)` }}
      alt=""
    />
  );
};

export default LemonCrate;
