import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from './screens/DashboardScreen';
import SettingsScreens from './screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function App() {

  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Dashboard" component={DashboardScreen} options={{
          title: "My Dashboard",
          drawerLabel: "Dashboard Label",
          drawerActiveTintColor: "blue",
          drawerActiveBackgroundColor: "red",
          drawerContentStyle: {
            backgroundColor: "#ba2456"
          }
        }}/>
        <Drawer.Screen name='SettingsScreen' component={SettingsScreens} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}