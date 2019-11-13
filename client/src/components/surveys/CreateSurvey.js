import React from 'react';
import SurveyForm from './SurveyForm';
import { reduxForm } from 'redux-form'
import SurveyFormReview from './SurveyFormReview';

class CreateSurvey extends React.Component {
    state = { showReview: false}

    onCancel=() =>{
        this.setState({ showReview: false })
    }

    onSubmit=() =>{
        this.setState({ showReview: true })
    }

    renderList(){

        if( this.state.showReview ){ 
            return <SurveyFormReview onCancel={this.onCancel}/> 
        }

        return <SurveyForm onSubmit={this.onSubmit}/>  
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}

export default reduxForm({
    form: 'surveyForm'
})(CreateSurvey);