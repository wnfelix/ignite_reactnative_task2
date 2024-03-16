import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewMeal } from "@screens/NewMeal";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="newMeal" component={NewMeal} />
		</Navigator>
	);
}
