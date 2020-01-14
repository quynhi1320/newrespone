
import React from 'react';

import { StyleSheet, TextInput, View, Alert, Button, Text, Image } from 'react-native';

import url from './UrlLocal'

// Creating Login Activity.
class SignIn extends React.Component {

  // Setting up Login Activity title.
  static navigationOptions =
    {
      title: 'Login',
    };

  constructor(props) {

    super(props)

    this.state = {

      username: '',
      password: ''

    }

  }
  UserLoginFunction = () => {

    const { username } = this.state;
    const { password } = this.state;


    fetch(url.Server + url.dangnhap, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        username: username,

        password: password

      })

    }).then((response) => response.json())
      .then((responseJson) => {
        re = responseJson;
        console.log('login', re)
        // If server response message same as Data Matched
        if (re === 'Data Matched') {

          //Then open Profile activity and send user email to profile activity.
          this.props.navigation.navigate('MainScreen', { username: username });

        }
        else {

          Alert.alert('Invalid username or password ');
        }

      }).catch((error) => {
        console.error(error);
      });


  }

  render() {
    return (

      <View style={styles.MainContainer}>
        <View style={styles.mapContainer}>
          <Image
            style={{ width: 150, height: 150 }}
            source={require('./Images/login.png')}
          />
        </View>

        <View style={styles.textinput}>
          <TextInput

            // Adding hint in Text Input using Place holder.
            placeholder="Enter Username"

            onChangeText={username => this.setState({ username })}

            // Making the Under line Transparent.
            underlineColorAndroid='transparent'

            style={styles.TextInputStyleClass}
          />

          <TextInput

            // Adding hint in Text Input using Place holder.
            placeholder="Enter Password"

            onChangeText={password => this.setState({ password })}

            // Making the Under line Transparent.
            underlineColorAndroid='transparent'

            style={styles.TextInputStyleClass}

            secureTextEntry={true}
          />

          <Button title="Click Here To Login" onPress={this.UserLoginFunction} color="#2196F3" />

        </View>





      </View>

    );
  }
}
const styles = StyleSheet.create({
  mapContainer: {
    top: -130,
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 2,
    shadowColor: '#3B5458',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  textinput: {
    top: -100,
    
  },
  MainContainer: {

    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },

  TextInputStyleClass: {

    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    // Set border Hex Color Code Here.
    borderColor: '#2196F3',

    // Set border Radius.
    borderRadius: 5,

  },

  TextComponentStyle: {
    fontSize: 20,
    color: "#000",
    textAlign: 'center',
    marginBottom: 15
  }
});
export default SignIn;

// import React from 'react'
// import {View, TextInput, Text , TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
// import dangnhap from './dangnhap'
// const { height } = Dimensions.get('window')
// export default class SignIn extends React.Component{
//   static navigationOptions =
//   {
//      title: 'LoginActivity',
//   };
//   constructor(props){
//     super(props);
//     this.state = {
//       taikhoan: '',
//       matkhau : ''
//     };
//   }
//    onSignIn(){
//     const {taikhoan, matkhau} = this.state;
//     dangnhap(taikhoan,matkhau)
//     .then(res => console.log(res))
//     .catch(err => console.log(err)
//     );
//    }
//     render(){
//       const {taikhoan, matkhau} = this.state;
//         return(
//         <View>
//             <View style={styles.body}>
//             <TextInput
//               style={styles.textinput}
//               placeholder='Enter Your UserName'
//               value ={taikhoan}
//               onChangeText = {text => this.setState({taikhoan: text})}
//             />
//             <TextInput
//               style={styles.textinput}
//               placeholder='Enter Your Password'
//               secureTextEntry
//               value ={matkhau}
//               onChangeText = {text => this.setState({matkhau: text})}
//             />
//           </View>
//           <View style={styles.bottomlogin}>
//             <TouchableOpacity
//               style={styles.signin} onPress={this.onSignIn.bind(this)}
//              // onPress={this.signinbutton.bind(this)}
//             >
//               <Text style={{ fontSize: 22, fontWeight: 'bold' }}> Sign up</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.loginin}>
//               <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Log In</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         );
//     }
// }
// const styles = StyleSheet.create({
//   signin: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//     borderColor: 'white',
//     borderWidth: 2,
//     borderRadius: 20,
//     height: 40,
//     width: 120
//   },
//   loginin: {
//     marginLeft: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//     borderColor: 'white',
//     borderWidth: 2,
//     borderRadius: 20,
//     height: 40,
//     width: 120
//   },
//   bottom: {
//     marginTop: 100,
//     justifyContent: 'center',
//     flexDirection: 'row'
//   },
//   bottomlogin: {
//     marginTop: 280,
//     justifyContent: 'center',
//     flexDirection: 'row'
//   },
//   body: {
//     marginTop: 80
//   },
//   textinput: {
//     fontSize: 18,
//     marginTop: 40,
//     borderRadius: 50,
//     backgroundColor: 'white',
//     height: 50,
//     width: 380
//   },
//   parentcontainer: {
//     borderColor: 'white',
//     borderWidth: 2,
//     padding: 10,
//     backgroundColor: '#39e07a',
//     flexDirection: 'column'
//   },
//   container: {
//     borderBottomColor: 'white',
//     borderBottomWidth: 2,
//     flexDirection: 'row',
//     height: height / 12,
//     justifyContent: 'space-between',
//     backgroundColor: '#39e07a'
//   },
//   textheader: {
//     height: 100,
//     backgroundColor: '#39e07a'
//   },
//   text: {
//     fontSize: 30,
//     fontWeight: 'bold'
//   }
// });