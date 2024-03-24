import { useCallback, useMemo, useState } from "react";
import { Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { formatNumber } from "@utils/numberUtils";
import { IMeal } from "src/interfaces";

import {
	Body,
	ColorView,
	Container,
	Counter,
	CounterSection,
	IconDetail,
	LabelResultText,
	ResultSectionDifference,
	ValueResultText,
} from "./styles";
import { ColorText } from "@styles/global";
import { mealGetAll } from "@storage/meal/mealGetAll";
import { handleError } from "@utils/AppError";

export function MealResults() {
	const navigator = useNavigation();

	const [meals, setMeals] = useState<IMeal[]>([]);

	const dietyPercent = useMemo(
		() => (meals.filter(i => i.isInside).length * 100) / meals.length,
		[meals]
	);

	const longestSequence = useMemo(() => {
		let longest = 0;
		let currentSequence = 0;

		for (let i = 0; i < meals.length; i++) {
			if (meals[i].isInside) {
				currentSequence++;
				if (currentSequence > longest) {
					longest = currentSequence;
				}
			} else {
				currentSequence = 0;
			}
		}

		return longest;
	}, [meals]);

	const limitGoodDiety = dietyPercent >= 50;

	useFocusEffect(
		useCallback(() => {
			fetchMeals();
		}, [])
	);

	async function fetchMeals() {
		try {
			const storedMeals = await mealGetAll();
			setMeals(storedMeals);
		} catch (error) {
			handleError(error, "Não foi possível carregar as refeições", message =>
				Alert.alert("Refeições", message)
			);
		}
	}

	function handleGoBack() {
		navigator.goBack();
	}

	return (
		<Container insideDiety={limitGoodDiety}>
			<CounterSection>
				<TouchableOpacity
					onPress={handleGoBack}
					style={styles.IconResultSection}
				>
					<IconDetail insideDiety={limitGoodDiety} />
				</TouchableOpacity>
				<Counter>{`${formatNumber(dietyPercent, 2)}%`}</Counter>
				<Text>das refeições dentro da dieta</Text>
			</CounterSection>
			<Body>
				<ColorText bold>Estatísticas gerais</ColorText>
				<ColorView color="GRAY_600">
					<ValueResultText>{longestSequence}</ValueResultText>
					<Text>melhor sequência de pratos dentro da dieta</Text>
				</ColorView>
				<ColorView color="GRAY_600">
					<ValueResultText>{meals.length}</ValueResultText>
					<Text>refeições registradas</Text>
				</ColorView>
				<ResultSectionDifference>
					<ColorView color="GREEN_LIGHT" width="47%">
						<ValueResultText>
							{meals.filter(item => item.isInside).length}
						</ValueResultText>
						<LabelResultText>refeições dentro da dieta</LabelResultText>
					</ColorView>
					<ColorView color="RED_LIGHT" width="47%">
						<ValueResultText>
							{meals.filter(item => !item.isInside).length}
						</ValueResultText>
						<LabelResultText>refeições fora da dieta</LabelResultText>
					</ColorView>
				</ResultSectionDifference>
			</Body>
		</Container>
	);
}

const styles = StyleSheet.create({
	IconResultSection: {
		marginRight: "auto",
	},
});
