import { useCallback, useMemo, useState } from "react";
import {
	Alert,
	Image,
	SectionList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { format } from "date-fns";
import { formatNumber } from "@utils/numberUtils";
import { Button, ColorText } from "@styles/global";
import { MealItem } from "./components/MealItem";
import { IMeal } from "src/interfaces";
import { mealGetAll } from "@storage/meal/mealGetAll";
import logo from "@assets/logo.png";
import { handleError } from "@utils/AppError";
import {
	AddButton,
	AddIcon,
	AddText,
	AvatarImage,
	Container,
	Counter,
	CounterSection,
	Header,
	IconDetail,
	ListHeaderItem,
	NewSection,
} from "./styles";
import { Loading } from "@components/Loading";

export function Home() {
	const navigator = useNavigation();
	const [meals, setMeals] = useState<IMeal[]>([]);
	const [loading, setLoading] = useState(true);

	const dietyPercent = useMemo(
		() =>
			(meals.filter(i => i.isInside).length * 100) /
			(meals.length === 0 ? 1 : meals.length),
		[meals]
	);

	const data = useMemo(() => {
		const dates = meals
			.filter(
				(v, i, a) =>
					a.findIndex(r => r.date.toDateString() === v.date.toDateString()) ===
					i
			)
			.map(i => i.date)
			.sort((a, b) => b.getTime() - a.getTime());

		return dates.map(item => ({
			title: item,
			data: meals
				.filter(m => m.date.toDateString() === item.toDateString())
				.sort((a, b) => b.date.getTime() - a.date.getTime()),
		}));
	}, [meals]);

	const limitGoodDiety = dietyPercent >= 50;

	useFocusEffect(
		useCallback(() => {
			fetchMeals();
		}, [])
	);

	async function fetchMeals() {
		setLoading(true);
		try {
			const storedMeals = await mealGetAll();
			setMeals(storedMeals);
		} catch (error) {
			handleError(error, "Não foi possível carregar as refeições", message =>
				Alert.alert("Refeições", message)
			);
		} finally {
			setLoading(false);
		}
	}

	function handleAddNewMeal() {
		navigator.navigate("new");
	}

	function handleGoToResults() {
		navigator.navigate("results");
	}

	function handleMealDetail(id: string) {
		navigator.navigate("detail", { id });
	}

	return loading ? (
		<Loading />
	) : (
		<Container>
			<Header>
				<Image source={logo} />
				<AvatarImage />
			</Header>
			<CounterSection insideDiety={limitGoodDiety}>
				<TouchableOpacity
					onPress={handleGoToResults}
					style={styles.IconResultSection}
				>
					<IconDetail insideDiety={limitGoodDiety} />
				</TouchableOpacity>
				<Counter>{`${formatNumber(dietyPercent, 2)}%`}</Counter>
				<ColorText>das refeições dentro da dieta</ColorText>
			</CounterSection>
			<NewSection>
				<ColorText size="MD">Refeições</ColorText>
				<AddButton onPress={handleAddNewMeal}>
					<AddIcon />
					<AddText>Nova Refeição</AddText>
				</AddButton>
			</NewSection>
			<SectionList
				sections={data}
				keyExtractor={(item, index) => item.date.toLocaleDateString() + index}
				renderSectionHeader={({ section: { title } }) => (
					<ListHeaderItem>{format(title, "dd.MM.yy")}</ListHeaderItem>
				)}
				renderItem={({ item }) => (
					<MealItem data={item} onPress={() => handleMealDetail(item.id)} />
				)}
				showsVerticalScrollIndicator={false}
			/>
		</Container>
	);
}

const styles = StyleSheet.create({
	IconResultSection: {
		marginLeft: "auto",
	},
});
