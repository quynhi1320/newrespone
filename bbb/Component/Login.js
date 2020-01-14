import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image, TextInput } from 'react-native';
//import icLogo from '../../../../hinhanh.png';
import icMenu from '././Images/icMenu.png';
const {width, height } = Dimensions.get('window');

class Login extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        this.state = { isLogedIn: true }
    }
    gotoAuthenication() {
        this.props.navigation.pop();
    }
    signinbutton() {
        this.setState({ isLogedIn: false })
    }

    render() {
        const { wrapper,row1, textinput, bottomlogin, signin, body, titleStyle, loginin } = styles;
        return (
            <View style = {wrapper} >

               
                <View >
                    
                    <Image
                        style={{ top: 80,marginLeft: 120, height: 100, width: 100 }}
                        source={require('././Images/lg.png')}
                    />

                </View>

                <View style={body}>
                    <TextInput
                        style={textinput}
                        placeholder='  Enter Your UserName'
                    />
                   
                    <TextInput
                        style={textinput}
                        placeholder='  Enter Your Password'
                        secureTextEntry
                    />

                </View>
                <View style={bottomlogin}>
                    {/* <TouchableOpacity
                        style={signin}
                        onPress={this.signinbutton.bind(this)}
                    >
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}> Sign up</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={loginin} >
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Log In</Text>
                    </TouchableOpacity>
                </View>


            </View>

        );




    }
}
const styles = StyleSheet.create({
    wrapper: {flex : 1,
        borderWidth: 5,
        borderColor: 'red', justifyContent:'center'
    },
    //top : {...StyleSheet.absoluteFillObject, top: 15 ,backgroundColor: 'transparent'},
   // row1: {  flexDirection: 'row', top: 50,marginLeft: 10, height: 50, width: 50},
    titleStyle: { color: '#FFF', left: 85, top: 10, fontSize: 40 },
    body: {
        marginTop: 80
    },
    textinput: {
        fontSize: 18,
        marginTop: 40,
        borderWidth:1,
        backgroundColor: 'white',
        height: 50,
        width: 250,
        marginLeft : 50
    },
    signin: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20,
        height: 40,
        width: 120
    },
    loginin: {
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 100,
        height: 40,
        width: 120
    },
    bottomlogin: {
        marginTop: 60,
        justifyContent: 'center',
        flexDirection: 'row'
    },
});
export default Login;