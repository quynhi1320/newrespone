import React from 'react';
import global from './global'
import { View, Text, TouchableOpacity, ScrollView, Dimensions, StyleSheet, Image, FlatList } from 'react-native';
const { height } = Dimensions.get('window');
import url from './UrlLocal'
import array from './cartArray';
import sendOrder from './sendOrder'
import { AsyncStorage } from 'react-native';
import saveCart from './saveCart';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class Order extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cartArray: []
        }
        this.cartArray = []
    }
    static navigationOptions = {
        header: null
    }

    incrQuantity(id) {
        global.incrQuantity(id);
        console.log('inrcid', id)
    }
    descQuantity(id) {
        console.log('inrcid', id)
        global.descQuantity(id);
    }
    // gotoProductDetail(id) {
    //     console.log("cart", cartArray.length)
    //     console.log('array.cartArray', this.state.cartArray[0], 'array.cartArraya')
    //     // this.props.navigation.navigate('ProductDetail')
    // }
    removeProduct(id) {
        console.log('remove product', id)
        global.removeProduct(id);
    }
    // async onSendOrder() {
    //     try {
    //         const ray = this.props.cartArray.map(e => ({


    //             banid: e.banid, price: e.price, product: e.product, quantity: e.quantity, tenmenu: e.tenmenu
    //         }));
    //         const kq = await sendOrder(ray);
    //         console.log('sendoder', ray[0])
    //         console.log('kq', kq)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    async dangnhap(a) {
        var a
        await AsyncStorage.getItem('@cart').then(req => a = JSON.parse(req))
        // console.log('cartArray1', a)
        await fetch(url.Server + url.billOrder, {
            method: "POST",
            body: JSON.stringify({

                ray: a

            })
        })

            // .then((response) => response.json())
            .then((response) => response.text())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,

                }, function () {
                    this.bach()
                });
                data = this.state.dataSource
                console.log('vvvvvvvv', data[1].tenmenu)
                console.log('data', data)
                // await AsyncStorage.setItem('@cart').then(req => data=JSON.parse(req))

            })

            .catch((error) => {
                console.log(error, 'vvvvvvvv')
            });

        // console.log('cartaaaa', cartArray, 'cartaaaa')


    }
    bach() {
        global.clear();
    }
    componentDidMount() {
        var { cartArray } = this.props;
        this.setState({ cartArray: cartArray })
    }
    render() {
        var { cartArray } = this.props;

        console.log('cartaaaa', cartArray, 'cartaaaa')
        const arrTotal = cartArray.map(e => e.price * e.quantity);
        const total = arrTotal.length ? arrTotal.reduce((a, b) => a + b) : 0;

        return (
            <View style={styles.wrapper}>

                <View style={styles.header}>

                    <Text style={styles.headerTitle}>ORDER </Text>

                </View>
                {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>TableNumber:  </Text>
                  

                </View> */}

                <FlatList
                    data={cartArray}
                    renderItem={({ item }) =>
                        <View style={styles.orderRow}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Ban:  {item.banid}</Text>
                                <TouchableOpacity >
                                    <Text onPress={() => this.removeProduct(item.product)}
                                        style={{ color: '#969696', width: 20 }}>X</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Tên món ăn:   </Text>
                                <Text style={{ color: '#2ABB9C', fontWeight: 'bold' }}>{toTitleCase(item.tenmenu)}</Text>
                               
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Giá:  </Text>
                                <Text style={{ color: '#2ABB9C', fontWeight: 'bold' }}>  {item.price} VND</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <TouchableOpacity onPress={() => this.incrQuantity(item.product)}>
                                    <Text style={{ padding: 10 }}>+</Text>
                                </TouchableOpacity>
                                <Text style={{ padding: 10 }}>{item.quantity}</Text>
                                <TouchableOpacity onPress={() => this.descQuantity(item.product)}>
                                    <Text style={{ padding: 10 }}>-</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    }
                    horizontal={false}
                    numColumns={1}
                />
                <TouchableOpacity style={styles.checkoutButton} onPress={() => this.dangnhap()}>
                    <Text style={styles.checkoutTitle}>TOTAL {total} VND CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
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
    },
    wrapper: {
        // marginTop: 30,

        // borderWidth: 1,
        // borderColor: 'red',
        // flex: 1,
        // backgroundColor: '#DFDFDF',
        flex: 1, borderWidth: 1,
        // backgroundColor:'#1e90ff'

    },
    headerTitle: {
        left: 125,
        top: 15,
        color: '#fff',
        fontSize: 30,
        justifyContent: 'center'
    },
    header: {
        height: 90,
        backgroundColor: '#1e90ff',
        padding: 10,
        justifyContent: 'center'
        // borderWidth: 1,
        // height: height / 5,
        // flex: 1,
        // backgroundColor: '#1e90ff',
        // alignItems: 'center',
        // justifyContent: 'center',
        // flexDirection: 'row',
        // padding: 10
    },// eslint-disable-line
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#1e90ff',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',

    },
    product: {
        //flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        top: 10,
        borderWidth: 1,
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        //  flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        //   flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',

    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',

    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        //   flexDirection: 'row',
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
    iconStyle: { width: 30, height: 30, top: 15 }
});

export default Order;
{/* <View style={{ flexDirection: 'column', flex: 1, borderWidth: 1, padding: 10 }}>
<View style={{ flexDirection: 'row', flex: 1 }}>
    <Text >{toTitleCase(item.tenmenu)}</Text>
    <View style={{ flexDirection: 'row-reverse', flex: 1 }}>
        <TouchableOpacity

        >
            <Text onPress={() => this.removeProduct(item.product)}
                style={{ color: '#969696',height:10,width:20 }}>X</Text>
        </TouchableOpacity>
    </View>
</View>
<View>
    <Text >{item.price} VND</Text>
</View>
<View style={{ flexDirection: 'row', flex: 1, padding: 10 }}>

    <TouchableOpacity onPress={() => this.incrQuantity(item.product)}>
        <Text style={{ padding: 10 }}>+</Text>
    </TouchableOpacity>
    <Text style={{ padding: 10 }}>{item.quantity}</Text>
    <TouchableOpacity onPress={() => this.descQuantity(item.product)}>
        <Text style={{ padding: 10 }}>-</Text>
    </TouchableOpacity>


</View>

</View>

 */}

{/*  
     <ScrollView style={styles.main}>
                    <View style={styles.product}>
                        <View style={styles.mainRight}>

                          


                        </View>
                    </View>

                </ScrollView>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
    <Text style={styles.txtName}>{toTitleCase('black of the')}</Text>
<TouchableOpacity onPress={this.gotoProductDetail.bind(this)}>
    <Text style={{ color: '#969696' }}>X</Text>
</TouchableOpacity> 
</View>
                        <View>
                            <Text style={styles.txtPrice}>{100}$</Text>
                        </View>
                        <View style={styles.productController}>
                            <View style={styles.numberOfProduct}>
                                <TouchableOpacity>
                                    <Text>+</Text>
                                </TouchableOpacity>
                                <Text>{3}</Text>
                                <TouchableOpacity>
                                    <Text>-</Text>
                                </TouchableOpacity>
                            </View>
                        </View>*/}