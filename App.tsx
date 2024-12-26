import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Screen1"
          component={Screen1}
          options={{
            title: "1st Screen",
            drawerLabel: "Screen 1",
            drawerActiveTintColor: "black",
            drawerActiveBackgroundColor: "gray",
            drawerContentStyle: {
              backgroundColor: "white",
            },
          }}
        />
        <Drawer.Screen
          name="Screen2"
          component={Screen2}
          options={{
            title: "2nd Screen",
            drawerLabel: "Screen 2",
            drawerActiveTintColor: "black",
            drawerActiveBackgroundColor: "gray",
            drawerContentStyle: {
              backgroundColor: "white",
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
