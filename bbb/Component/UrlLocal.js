const url = {
    Server:'http://192.168.43.196/Test',
    homeU:'/xam.php' ,
    orderU: '/menu.php',
    dangnhap:'/dangnhap.php',
    billOrder:'/billorder.php',
    orderhiss: '/orderhis.php',
    info : '/info.php'
};
 // componentDidMount() {
  //   fetch('http://10.1.12.206:80/Test/xam.php')
  //     .then((response) => response.json())//response tham so tra ve
  //     .then((responseJson) => { //doc phan tu trong json
  //       //return responseJson.row;
  //       const { product } = responseJson
  //       console.log(responseJson);
  //      // console.log(products);
  //       this.setState({
  //         products: product
  //       });

  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }
  

export default url;
/* 
import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableHighlight, Alert } from 'react-native';
import url from './UrlLocal.js'
import Header from './Header'
import ViewTable from './ViewTable.js'
import TestOrder from './StateOrder'
export default class Order extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      mang: []
    }
  }
  gotoViewTable() {
    const { navigator } = this.props
    navigator.push('VIEWTABLE')
  }

  render() {
    //const navigation={this.props.navigation} ;
    //var {navigate} = this.props.navigation;
    //{navigation= this.props.navigation}

    const showAlert = () => {
      Alert.alert(
        'You need to...'
      )
    }
    return (
      <View >
        <View>
          <Header />
        </View>
        <View style={ao.wrapper}>
          <TouchableHighlight style={{ backgroundColor: 'green' }}
            onPress={() => { this.gotoViewTable.bind(this) }}
          >
            <Text>lfghdslkgs</Text>
          </TouchableHighlight>
        </View>

      </View>






      // <FlatList
      //   data={this.state.mang}
      //   renderItem={({ item }) =>
      //     // <TouchableOpacity onPress={() =>this.props.navigation('WT')

      //     // }>
      //     //   <View style={ao.dong}>
      //     //     <Text>{item.ban}</Text>
      //     //   </View>
      //     // </TouchableOpacity>



      //     <TouchableOpacity onPress={() => this.props.navigation.navigate('ViewTable')}>
      //       <View style={ao.dong}>
      //         <Text>{item.ban}</Text>
      //       </View>
      //     </TouchableOpacity>




      //   }
      //   horizontal={false}
      //   numColumns={4}
      // />


    );
  }
  componentDidMount() {
    fetch(url.Server)
      .then((response) => response.json())//response tham so tra ve
      .then((responseJson) => { //doc phan tu trong json
        //return responseJson.row;
        console.log(responseJson);
        // console.log(products);
        this.setState({
          mang: responseJson
        });

      })
      .catch((error) => {
        console.log(error);
      })
  }

}
var ao = StyleSheet.create({
  dong: {
    padding: 25.7,
    borderWidth: 1,
    borderColor: 'red'
  },
  wrapper: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'green',
    //height: height
  },
});

*/
