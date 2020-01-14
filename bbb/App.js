import {createAppContainer,TabNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SignIn from './Component/SignIn';
import Main from './Component/Main';
import Ban from './Component/Ban'


 const HomeStack = createStackNavigator({
 
    MainScreen: Main,
    SignScreen: SignIn ,
 
  },
  {
   initialRouteName: "SignScreen"
  }
  );
  
 

 const App = createAppContainer(HomeStack);

 export default App;