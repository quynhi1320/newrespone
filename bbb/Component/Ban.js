import React from "react";
import {StyleSheet, View,Text, Dimensions,FlatList,TouchableOpacity,Navigator,Alert} from "react-native"; 
import url from './UrlLocal.js'
import Header from './Header'
import HomeView from "./HomeView.js";
const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
//const productWidth = width  ;
class Ban extends React.Component{
    static navigationOptions = {
       header : null
    }
    constructor(props) {
      super(props);
      this.state = {
        mang: []
      }
    }
    
    componentDidMount() {
      fetch(url.Server + url.homeU)
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
    // gotoProductDetail (e) {
    //   console.log('MenuDetailScreenaaaaaaa',e,'MenuDetailScreenaaaaa')
    //   navigation.navigate('MenuDetailScreen',{object:e})
    // }
     render(){
      const  {wrapper} = styles;
      const { navigation } = this.props;
        return(
            <View >
              <Header />
                <View style = {wrapper} >
                <FlatList
                        data={this.state.mang}
                        renderItem={({ item }) =>
                           <TouchableOpacity  onPress={() =>
                            // this.state.mang.map((item, key)=>{
                            //   console.log(item.key)
                            //   navigation.navigate('HomeView', {
                                
                            //     id: item.key
                            //   })
                            // })
                            {this.props.onOpen(item.key)
                             } }>
                              <View style={styles.dong}>
                              <Text >{item.key}</Text>
                              <Text >{item.tenBan}</Text>
                              </View>
                           </TouchableOpacity>
                        

                        }
                        horizontal={false}
                        numColumns={4}
                        />

               </View>   
               
            </View>
           
        );
  }
}

const styles = StyleSheet.create({
  wrapper: { 
   margin : 10,
  // borderWidth : 1,
  // borderColor: 'green',
   height : height 
  },
  dong: {
   padding: 25.7,
   borderWidth: 1,
  // borderColor: 'red'
 },
  than: {
   margin: 10,
   //borderWidth: 1,
  // borderColor: 'green',
   //height: height
 },
  
});
export default Ban ;