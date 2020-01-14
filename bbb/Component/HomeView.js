import React from 'react'
import { Text, View, Image, ScrollView,TouchableOpacity } from 'react-native'
import Ban from './Ban'
import MenuOrder from './MenuOrder'

class HomeView extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor (props) {
    super(props)
  }
//   gotoListProduct () {
//     this.props.navigation.navigate('ListProduct')
//   }
   gotoProductDetail (e) {
    console.log('MenuDetailScreenaaaaaaa',e,'MenuDetailScreenaaaaa')
     this.props.navigation.navigate('MenuDetailScreen',{object:e})
   }
  //  gotoDetail (e) {
  //   console.log('dvfjadfjahf',e,'skdgfigfrgwefh')
  //   this.props.navigation.navigate('DetailScreen',{object:e})
  // }
  
  state = {}
  render () {
    //const {types} = this.props;
   // const { navigation } = this.props
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
  {/* <Text>{this.props.navigation.getparam("id")}</Text> */}
        <Ban onOpen={this.gotoProductDetail.bind(this)}/> 
       {/* <MenuOrder onOpen={this.gotoDetail.bind(this)}/> 
         <Catelogy onOpen={this.gotoListProduct.bind(this)}  />
        <Topproduct onOpen={this.gotoProductDetail.bind(this)} /> */}
      </ScrollView>

    );
  }
}

export default HomeView
