import "../assets/css/banner.css";

const Banner = ({ assigned, clicked, prizeNumber }) => {
  console.log(assigned[prizeNumber]);

  const name = () => {
    return assigned[prizeNumber];
  };

  return (
    <>
      {clicked ? (
        <>
          <div className="Container">
            <div className="winner">
              <p>{name().toUpperCase()}</p>
              {/* {assigned.map((user) => (
              <p>{user._id}</p>
            ))} */}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nowinner"></div>
        </>
      )}
    </>
  );
};

export default Banner;
