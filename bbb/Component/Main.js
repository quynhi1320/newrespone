import React from "react";
import { StyleSheet, View, Dimensions, Text, Image } from "react-native";
import global from './global'
import Info from '././Info';
import Order from './Order';
import StateOrder from './StateOrder';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home';
import array from './cartArray'
import saveCart from './saveCart'
import url from './UrlLocal'
import getCart from './getCart'

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

class Main extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            cartArray: [],



        };
        global.addProductToCart = this.addProductToCart.bind(this);
        global.incrQuantity = this.incrQuantity.bind(this);
        global.descQuantity = this.descQuantity.bind(this);
        global.removeProduct = this.removeProduct.bind(this);
        global.clear = this.clear.bind(this);


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

            });
        getCart()
            .then(cartArray => this.setState({ cartArray }));
    }

    clear(){
        this.setState({cartArray:[]})
    }
    addProductToCart(banid, product, tenmenu, price) {
        const isExit = this.state.cartArray.some(e => e.product === product);
        if (isExit) return false;
        this.setState(
            { cartArray: this.state.cartArray.concat({ banid, product, tenmenu, price, quantity: 1 }) },
            () => saveCart(this.state.cartArray)
        );

        console.log('addproduct to cart ', this.state.cartArray, 'productaaaaaaa')
        //  console.log('âksgdasdkjjjjjjjjaddđ',array.cartArray[0],'dgggggggusdgdgggggggggggg')
    }
    incrQuantity(productId) {
        console.log('productId', productId)
        const newCart = this.state.cartArray.map(e => {
            if (e.product !== productId) return e;
            return { banid: e.banid, price: e.price, product: e.product, quantity: e.quantity + 1, tenmenu: e.tenmenu };
        });
        this.setState({ cartArray: newCart },
            () => saveCart(this.state.cartArray)
        );
    }
    descQuantity(productId) {
        console.log('productId', productId)
        const newCart = this.state.cartArray.map(e => {
            if (e.product !== productId) return e;
            return { banid: e.banid, price: e.price, product: e.product, quantity: e.quantity - 1, tenmenu: e.tenmenu };
        });
        this.setState({ cartArray: newCart },
            () => saveCart(this.state.cartArray)
        );
    }
    removeProduct(productId) {
        typeof (this.state.cartArray)
        const newCart = this.state.cartArray.filter(e =>
            e.product !== productId
        );
        this.setState({ cartArray: newCart },
            () => saveCart(this.state.cartArray)
        );
    }

    render() {
        const { cartArray } = this.state;
        return (
            <View style={{ flex: 3 }}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Image source={require('././Images/icon.png')} style={styles.image} />}
                        //  renderSelectedIcon={() => <Image source={require('./Images/home1')} />}
                        //badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'home' })}
                    >

                        <Home />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'order'}
                        title="Menu "
                        renderIcon={() => <Image source={require('././Images/menu.png')} style={styles.image} />}
                        //renderSelectedIcon={() => <Image source={...} />}
                        // renderBadge={() => <CustomBadgeView />}
                        badgeText={this.state.cartArray.length}
                        onPress={() => this.setState({ selectedTab: 'order' })}
                    >
                        <Order cartArray={cartArray} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'stateOrder'}
                        title="StateOrder "
                        renderIcon={() => <Image source={require('././Images/orderhistory.png')} style={styles.image} />}
                        //renderSelectedIcon={() => <Image source={...} />}
                        // renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: 'stateOrder' })}
                    >
                        <StateOrder />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'info'}
                        title="Info "
                        renderIcon={() => <Image source={require('././Images/contact.png')} style={styles.image} />}
                        //renderSelectedIcon={() => <Image source={...} />}
                        // renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: 'info' })}
                    >
                        <Info />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        margin: 10,
        borderWidth: 1,
        borderColor: 'green',
        height: height
    },
    image: {
        height: 20,
        width: 20,

    },

});
export default Main;