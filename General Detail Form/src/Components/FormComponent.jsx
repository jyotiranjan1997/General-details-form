import { useState } from "react";
import Styles from "./Form.module.css";
import { PickerOverlay } from "filestack-react";
import { useDispatch, useSelector } from "react-redux";
import { POST_FORM_DATA } from "../Redux/Form/form.action";
const initialState = {
  name: "",
  email: "",
  phone: "",
  hobbies: [],
  gender: "",
  file: "",
};

export default function FormComponent() {
  const [data, setData] = useState(initialState);
  const [isPickup, setPickup] = useState(false);
  const { loading, error } = useSelector((store) => store.FormReducer);
  const dispatch = useDispatch();

  //  handle all input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  //  handle the submit to form
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(POST_FORM_DATA(data));
    console.log(data);
    if (error) {
      alert("form submitted failed");
    } else {
        alert("Form submitted Successfully");
        setData(initialState);
    }
  };

  // It will handle the uplaoding image file
  const handlePickup = (e) => {
    e.preventDefault();
    setPickup(!isPickup);
  };

  // handle button to disable if input box empty

  const Get_isEmpty = () => {
    if (
      data.name === "" ||
      data.name === null ||
      data.email === "" ||
      data.email === null ||
      data.phone === "" ||
      data.phone === null ||
      data.file === "" ||
      data.file === null ||
      data.hobbies.length === 0
    ) {
      return true;
    } else if (loading) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className={Styles.main_container}>
      <div>
        <h2>General Detail Form</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={data.name}
          placeholder="Enter your Full Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={data.email}
          placeholder="Enter your Email address"
          onChange={handleChange}
        />
        <input
          type="phone"
          name="phone"
          value={data.phone}
          placeholder="Enter your Phone Number"
          onChange={handleChange}
        />
        <fieldset className={Styles.Radio}>
          <legend>Please select Gender</legend>
          <input
            type="radio"
            name="male"
            value="male"
                      onChange={(e) => {
              if (e.target.checked) {
                setData({ ...data, gender: "male" });
              }
            }}
          />
          <label>Male</label>
          <br />
          <input
            type="radio"
            name="female"
            value="female"
            onChange={(e) => {
              if (e.target.checked) {
                setData({ ...data, gender: "female" });
              }
            }}
          />
          <label>Female</label>
        </fieldset>
        <fieldset className={Styles.Radio}>
          <legend>Please select one of the Hobbies</legend>
          <input
            type="radio"
            name="cricket"
            value="cricket"
            onChange={(e) => {
              if (e.target.checked) {
                setData({ ...data, hobbies: [...data.hobbies, "cricket"] });
              }
            }}
          />
          <label>play cricket</label>
          <br />
          <input
            type="radio"
            name="movies"
            value="movies"
            onChange={(e) => {
              if (e.target.checked) {
                setData({ ...data, hobbies: [...data.hobbies, "movies"] });
              }
            }}
          />
          <label>watch movies</label>
          <br />
          <input
            type="radio"
            name="cooking"
            value="cooking"
            onChange={(e) => {
              if (e.target.checked) {
                setData({ ...data, hobbies: [...data.hobbies, "cooking"] });
              }
            }}
          />
          <label>cooking</label>
          <br />
        </fieldset>
        <div
          className={Styles.Document}
          onClick={handlePickup}
          onChange={(e) => console.log(e.target.checked)}
        >
          <span>Select Document</span>
        </div>
        {isPickup && (
          <PickerOverlay
            apikey={"AXwxB2tFnRvSuBN35HzvXz"}
            onUploadDone={(res) => {
              setData({ ...data, file: res.filesUploaded[0].url });
              setPickup(false);
            }}
          />
        )}
        <button
          type="submit"
          className={Get_isEmpty() ? Styles.BtnDisable : ""}
          disabled={Get_isEmpty()}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
