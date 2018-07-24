import React from 'react';

// @TODO: would be nice to add some button feedback here
// @TODO: also would be great to refill the form with the previous values
//        which are stored in state at this point.

export default class FormSubmitFailure extends React.Component {
  render() {
    return (
      <div className="jumbotron text-center">
        <h1 className="display-9 text-danger">Failed to Record Feeding</h1><br/>
        <p className="lead">
          Error: {this.props.error}
        </p>
        <hr className="my-4" />
        <p>Try again?</p>
        <button className="btn btn-primary btn-lg" onClick={this.props.buttonHandler}>Submit another feeding</button>
      </div>
    )
  }
}