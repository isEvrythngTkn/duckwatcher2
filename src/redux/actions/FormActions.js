import axios from 'axios';
import { 
  FORM_SUBMIT,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAILURE,
  FORM_RESET
} from '../../constants/ActionTypes';

// should probably put this in some other file, but later
const API_URL = process.env.NODE_ENV === 'production' ?
  'https://duck-watcher-api.herokuapp.com' : 'http://localhost:3001';

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
  return (dispatch) => {
    dispatch(formSubmitRequest(formValues));

    // should add some authorization token here
    console.log('about to post to', `${API_URL}/feeding`);
    axios.post(`${API_URL}/feeding`, formValues)
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
        console.log('dis a bad error', error);
        dispatch(formSubmitFailure(error))
      });
  };
};
