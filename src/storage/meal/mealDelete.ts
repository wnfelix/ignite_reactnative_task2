import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { AreEqual } from "@utils/stringUtils";
import { IMeal } from "src/interfaces";

export async function mealDeleteById(id: string) {
	try {
		const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION);
		const meals: IMeal[] = storedMeals ? JSON.parse(storedMeals) : [];

		await AsyncStorage.setItem(
			MEAL_COLLECTION,
			JSON.stringify([...meals.filter(item => !AreEqual(item.id, id))])
		);
	} catch (error) {
		throw error;
	}
}
