import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { IMeal } from "src/interfaces";

export async function mealGetAll() {
	try {
		//await AsyncStorage.removeItem(MEAL_COLLECTION);
		const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION);

		const meals: IMeal[] = storedMeals ? JSON.parse(storedMeals) : [];

		return meals.map(item => ({ ...item, date: new Date(item.date) }));
	} catch (error) {
		throw error;
	}
}
