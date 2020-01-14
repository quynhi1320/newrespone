import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image, TextInput } from 'react-native';
//import icLogo from '../../../../hinhanh.png';
import icMenu from '././Images/icMenu.png';
const { height } = Dimensions.get('window');

class Header extends React.Component {
   
    render() {
        const  {wrapper, row1, textInput} = styles; 
        return (
            <View style = {wrapper} >
               
                <View style={row1}>
                    {/* <TouchableOpacity onPress={this._onPressButton}>
                        <Image source={icMenu} style={styles.iconStyle} />

                    </TouchableOpacity> */}
                     <Text style={styles.headerTitle}>TABLE</Text>

                </View>
                
                
            </View>

        );




    }
}
const styles = StyleSheet.create({
    wrapper: { //borderWidth : 1,
       // borderColor: 'red',
        height: height / 7, backgroundColor: '#1e90ff', padding: 10, justifyContent: 'space-around' },
    //top : {...StyleSheet.absoluteFillObject, top: 15 ,backgroundColor: 'transparent'},
    row1: { flexDirection: 'row', justifyContent: 'flex-start'},
    textInput: { top:12,height: height / 22, backgroundColor: '#FFF', paddingLeft: 10 },
    titleStyle: { color: '#FFF', left : 85, top: 10,fontSize: 40 },
    iconStyle: { width: 30, height: 30,top: 15  },

    headerTitle: {left: 125, top:15, color: '#fff', fontSize: 30 ,justifyContent:'center',flex: 1},
});
export default Header;