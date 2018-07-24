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
  return (dispatch) => {
    dispatch(formSubmitRequest(formValues));

    // should add some authorization token here
    console.log('about to post to', `${process.env.REACT_APP_API_URL}/feeding`);
    axios.post(`${process.env.REACT_APP_API_URL}/feeding`, formValues)
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
