import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import url from './UrlLocal'
const { height } = Dimensions.get('window');
class Info extends React.Component {
    //state = {  }
    constructor(props) {
        super(props);
        this.state = {
            mang: []
        }
    }

    componentDidMount() {
        fetch(url.Server + url.info)
            .then((response) => response.json())//response tham so tra ve
            .then((responseJson) => { //doc phan tu trong json
                //return responseJson.row;
                console.log('respom', responseJson);
                // console.log(products);
                this.setState({
                    mang: responseJson
                });

            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {

        return (
            <View style={styles.wrapper}>
                <View style={styles.infoContainer}>

                    <View style={styles.mapContainer}>
                        <Image
                            style={{ width: 130, height: 130 }}
                            source={require('././Images/acc.jpg')}
                        />
                        <Text style={styles.Text}>Nhi </Text>
                    </View>
                    <View style={{ top: 100,height: height/2 }} >
                        <FlatList
                            data={this.state.mang}
                            renderItem={({ item }) =>
                               <View style = {{ }}>
                                   <View style ={styles.rowInfoContainer}>
                                        <Image source={require('././Images/address.png')} style={styles.image} />
                                        <Text style={styles.infoText}> Địa chỉ: Đường 3/2, Quận Ninh Kiều, TPCT </Text>
                                 </View>
                                 <View style ={styles.rowInfoContainer}>
                                        <Image source={require('././Images/mail.png')} style={styles.image} />
                                        <Text style={styles.infoText}> Email: {item.email}</Text>
                                        </View>
                                        <View style ={styles.rowInfoContainer}>
                                        <Image source={require('././Images/phoneden.png')} style={styles.image} />
                                        <Text style={styles.infoText}> SDT: {item.phone}</Text>
                                        </View>
                                    
                                </View>

                            }
                            horizontal={false}
                            numColumns={1}
                        />
                        </View>
                    </View>


                </View>
            
        );
    }
}


const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#F6F6F6' },
    mapStyle: {
        width: width - 40,
       // height: 230,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

    mapContainer: {
        height: height/4,
        top: 50,
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
    infoContainer: {
height: height /2,
        padding: 10,
        flex: 1,
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 0,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    rowInfoContainer: {
        padding: 15,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D6D6D6'
    },
    imageStyle: {
        width: 30,
        height: 30
    },
    infoText: {

        // fontFamily: 'Avenir',
        color: '#AE005E',
        fontWeight: '200',

    },
    Text: {

        // fontFamily: 'Avenir',
        color: '#AE005E',
        fontWeight: '200',
        top: 10
    },
    image: {
        height: 20,
        width: 20,

    },
    nen: { //borderWidth : 1,
        // borderColor: 'red',
        height: height / 5, backgroundColor: '#1e90ff', padding: 10, justifyContent: 'space-around'
    },
    //top : {...StyleSheet.absoluteFillObject, top: 15 ,backgroundColor: 'transparent'},
    row1: { flexDirection: 'row', justifyContent: 'flex-start' },
    textInput: { top: 12, height: height / 22, backgroundColor: '#FFF', paddingLeft: 10 },

});
export default Info;
{/* <View style={{ top: 70, height: height / 3 }}>
                        <View style={styles.rowInfoContainer}>
                            <Image source={require('././Images/address.png')} style={styles.image} />
                            <Text style={styles.infoText}> Địa chỉ: Đường 3/2, Quận Ninh Kiều, TPCT </Text>
                        </View>
                        <View style={styles.rowInfoContainer}>
                            <Image source={require('././Images/phoneden.png')} style={styles.image} />
                            <Text style={styles.infoText}> SDT: (+84)795420051</Text>
                        </View>
                        <View style={styles.rowInfoContainer}>
                            <Image source={require('././Images/mail.png')} style={styles.image} />
                            <Text style={styles.infoText}> Email: quynhi1320@gmail.com</Text>
                        </View>
                    </View> */}