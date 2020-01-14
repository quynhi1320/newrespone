import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Image, TouchableOpacity, TextInput } from 'react-native';
import url from './UrlLocal.js'
import global from './global';
const { height } = Dimensions.get('window');

export default class MenuOrder extends Component {
  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);
    this.state = {
      menu: [],

    }
  }
  gotoLHomeView() {
    this.props.navigation.pop()
  }
  gotoDetail (e) {
    console.log('dvfjadfjahf',e,'skdgfigfrgwefh')
    this.props.navigation.navigate('DetailScreen',{object: this.props.navigation.getParam('object')})
    // this.props.navigation.navigate('DetailScreen',{object:e})
  }
  addThisProductToCart(idmenu,tenmenu,price){
    const banid =this.props.navigation.state.params.object;
    global.addProductToCart(banid,idmenu,tenmenu,price);
    console.log('addthisssssssproduct to cart ', idmenu,tenmenu,price, 'productaaaaaaa')
  }
  render() {
   
    return (
      <View >

        <View style={ao.head} >

          <View style={ao.row1}>
            <TouchableOpacity onPress={this.gotoLHomeView.bind(this)}>
              <Image source={require('././Images/backhome.png')} style={ao.iconStyle} />

            </TouchableOpacity >
            <Text style={ao.headerTitle}>ORDER </Text>
          </View>


        </View>
        <View style={ao.wrapper}>
          <FlatList
            data={this.state.menu}
            
            renderItem={({ item , key}) =>
        
                 
                 <View style={ao.dong}>
                  <Text>{item.title}</Text>
                  <Text>{item.price} VND </Text>
                  <View style={ao.productController}>
                    <View style={ao.numberOfProduct}>
                    <TouchableOpacity onPress={this.addThisProductToCart.bind(this,item.key,item.title,item.price)} >
                  <Image  source={require('./Images/add.png')} style={{width: 20, height: 20}} />
              </TouchableOpacity>
                    </View>
                  </View>

                </View>
                     
            }
            horizontal={false}
            numColumns={1}
            keyExtractor={(item, index) => `${index}`}
          />
        </View>

      </View>

    );
  }
  componentDidMount() {
    fetch(url.Server + url.orderU)
      .then((response) => response.json())//response tham so tra ve
      .then((responseJson) => { //doc phan tu trong json
        //return responseJson.row;
        console.log(responseJson);
        // console.log(products);
        this.setState({
          menu: responseJson
        });

      })
      .catch((error) => {
        console.log(error);
      })
  }
}

var ao = StyleSheet.create({
  dong: {
    padding: 20,
    borderWidth: 1,
    //  borderColor: 'red'
  },
  headerTitle: {
    left: 80,
    top: 20,
    color: '#fff',
    fontSize: 30,
    justifyContent: 'center'
},
  wrapper: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start'
    // borderWidth: 1,
    //borderColor: 'green',
    //height: height
  },
  productController: {
    flexDirection: 'row'
  },
  numberOfProduct: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  head: { //borderWidth : 1,
    // borderColor: 'red',
    height: height / 7, backgroundColor: '#1e90ff', padding: 10, justifyContent: 'space-around'
  },
  //top : {...StyleSheet.absoluteFillObject, top: 15 ,backgroundColor: 'transparent'},
  row1: { flexDirection: 'row', justifyContent: 'flex-start' },
  textInput: { top: 12, height: height / 22, backgroundColor: '#FFF', paddingLeft: 10 },
  titleStyle: { color: '#FFF', left: 100, top: 10, fontSize: 40 },
  iconStyle: { width: 45, height: 45, top: 15 }
});
{/* <TouchableHighlight style={{ backgroundColor: 'green' }}
           // onPress={() => { this.gotoViewTable.bind(this) }}
          >
            <Text>lfghdslkgs</Text>
          </TouchableHighlight> */}