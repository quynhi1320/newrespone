import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput
} from 'react-native'
import { StackNavigator } from 'react-navigation'
const { height } = Dimensions.get('window')
 class Authentication extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor (props) {
    super(props)
    this.state = { isLogedIn: true }
  }
  gotoAuthenication () {
    this.props.navigation.pop();
  }
  signinbutton () {
    this.setState({ isLogedIn: false })
  }
  loginbutton () {
    this.setState({ isLogedIn: true })
  }
  render () {
    // variable of signin content
    // ----------------------------------------------------//
    const signin = (
      <View style={styles.parentcontainer}>
        <View style={styles.container}>
          <TouchableOpacity  onPress={this.gotoAuthenication.bind(this)}>
            <Image
              style={{ marginLeft: 10, height: 50, width: 50 }}
              source={require('././Images/back.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 20,
              fontWeight: 'bold',
              fontSize: 32,
              fontStyle: 'italic',
              textDecorationLine: 'underline',
              color: 'white'
            }}
          >
            Wearing a Dress
          </Text>
          <Image
            style={{ marginLeft: 20, height: 50, width: 50 }}
            source={require('././Images/vest.png')}
          />
        </View>
        <View style={styles.body}>
          <TextInput
            style={styles.textinput}
            placeholder='Enter Your UserName'
          />
          <TextInput style={styles.textinput} placeholder='Enter Your Email' />
          <TextInput
            style={styles.textinput}
            placeholder='Enter Your Password'
            secureTextEntry
          />
          <TextInput
            style={styles.textinput}
            placeholder='Confirm Password'
            secureTextEntry
          />
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.signin}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}> Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.loginbutton.bind(this)}
            style={styles.loginin}
          >
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
    // ------------------------------------------------------------------//
    // variable of login content
    // ------------------------------------------------------------------//
    const login = (
      <View style={styles.parentcontainer}>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.gotoAuthenication.bind(this)}>
            <Image
              style={{ marginLeft: 10, height: 50, width: 50 }}
              source={require('././Images/back.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 20,
              fontWeight: 'bold',
              fontSize: 32,
              fontStyle: 'italic',
              textDecorationLine: 'underline',
              color: 'white'
            }}
          >
            Wearing a Dress
          </Text>
          <Image
            style={{ marginLeft: 20, height: 50, width: 50 }}
            source={require('././Images/vest.png')}
          />
        </View>
        <View style={styles.body}>
          <TextInput
            style={styles.textinput}
            placeholder='Enter Your UserName'
          />
          <TextInput
            style={styles.textinput}
            placeholder='Enter Your Password'
            secureTextEntry
          />
        </View>
        <View style={styles.bottomlogin}>
          <TouchableOpacity
            style={styles.signin}
            onPress={this.signinbutton.bind(this)}
          >
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}> Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginin}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
    // ------------------------------------------------------------------//
    // variable for changing content each other
    const mainJSX = this.state.isLogedIn ? login : signin
    return( <View>{mainJSX}</View>)
  }
}

const styles = StyleSheet.create({
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
    borderRadius: 20,
    height: 40,
    width: 120
  },
  bottom: {
    marginTop: 100,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  bottomlogin: {
    marginTop: 280,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  body: {
    marginTop: 80
  },
  textinput: {
    fontSize: 18,
    marginTop: 40,
    borderRadius: 50,
    backgroundColor: 'white',
    height: 50,
    width: 380
  },
  parentcontainer: {
    borderColor: 'white',
    borderWidth: 2,
    padding: 10,
    backgroundColor: '#39e07a',
    flexDirection: 'column'
  },
  container: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    flexDirection: 'row',
    height: height / 12,
    justifyContent: 'space-between',
    backgroundColor: '#39e07a'
  },
  textheader: {
    height: 100,
    backgroundColor: '#39e07a'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});
export default  Authentication ;
