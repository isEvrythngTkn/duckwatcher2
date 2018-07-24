import { 
  FORM_SUBMIT,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAILURE,
  FORM_RESET
} from '../../constants/ActionTypes';
import { INITIAL_VALUES } from '../../constants/FormConstants';

export const INITIAL_STATE = { 
  values: INITIAL_VALUES,
  submitting: false,
  success: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORM_SUBMIT:
      return { ...state, values: action.payload.values, submitting: true };
    case FORM_SUBMIT_SUCCESS:
      return { ...INITIAL_STATE, submitting: false, success: true };
    case FORM_SUBMIT_FAILURE:
      return { ...state, success: false, submitting: false, error: action.payload.error };
    case FORM_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};
