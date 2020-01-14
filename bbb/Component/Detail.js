import React from 'react'
import global from './global';
import { Text, View, TouchableOpacity, Image, Dimensions, StyleSheet, ScrollView } from 'react-native'
import url from './UrlLocal'
import Order from './Order'
const { height } = Dimensions.get('window');
class Detail extends React.Component {
  static navigationOptions = {
    header: null
  }  
  gotoLHomeView () {
    this.props.navigation.pop();
  }
  gotoOrder (e) {
    console.log('dvfjadfjahf',e,'skdgfigfrgwefh')
    this.props.navigation.navigate('OrderScreen',{object:e})
  }
  addThisProductToCart(){
    const product =this.props.navigation.state.params.object;
    global.addProductToCart(product);
    console.log('addthisssssssproduct to cart ', product, 'productaaaaaaa')
  }
  
  render () {
      const item=this.props.navigation.state.params.object;
     // console.log('thispropsnavigationstateparamsobjecteddddđ ', this.props.navigation.state.params.object, 'productaaaaaaa')
    return (
      <View style={styles.wrapper}>
         <View style={styles.header}>
              <TouchableOpacity onPress={this.gotoLHomeView.bind(this)}>
                  <Image style={styles.backStyle}  source={require('./Images/backhome.png')} />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>MENU DETAIL</Text>
    <Text>{this.props.navigation.getParam('object')}</Text>
              <TouchableOpacity onPress={this.addThisProductToCart.bind(this)} >
                  <Image style={styles.cartStyle} source={require('./Images/giohang.png')} />
              </TouchableOpacity>
          </View>
        <View style={styles.cardStyle}>
         
          <View style={styles.footer}>
              <View style={styles.titleContainer}>
                  {/* <Text style={styles.textMain}>
                 
                  <Text style={styles.textBlack}>{item.title.toUpperCase()}</Text>
                      <Text style={styles.textHighlight}> / </Text>
                      <Text style={styles.textSmoke}>{item.price} VND</Text>
                  </Text> */}
                  <View>
                     <TouchableOpacity onPress={this.addThisProductToCart.bind(this)} >
                  <Image style={styles.cartStyle} source={require('./Images/giohang.png')} />
              </TouchableOpacity>
                     </View>
              </View>
          </View>
      </View>
  </View>
    
    )
  }
}

const { width } = Dimensions.get('window');
const swiperWidth = (width / 1.8) - 30;
const swiperHeight = (swiperWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF',
    },
    headerTitle: { top:5, color: '#fff', fontSize: 30 ,justifyContent: 'center'},

    cardStyle: {
     
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 1,
        marginHorizontal: 10,
        marginVertical: 10
    },
   
    header: { 
    //   borderWidth: 1, 
    //   flex: 1,
    //   height: height/9, 
     
      backgroundColor: '#1e90ff', 
      alignItems: 'center',
    //    justifyContent:'space-between',
        flexDirection: 'row',
    //  padding: 10 ,
    paddingTop: 50,
    paddingBottom:    20,
    },
    cartStyle: {
      top:10,
        marginTop:-15,
        width: 35,
        height:35
    },
    backStyle: {
      top:15,
        marginTop:-15,
        width: 35,
        height: 35
    },
    productStyle: {
        width: width / 2,
        height: width / 2
    },
    footer: {
        flex: 3,
    },
    imageContainer: {
        flex: 6,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10
    },
    textMain: {
        paddingLeft: 20,
        marginVertical: 10
    },
    textBlack: {
      
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3F3F46'
    },
    textSmoke: {
        
        fontSize: 20,
        color: '#9A9A9A'
    },
    textHighlight: {
        
        fontSize: 20,
        color: '#7D59C8'
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderColor: '#F6F6F6',
        marginHorizontal: 20,
        paddingBottom: 5
    },
    descContainer: {
        margin: 10,
        paddingTop: 10,
        paddingHorizontal: 10
    },
    descStyle: {
        color: '#AFAFAF'
    },
    linkStyle: {
        color: '#7D59C8'
    },
    productImageStyle: {
        width: swiperWidth,
        height: swiperHeight,
        marginHorizontal: 5
    },
    mainRight: {
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        paddingLeft: 20
    },
    txtColor: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        
    },
    txtMaterial: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        
    }
});

export default Detail
