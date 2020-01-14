
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, ScrollView, FlatList } from 'react-native';
import url from './UrlLocal'
const { height } = Dimensions.get('window');
export default class StateOrder extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            arrOrder: [],
        };
    }
    goBackToMain() {
        this.props.navigation.pop();
    }
    componentDidMount() {
        fetch(url.Server + url.orderhiss)
            .then((response) => response.json())//response tham so tra ve
            .then((responseJson) => { //doc phan tu trong json
                //return responseJson.row;
                console.log(responseJson);
                // console.log(products);
                this.setState({
                    arrOrder: responseJson
                });

            });
        // getCart()
        //     .then(cartArray => this.setState({ cartArray }));
    }
    render() {
        const { arrOrder } = this.state;
        return (
            <View style={styles.wrapper}>
                <View style={styles.header}>

                    <Text style={styles.headerTitle}>ORDER HISTORY</Text>

                </View>
                <View style={styles.body}>

                    <FlatList
                        data={arrOrder}
                        renderItem={({ item }) =>
                            <View style={styles.orderRow}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Table :</Text>
                                    <Text style={{ color: '#2ABB9C' }}>{item.id_ban}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                                    <Text style={{ color: '#C21C70' }}>{item.date_order}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                                    <Text style={{ color: '#2ABB9C' }}>{item.state}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                                    <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>{item.total}</Text>
                                    <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>{item.title}</Text>

                                </View>
                                {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <FlatList
                                        data={arrOrder}
                                        renderItem={({ item }) =>
                                            <View style={styles.orderRow}>
                                                <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>{item.title}</Text>

                                            </View>
                                        }
                                        horizontal={false}
                                        numColumns={1}
                                    />


                                </View> */}
                            </View>
                        }
                        horizontal={false}
                        numColumns={1}
                    />
                </View>
            </View>
        );
    }
}


const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#1e90ff' },
    header: { height: height / 3, flex: 1, backgroundColor: '#1e90ff', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', padding: 10 },// eslint-disable-line
    headerTitle: { top: 15, color: '#fff', fontSize: 30, justifyContent: 'center' },
    backIconStyle: { top: 15, width: 40, height: 40 },
    body: { flex: 10, backgroundColor: '#F6F6F6' },
    orderRow: {
        height: width / 2,
        backgroundColor: '#FFF',
        margin: 10,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#DFDFDF',
        shadowOpacity: 0.2,
        padding: 10,
        borderRadius: 2,
        justifyContent: 'space-around'
    }
});
{/* <ScrollView>
             

             <View style={styles.orderRow}>
                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                     <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                     <Text style={{ color: '#2ABB9C' }}>ORD001</Text>
                 </View>
                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                     <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                     <Text style={{ color: '#C21C70' }}>2017-04-19 08:30:08</Text>
                 </View>
                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                     <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                     <Text style={{ color: '#2ABB9C' }}>Pending</Text>
                 </View>
                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                     <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                     <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>100$</Text>
                 </View>
             </View>

             <View style={styles.orderRow}>
                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                     <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                     <Text style={{ color: '#2ABB9C' }}>ORD001</Text>
                 </View>
                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                     <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                     <Text style={{ color: '#C21C70' }}>2017-04-19 08:30:08</Text>
                 </View>
                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                     <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                     <Text style={{ color: '#2ABB9C' }}>Pending</Text>
                 </View>
                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                     <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                     <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>100$</Text>
                 </View>
             </View>
             <View style={styles.orderRow}>
                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                     <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                     <Text style={{ color: '#2ABB9C' }}>ORD001</Text>
                 </View>
                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                     <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                     <Text style={{ color: '#C21C70' }}>2017-04-19 08:30:08</Text>
                 </View>
                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                     <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                     <Text style={{ color: '#2ABB9C' }}>Pending</Text>
                 </View>
                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                     <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                     <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>100$</Text>
                 </View>
             </View>
             <View style={styles.orderRow}>
                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                     <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                     <Text style={{ color: '#2ABB9C' }}>ORD001</Text>
                 </View>
                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                     <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                     <Text style={{ color: '#C21C70' }}>2017-04-19 08:30:08</Text>
                 </View>
                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                     <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                     <Text style={{ color: '#2ABB9C' }}>Pending</Text>
                 </View>
                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                     <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                     <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>100$</Text>
                 </View>
             </View>
         </ScrollView>
          */}