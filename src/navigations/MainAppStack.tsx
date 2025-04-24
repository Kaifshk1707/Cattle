import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainAppBottomTab from "./MainAppBottomTab";
import CheckOutScreen from "../screens/cart/CheckOutScreen";
import CartOrderList from "../screens/cart/CartOrderList";
import { useEffect, useState } from "react";
import { RootState } from "../redux/store";
import { ActivityIndicator, View } from "react-native";
// import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { globalColor } from "../styles/globalColor";
import AddUserScreen from "../components/InwardMedicine/AddUserScreen";
import InwardMedicine from "../components/InwardMedicine/InwardMedicine";
import CreateNew from "../components/ManageTranactions/CreateNew";
import History from "../components/ManageTranactions/History";
import Edit from "../components/ManageTranactions/Edit";
import AddMedicineScreen from "../components/InwardMedicine/AddMedicineScreen";




const Stack = createStackNavigator();

const MainAppStack = () => {
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [userData, setUserData] = useState<object | null>(null);



  // useEffect(()=>{
  //   onAuthStateChanged(auth, (userDataFromFireBase) => {
  //     if (userDataFromFireBase) {
  //       setIsLoading(false);
  //       setUserData(userDataFromFireBase);
  //       console.log("User is logged in:");
  //     } else {
  //       setIsLoading(false);
  //       console.log("User is logged out");
  //     }
  //   })
  // },[])

  // if (isLoading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <ActivityIndicator size={45} color={globalColor.blueGray} />
  //     </View>
  //   );
  // }

  return (
    <Stack.Navigator
      // initialRouteName={userData ? "MainAppBottomTab" : "AuthStack"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MainAppBottomTab" component={MainAppBottomTab} />
      <Stack.Screen name="CreateNew" component={CreateNew} />
      <Stack.Screen name="EditScreen" component={Edit} />
      <Stack.Screen name="History" component={History} />
      {/* <Stack.Screen name="SettingScreen" component={SettingScreen} /> */}
      <Stack.Screen name="InwardMedicine" component={InwardMedicine} />
      <Stack.Screen name="AddUserScreen" component={AddUserScreen} />
      <Stack.Screen name="AddMedicineScreen" component={AddMedicineScreen} />
    </Stack.Navigator>
  );
};
export default MainAppStack;
