import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { MealDetail } from "@screens/MealDetail";
import { MealResults } from "@screens/MealResults";
import { NewMeal } from "@screens/NewMeal";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="home" component={Home} />
			<Screen name="new" component={NewMeal} />
			<Screen name="results" component={MealResults} />
			<Screen name="detail" component={MealDetail} />
			<Screen name="edit" component={NewMeal} />
		</Navigator>
	);
}
