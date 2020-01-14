import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeView from './HomeView'
import MenuOrder from './MenuOrder';
import Detail from './Detail';


const Home = createStackNavigator({
    HomeViewScreen: HomeView,
    MenuDetailScreen: MenuOrder,
    DetailScreen : Detail


  },
  {
   initialRouteName: "HomeViewScreen"
  }
  );


const App = createAppContainer(Home);

export default App;