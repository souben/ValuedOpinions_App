import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ListOfSurveys from './surveys/ListOfSurveys';


class Dashboard extends React.Component{
    
    componentDidMount(){
        this.props.fetchUser();
        
    }

    renderContent(){
        switch (this.props.user){
            case false:
                return  ( <div className="ui container"> Sorry you've to log in </div> )
            default :
                return  (<div className="ui container" style={{ margin: '50px 20px'}}> 
                            <div style={{ margin: '50px 0px'}}>  
                                <ListOfSurveys /> 
                            </div> 
                            <Link to="/surveys/new" className="circle">
                               <div style={{ }}>+</div>
                            </Link>
                         </div>
                )
    }}

    render() {
        return this.renderContent();
    }
}      


const mapStateToProps = ({ auth }) => {
    return { user: auth.current_user };
}

export default connect(mapStateToProps, actions)(Dashboard);