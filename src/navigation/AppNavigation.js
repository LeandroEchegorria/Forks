import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsScreen } from "../screens/RestaurantsScreen";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { AccountScreen } from "../screens/AccountScreen";
import { RankingScreen } from "../screens/RankingScreen";
import { SearchScreen } from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} />
            <Tab.Screen name="Ranking" component={RankingScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    )
}