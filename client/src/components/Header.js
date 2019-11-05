import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import Payments from '../components/Payments';

class Header extends React.Component{
 
    componentDidMount(){ this.props.fetchUser();}
    
    
    renderHeaderButtons = () => {
        console.log(this.props.user);
        switch (this.props.user){

            case false: 
                return (   
                    <div className="right menu">
                        <div className="item">
                            <a  href='/auth/google' className="ui blue button " > Login with Google </a>
                        </div>
                    </div>
                )
            case undefined:
                return  (   
                    <div className="right menu">
                        <div className="item">
                            <a  href='/auth/google' className="ui blue button " > Loading... </a>
                        </div>
                    </div>
                )
            default:
                if(window.location.pathname === '/' ){
                    return  (   <div className="right menu">
                                    <div className="item">
                                       <a  href='/api/logout' className="ui blue button " > logout </a>
                                    </div>
                                </div>  
                            )
                }

                return  (   <div className="right menu">
                                <div className="item"><Payments /></div>
                                <div className="item "><div className="ui secondary button">Credits: {this.props.user.numberOfCredits}</div></div>
                                <div className="item">
                                    <a  href='/api/logout' className="ui secondary button " > logout </a>
                                </div>
                            </div>   
                )
        }
    }


    render() {

        return (
            <div >
                <div className="ui menu" style={{backgroundColor: 'teal'}}>
                    <div className="item">
                        <a href="/"><h2 style={{color: 'white'}}>Survey App</h2></a>
                    </div>
                    { this.renderHeaderButtons() }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => {  
    return { user: auth }
}
export default connect( mapStateToProps, { fetchUser })(Header);
