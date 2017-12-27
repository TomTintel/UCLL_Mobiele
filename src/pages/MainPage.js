import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View, Button } from 'react-native';
import { logout } from '../redux/actions/auth';
import Logo from '../components/Logo';
import Currencies from '../components/Currencies';
import Trips from '../components/Trips';
import BillList from '../components/BillList';
import BillTotals from '../components/BillTotals';

class Secured extends Component {
    userLogout(e) {
        this.props.onLogout();
        e.preventDefault();
    }
     
    render() {
        return (
            <ScrollView style={{ padding: 20 }}>
             <Logo />
                <Text style={{ fontSize: 27 }}>
                    {`Welcome ${this.props.username}`}
                </Text>
                <View style={{margin: 20}}/>
                <Currencies />
                <Trips />
               
                <BillList />
                <BillTotals />
                
                <Button onPress={(e) => this.userLogout(e)} title="Logout"/>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        username: state.auth.username,
        
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => { dispatch(logout()); },
       
        
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Secured);
