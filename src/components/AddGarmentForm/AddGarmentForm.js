import "./AddGarmentForm.css";

function AddGarmentForm() {
  return (
    <>
      <div className="addGarmentForm">
        <label className="addGarmentForm__input">
          Name
          <input
            className="addGarmentForm__input-field"
            type="text"
            name="name"
            placeholder="Name"
          ></input>
        </label>
        <label className="addGarmentForm__input">
          Image
          <input
            className="addGarmentForm__input-field"
            type="url"
            name="Image"
            placeholder="Image URL"
          ></input>
        </label>
        <p className="addGarmentForm__buttonContainer-title">
          Select the weather type
        </p>
        <div className="addGarmentForm__buttonContainer">
          <div>
            <input type="radio" id="hot" value="hot" />
            <label>Hot</label>
          </div>
          <div>
            <input type="radio" id="warm" value="warm" />
            <label>Warm</label>
          </div>
          <div>
            <input type="radio" id="cold" value="cold" />
            <label>Cold</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddGarmentForm;
