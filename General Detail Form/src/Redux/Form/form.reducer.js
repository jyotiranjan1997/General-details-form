import {
  Form_DATA_REQ,
  FORM_DATA_SUCCESS,
  FORM_DATA_FAILED,
  GET_DATA_REQ,
  GET_DATA_FAILED,
  GET_DATA_SUCCESS,
} from "./form.type";

const InitialState = {
 loading: false,
  error: false,
  data: false,
};

export const FormReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case Form_DATA_REQ: {
      return { ...state, loading: true };
    }
    case FORM_DATA_SUCCESS: {
      return { ...state, loading: false, data: true };
    }
    case FORM_DATA_FAILED: {
      return { ...state, loading: false, error: true };
    }
    default: {
      return state;
    }
  }
};

const InitialState2 = {
  is_loading: false,
  is_error: false,
  form_data: [],
};

export const GET_FormReducer = (state = InitialState2, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQ: {
      return { ...state, is_loading: true };
    }
    case GET_DATA_SUCCESS: {
      return { ...state, is_loading: false, form_data: payload };
    }
    case GET_DATA_FAILED: {
      return { ...state, is_loading: false, is_error: true };
    }
    default: {
      return state;
    }
  }
};
