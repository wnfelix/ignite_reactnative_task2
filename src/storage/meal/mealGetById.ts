import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { IMeal } from "src/interfaces";

export async function mealGetById(id: string) {
	try {
		const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION);
		const meals: IMeal[] = storedMeals ? JSON.parse(storedMeals) : [];
		const meal = meals[meals.findIndex(item => item.id === id)];

		return meal;
	} catch (error) {
		throw error;
	}
}
