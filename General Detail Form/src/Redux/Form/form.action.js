import axios from "axios";
import {
  Form_DATA_REQ,
  FORM_DATA_SUCCESS,
  FORM_DATA_FAILED,
  GET_DATA_REQ,
  GET_DATA_FAILED,
  GET_DATA_SUCCESS,
} from "./form.type";

export const post_form_req = () => {
  return { type: Form_DATA_REQ };
};

export const post_form_success = (payload) => {
  return { type: FORM_DATA_SUCCESS, payload };
};

export const post_form_failed = () => {
  return { type: FORM_DATA_FAILED };
};


export const get_form_req = () => {
  return { type: GET_DATA_REQ };
};

export const get_form_success = (payload) => {
  return { type: GET_DATA_SUCCESS, payload };
};

export const get_form_failed = () => {
  return { type: GET_DATA_FAILED};
};


// To store the form data

export const POST_FORM_DATA = (data) => async (dispatch) => {
  dispatch(post_form_req());
  try {
    let res = await axios.post(
      "https://mock-server-atd1.onrender.com/forms",
      data
    );
    dispatch(post_form_success(res.data));
  } catch (err) {
    dispatch(post_form_failed());
  }
};

// To Collect the form data 

export const GET_FORM_DATA = () => async (dispatch) => {
  dispatch(get_form_req());
  try {
    let res = await axios.get(
      "https://mock-server-atd1.onrender.com/forms"
    );
    dispatch(get_form_success(res.data));
  } catch (err) {
    dispatch(get_form_failed());
  }
};
