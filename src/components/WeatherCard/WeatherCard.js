import "./WeatherCard.css";

// todo weather card is currentlky hardcoded as weather card background, Needs to update according API
// Other code <image className="weatherCard__image"></image>
function WeatherCard() {
  const temp = "75 F";

  //todo this is hardcoded and will need to be updated
  const weatherCardImage = "";

  return (
    <>
      <div
        className="weatherCard"
        // style={{
        //   maxWidth: 1360,
        //   height: 80,
        //   display: "flex",
        //   backgroundImage: `url(${weatherCardImage})`,
        // }}
      >
        <div className="weatherCard__temperature">{temp}</div>
      </div>
    </>
  );
}

export default WeatherCard;
