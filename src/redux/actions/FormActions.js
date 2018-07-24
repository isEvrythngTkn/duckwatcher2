import axios from 'axios';
import { 
  FORM_SUBMIT,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAILURE,
  FORM_RESET
} from '../../constants/ActionTypes';

export function formSubmitRequest(values) {
  return {
    type: FORM_SUBMIT,
    payload: { values }
  }
}

export function formSubmitSuccess(response) {
  return {
    type: FORM_SUBMIT_SUCCESS,
    payload: {}
  }
}

export function formSubmitFailure(error) {
  return {
    type: FORM_SUBMIT_FAILURE,
    payload: {error}
  }
}

export function formReset() {
  return {
    type: FORM_RESET,
    payload: {}
  }
}

export const formSubmit = (formValues) => {
  console.log('here we are', process.env.API_URL);
  return (dispatch) => {
    dispatch(formSubmitRequest(formValues));
    // console.log('about to post', formValues);
    // should add some authorization token here
    axios.post(`${process.env.API_URL}/feeding`, formValues)
      .then((response) => {
        const data = response.data;
        if (data.error) {
          dispatch(formSubmitFailure(data.error));
        } else {
          dispatch(formSubmitSuccess(data));  
        }
      })
      .catch((error) => {
        // need to convert this error into a string
        dispatch(formSubmitFailure(error))
      });
  };
};
