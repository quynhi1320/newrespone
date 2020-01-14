import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet,  Dimensions,Image,TouchableOpacity,TextInput} from 'react-native';
import url from './UrlLocal.js'
import global from './global';
const { height } = Dimensions.get('window');
class Profile extends React.Component {
          static navigationOptions = {
            header: null
          }
          
        
          constructor(props) {
            super(props);
            this.state = {
              menu: [],
               cartArray: []
            };
            global.addProductToCart = this.addProductToCart.bind(this);
            }
            gotoLHomeView () {
              this.props.navigation.pop();
            }
            addProductToCart(product){
              this.setState({cartArray: this.state.cartArray.concat(product)});
              cart.cartArray.concat(product)
            }
            addThisProductToCart(){
              const {product} =this.props.navigation.state.params.object;
              global.addProductToCart(product);
            }
          
          // gotoViewTable() {
          //   const { navigator } = this.props
          //   navigator.push('VIEWTABLE')
          // }
        
          render() {
            //const navigation={this.props.navigation} ;
            //var {navigate} = this.props.navigation;
            //{navigation= this.props.navigation}
            const item=this.props.navigation.state.params.object;
            const showAlert = () => {
              Alert.alert(
                'You need to...'
              )
            }
            
            return (
              <View >
               
                    <View style = {ao.head} >
                       
                        <View style={ao.row1}>
                        <TouchableOpacity onPress={this.gotoLHomeView.bind(this)}>
                          <Image style={styles.backStyle}  source={require('././Images/backhome.png')} />
                      </TouchableOpacity>
                            <Text style={ao.titleStyle}>MENU</Text>
                            <TouchableOpacity onPress={this.addThisProductToCart.bind(this)}>
                                <Image source={require('././Images/giohang.png')} style={ao.iconStyle} />
        
                            </TouchableOpacity>
                        </View>
                        <TextInput style={ao.textInput}
                            placeholder="Search"
                            
                        />
                        
                        
                    </View>
                <View style={ao.wrapper}>
                  <FlatList
                    data={this.state.menu}
                    renderItem={({ item }) =>
                      <View>
                        <View style={ao.dong}>
                          <Text>{item.tenMenu}</Text>
                          
                          <View style={ao.productController}>
                                    <View style={ao.numberOfProduct}>
                                        <TouchableOpacity>
                                            <Text style = { {borderWidth: 1,padding: 3.5, borderColor: 'brown'}}>+</Text>
                                        </TouchableOpacity>
                                        <Text style = { {borderWidth: 1,padding: 3.5, borderColor: 'brown'}}>{3}</Text>
                                        <TouchableOpacity>
                                            <Text style = { {borderWidth: 1,padding: 3.5, borderColor: 'brown'}}>-</Text>
                                        </TouchableOpacity>
                          </View>
                           </View>
                          
                        </View>
                      </View>
        
                    }
                    horizontal={false}
                    numColumns={1}
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
           height: height / 5, backgroundColor: '#1e90ff', padding: 10, justifyContent: 'space-around' },
        //top : {...StyleSheet.absoluteFillObject, top: 15 ,backgroundColor: 'transparent'},
        row1: { flexDirection: 'row', justifyContent:'space-between'},
        textInput: { top:12,height: height / 22, backgroundColor: '#FFF', paddingLeft: 10 },
        titleStyle: { color: '#FFF', left : 100, top: 10,fontSize: 40 },
        iconStyle: { width: 30, height: 30,top: 15  }
        });
  export default Profile;