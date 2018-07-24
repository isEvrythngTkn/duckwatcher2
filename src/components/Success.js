import React from 'react';

// @TODO: would be nice to add some button feedback here

export default class FormSubmitSuccess extends React.Component {
  render() {
    return (
      <div className="jumbotron text-center">
        <h1 className="display-9">Feeding Successfully Recorded!</h1><br/>
        <p className="lead">
          Thank you for partaking in our scientific study of duck feeding patterns.
        </p>
        <hr className="my-4" />
        <p>Want to try again?</p>
        <button className="btn btn-primary btn-lg" onClick={this.props.buttonHandler}>Submit again</button>
      </div>
    )
  }
}