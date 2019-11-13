import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
 import _ from 'lodash';
import { FIELDS } from './formFields';
import * as actions from '../../actions/index';
// import Form from 'redux-form';

 
const SurveyFormReview = ({ onCancel, values, sendSurvey, history }) =>  { 
    const onClickBack = () => {
        onCancel();
    }
    const onClickSend =() => {
        console.log('blabla');
        sendSurvey(values, history);
    }

    console.log(values);
    const reviewFormFields = _.map( FIELDS ,({ name, label}) => {return <div key={name}>
                                                                            <h3> { label } </h3>
                                                                            <p> { values[name] } </p>
                                                                        </div>
                                                                }
                                   ) 

    return (
        <div className="ui container">
            {reviewFormFields}
            <button onClick={() => onClickSend()} className="ui right floated red button">Send survey</button>
            <button onClick={onClickBack} className="ui left floated green button">Back</button>
        </div>)
       

    
}
const mapStateToProps = (state) => {
    return { values : state.form.surveyForm.values };
}
export default connect(mapStateToProps, actions )(withRouter(SurveyFormReview));