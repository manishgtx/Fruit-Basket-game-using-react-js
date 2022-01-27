import basket from "./Images/Tomatobasket.png";
const TomatoCrate = (props) => {
  return (
    <img
      src={basket}
      className="tomato-crate"
      style={{ transform: `translateY(-${props.Y}px)` }}
      alt=""
    />
  );
};

export default TomatoCrate;
