import url from './UrlLocal'
import { NativeModulesProxy } from '@unimodules/core';


const sendOrder = (cartArray) => {

  // { cartArray }  = this.state ;
  //const { password }  = this.state ;

console.log('aaaaaabbbbb',cartArray);
  fetch(url.Server + url.billOrder, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },    
    body: JSON.stringify({
      cartArray: cartArray,
      
    })
    
  })
  console.log('stringtyfy',cartArray)
    .then((response) => response.json())
    .then((responseJson) => {
      var ray = responseJson
      console.log('arraysdsafdsafsdf', ray[0])

    }).catch((error) => {
      console.error(error);
    });
  }


module.exports = sendOrder;
    // If server response message same as Data Matched
      // if (responseJson === 'Data Matched') {

      //   //Then open Profile activity and send user email to profile activity.

      //   alert('Them thanh cong');

      // }
      // else {

      //   Alert.alert(responseJson);
      // }