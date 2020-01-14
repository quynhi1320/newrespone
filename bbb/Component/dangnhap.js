import url from './UrlLocal'
import {Alert} from 'react-native'
const dangnhap = (taikhoan, matkhau) =>(
    fetch(url.Server + url.dangnhap, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
           
              email: UserEmail,
           
              password: UserPassword
           
            })
           
          }).then((response) => response.json())
                .then((responseJson) => {
           
                  // If server response message same as Data Matched
                 if(responseJson === 'Data Matched')
                  {
           
                      //Then open Profile activity and send user email to profile activity.
                      this.props.navigation.navigate('Second', { Email: UserEmail });
           
                  }
                  else{
           
                    Alert.alert(responseJson);
                  }
           
                }).catch((error) => {
                  console.error(error);
                }
);

);

module.exports = dangnhap;
