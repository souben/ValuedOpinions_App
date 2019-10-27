import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Dashboard extends React.Component{
    
    componentDidMount(){
        this.props.fetchUser();
        
    }

    renderContent(){
        switch (this.props.user){
            case false:
                return  ( <div className="ui container"> Sorry you've to log in </div> )
            default :
                return  ( <div className="ui container"> Welcome to the Dashboard page </div> )
    }}

    render() {
        return this.renderContent();
    }
}      


const mapStateToProps = ({ auth }) => {
    return { user: auth.current_user };
}

export default connect(mapStateToProps, actions)(Dashboard);