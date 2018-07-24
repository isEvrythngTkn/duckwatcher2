import * as actions from '../redux/actions/FormActions';
import * as types from '../constants/ActionTypes';

describe("form action creators", () => {
  it("should create an action for form submit request", () => {
    const expectedAction = {
      type: types.FORM_SUBMIT,
      payload: {}
    }
    expect(actions.formSubmitRequest()).toEqual(expectedAction)
  });

  it("should create an action for form submit success", () => {
    const expectedAction = {
      type: types.FORM_SUBMIT_SUCCESS,
      payload: {}
    }
    expect(actions.formSubmitSuccess()).toEqual(expectedAction)
  });

  it("should create an action for form submit failure", () => {
    const errorMessage = 'Failed to add entry';
    const expectedAction = {
      type: types.FORM_SUBMIT_FAILURE,
      payload: { error: errorMessage }
    }
    expect(actions.formSubmitFailure(errorMessage)).toEqual(expectedAction)
  });
});