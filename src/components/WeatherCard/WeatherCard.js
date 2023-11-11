import "./WeatherCard.css";

// todo weather card is currentlky hardcoded as weather card background, Needs to update according API
// Other code <image className="weatherCard__image"></image>
function WeatherCard() {
  const temp = "75";

  return (
    <>
      <div className="weatherCard">
        <div className="weatherCard__temperature">{temp}</div>
      </div>
    </>
  );
}

export default WeatherCard;
