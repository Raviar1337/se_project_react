import "./ToggleSwitch.css";

// todo make it more fanncy with the F and C bacground

function ToggleSwitch() {
  return (
    <>
      <label className="toggleSwitch">
        F C
        <input type="checkbox" />
        <span className="toggleSwitch__slider" />
      </label>
    </>
  );
}

export default ToggleSwitch;
