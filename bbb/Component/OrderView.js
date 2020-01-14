import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Detail from './Detail';
import Order from './Order';


const Home = createStackNavigator({
    OrderScreen: Order,
    DetailScreen : Detail


  },
  {
   initialRouteName: "HomeViewScreen"
  }
  );


const App = createAppContainer(Home);

export default App;