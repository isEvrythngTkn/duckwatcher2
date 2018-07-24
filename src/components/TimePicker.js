import 'rc-time-picker/assets/index.css';
import React from 'react';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

const format = 'h:mm a';
const now = moment().hour(0).minute(0);

export default class TimePickerInput extends React.Component {
  handleChange = (value: string) => {
    this.props.form.setFieldValue(this.props.field.name, value);
  };

  render() {
    const { name } = this.props.field;
    return (
      <TimePicker
        showSecond={false}
        defaultValue={now}
        format={format}
        className="form-control"
        name={name}
        onChange={this.handleChange}
        use12Hours
      />
    );
  }
} 