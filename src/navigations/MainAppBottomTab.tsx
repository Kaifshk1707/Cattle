import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import UserScreen from "../screens/users/UserScreen";
import MedicineScreen from "../screens/medicine/MedicineScreen";
import MoreScreen from "../screens/profile/MoreScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

const MainAppBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "dodgerblue",
        tabBarInactiveTintColor: "#A7CCF6",
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "600",
        },
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 65,
          borderRadius: 30,
          marginHorizontal: 15,
          marginBottom: 10,
          paddingBottom: 10,
          paddingTop: 12,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "dodgerblue",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "dodgerblue",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="users" size={size} color={color} />
          ),
        }}
        name="User"
        component={UserScreen}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "dodgerblue",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="medicinebox" size={size} color={color} />
          ),
        }}
        name="Medicine"
        component={MedicineScreen}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "dodgerblue",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            // <Ionicons name="person-circle-outline" size={30} color={color} />
            // <MaterialIcons name="post-add" size={30} color={color} />
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
        name="Profile"
        component={MoreScreen}
      />
    </Tab.Navigator>
  );
};
export default MainAppBottomTab;
