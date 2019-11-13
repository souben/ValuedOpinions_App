import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import EmailValidate from './services/EmailValidate';
import { FIELDS } from './formFields';
 

class SurveyForm extends React.Component {
    
    state ={ showReview: this.props.showReview }

    renderFields(){
        return _.map(FIELDS, ({name, label}) => <Field key={name} type="text" name={name} label={label} component={SurveyField} />
    )}

    onSubmit= () => {
        this.props.onSubmit();
    }

    render(){
        console.log(this.props)
        return (
            <div>
                <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    {this.renderFields()}
                    <button type="submit" className="ui right floated secondary button">Next</button>
                    <Link to='/surveys' className="ui left floated submit secondary button">cancel</Link>
                </form>
                
            </div>
        )
        

    }
}
const validate = (formValues) => {

    const errors = {};

    errors.recipientsList = EmailValidate(formValues.recipientsList || '');

    _.each(FIELDS , 
        ({ name, NoValueError }) => { if(!formValues[name]){ errors[name] = NoValueError } } )
    
    return errors ;
}
export default reduxForm({
    form: 'surveyForm',
    validate: validate,
    destroyOnUnmount: false
})(SurveyForm);