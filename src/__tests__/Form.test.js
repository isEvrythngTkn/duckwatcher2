import React from "react";
import { shallow, mount, render } from 'enzyme';
import { Provider } from 'react-redux';
import FeedingForm from "../components/FeedingForm";
import store from '../redux/store';

describe("<FeedingForm />", () => {
  it("renders the correct number of form groups", () => {
    expect(mount(<Provider store={store}><FeedingForm /></Provider>).find('.form-group').length).toBe(6);
  });

  it("calls the right function on submit", () => {
    // todo
  });

  it("has the correct form values on submit", () => {
    // todo
  });
});