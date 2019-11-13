import React from 'react';
import {onnect} from 'react-redux';
import { fetchSurveys } from '../../actions';
import { connect } from 'react-redux';

class ListOfSurveys extends React.Component {

    componentDidMount(){
        this.props.fetchSurveys();
    }
    renderSurveys(){
        return this.props.surveys.reverse().map( survey => console.log(survey))
    }

    render(){
        return (
            <div>
                ListOfSurveys
                {this.renderSurveys}
            </div>

        )
    }
}
function mapStateToProps(State) {
    return { surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(ListOfSurveys);