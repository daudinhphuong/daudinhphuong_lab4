import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import SettingsScreen from './screens/SettingsScreen';
import { FavoritesProvider } from './screens/FavoritesContext';

// Khởi tạo Stack Navigator
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// Navigator cho các món ăn (dùng Stack Navigator)
const MealsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Meals" component={MealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

// Khởi tạo Tab Navigator
const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => {
        let iconName: string;

        switch (route.name) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Favorites':
            iconName = 'heart';
            break;
          case 'Settings':
            iconName = 'settings';
            break;
          default:
            iconName = 'information-circle'; // Giá trị mặc định nếu không khớp với bất kỳ tên nào
        }

        return {
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={iconName} size={size} color={color} />
          ),
        };
      }}
    >
      <Tabs.Screen name="Home" component={MealsNavigator} options={{ title: 'Home' }} />
      <Tabs.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Favorites' }} />
      <Tabs.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
    </Tabs.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <FavoritesProvider>  
        <TabNavigator />
      </FavoritesProvider>
    </NavigationContainer>
  );
};

export default App;