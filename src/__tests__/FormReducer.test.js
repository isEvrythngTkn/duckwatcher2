import * as types from '../constants/ActionTypes';
import FormReducer from '../redux/reducers/FormReducer';
import { INITIAL_VALUES } from '../constants/FormConstants';

let initialState;

beforeEach(() => {
  initialState = {
    values: INITIAL_VALUES,
    submitting: false,
    success: false,
    error: ''
  };
});

describe('form reducer', () => {
  it('should return the initial state', () => {
    expect(FormReducer(undefined, {})).toEqual(initialState)
  });

  it('should return state with submitting set to true', () => {
    const values = { a: 'a' };
    expect(FormReducer(undefined, {
      type: types.FORM_SUBMIT,
      payload: { values: values }
    })).toEqual({
      ...initialState,
      submitting: true,
      values
    })
  });

  it('should return state with an error', () => {
    const errorText = 'Failed to add entry';
    expect(FormReducer(initialState, {
      type: types.FORM_SUBMIT_FAILURE,
      payload: { error: errorText }
    })).toEqual({
      ...initialState,
      error: errorText
    })
  });

  it('should return the initial state after form reset', () => {
    const alteredState = {
      values: { what: 1 },
      success: true,
      error: 'Oh no'
    };
    expect(FormReducer(alteredState, {
      type: types.FORM_RESET
    })).toEqual(initialState)
  });  
});
