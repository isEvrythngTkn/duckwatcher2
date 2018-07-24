import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import CustomField from './CustomField';
import TimePicker from './TimePicker.js'
import { INITIAL_VALUES } from '../constants/FormConstants';
import { formSubmit, formReset } from '../redux/actions/FormActions';
import Success from './Success';
import Failure from './Failure';

class FeedingForm extends React.Component {
  constructor(props) {
    super(props);
    // might want to make the food types constants
    this.state = { 
      foodTypes: ['baking', 'meat', 'vegetable', 'fruit', 'legume']
    }
  }

  renderForm() {
    return (
      <Formik
        initialValues={ INITIAL_VALUES }
        onSubmit={(values, actions) => {
          this.props.formSubmit(values);
        }}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={validationSchema}
        render={({ errors, handleChange, touched, isSubmitting }) => (
          <Form >
            <CustomField component={TimePicker} name="time" label="Time of feeding" error={errors.time} />
            <CustomField type="text" name="food" label="Food" placeholder="e.g. salmon" error={errors.food} />
            <CustomField type="text" name="location" label="Location" placeholder="e.g. Beacon Hill Park" error={errors.location} />
            <CustomField type="number" name="duckQuantity" label="Number of ducks" error={errors.duckQuantity} />
            <CustomField type="select" name="foodType" label="Food type" selectOptions={this.state.foodTypes} error={errors.foodType} />
            <CustomField type="number" name="foodInGrams" label="Quantity of food in grams" error={errors.foodInGrams} />
            <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      />
    );
  }

  render() {
    let content;
    if (this.props.success) {
      content = <Success buttonHandler={() => { this.props.formReset() }}/>
    } else if (this.props.error) {
      content = <Failure buttonHandler={() => { this.props.formReset() }} error={this.props.error} />
    } else {
      content = this.renderForm();
    }
    return content;
  }
}

var validationSchema = yup.object().shape({
  time: yup.date().required(),
  food: yup.string().required(),
  location: yup.string().required(),
  duckQuantity: yup
    .number()
    .required()
    .positive()
    .integer()
    .moreThan(0),
  foodType: yup.string().required(),
  foodInGrams: yup
    .number()
    .required()
    .positive()
    .integer()
    .moreThan(0)
});

const mapStateToProps = state => {
  return state.form;
};

export default connect(mapStateToProps, {formSubmit, formReset})(FeedingForm);