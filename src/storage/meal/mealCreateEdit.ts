import AsyncStorage from "@react-native-async-storage/async-storage";
import { differenceInMinutes } from "date-fns";
import { mealGetAll } from "./mealGetAll";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { IMeal } from "src/interfaces";
import { AreEqual } from "@utils/stringUtils";

export async function mealCreateEdit(meal: IMeal) {
	try {
		const storedMeals = await mealGetAll();
		const exists =
			storedMeals.findIndex(item => AreEqual(item.id, meal.id)) >= 0;

		if (!meal.name) {
			throw new AppError("É obrigatório informar o nome da refeição");
		} else if (!meal.description) {
			throw new AppError("É obrigatório informar a descrição");
		} else if (
			storedMeals.findIndex(
				item =>
					AreEqual(item.name, meal.name) &&
					differenceInMinutes(item.date, meal.date) === 0 &&
					!exists
			) > 0
		) {
			throw new AppError(
				"Já existe uma refeição cadastrada com esse nome para a mesma data e horário"
			);
		}

		const newStoredMeals = exists
			? [...storedMeals.filter(item => item.id !== meal.id), meal]
			: [...storedMeals, meal];
		await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(newStoredMeals));
	} catch (error) {
		throw error;
	}
}
