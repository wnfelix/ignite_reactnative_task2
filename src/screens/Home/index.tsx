import { Image, SectionList, Text, View } from "react-native";
import {
	AvatarImage,
	Container,
	Counter,
	CounterSection,
	Header,
	IconDetail,
	ListHeaderItem,
} from "./styles";
import logo from "@assets/logo.png";
import { useMemo, useState } from "react";
import { formatNumber } from "@utils/numberUtils";
import { Button, ColorText } from "@styles/global";
import { MealItem } from "./components/MealItem";
import { IMeal } from "src/interfaces";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";

export function Home() {
	const navigator = useNavigation();

	const [meals, setMeals] = useState<IMeal[]>([
		{
			date: new Date(),
			description: "hoje eu fui bem",
			name: "X-Tudo",
			isInside: false,
		},
		{
			date: new Date("2024-3-20T20:50:00"),
			description: "um prato tradicional delicioso",
			name: "Arroz e feijão",
			isInside: true,
		},
		{
			date: new Date("2024-3-19T09:2:00"),
			description: "café da manhã tradicional",
			name: "Pão com torrada e tome seco",
			isInside: false,
		},
	]);

	const dietyPercent = useMemo(
		() => (meals.filter(i => i.isInside).length * 100) / meals.length,
		[meals]
	);

	const data = useMemo(() => {
		const dates = meals
			.filter(
				(v, i, a) =>
					a.findIndex(r => r.date.toDateString() === v.date.toDateString()) ===
					i
			)
			.map(i => i.date);

		return dates.map(item => ({
			title: item,
			data: meals.filter(m => m.date.toDateString() === item.toDateString()),
		}));
	}, [meals]);

	const limitGoodDiety = dietyPercent >= 50;

	function handleAddNewMeal() {
		navigator.navigate("newMeal");
	}

	return (
		<Container>
			<Header>
				<Image source={logo} />
				<AvatarImage />
			</Header>
			<CounterSection insideDiety={limitGoodDiety}>
				<IconDetail insideDiety={limitGoodDiety} />
				<Counter>{`${formatNumber(dietyPercent, 2)}%`}</Counter>
				<Text>das refeições dentro da dieta</Text>
			</CounterSection>
			<View>
				<Text>Refeições</Text>
				<Button onPress={handleAddNewMeal}>
					<ColorText color="WHITE">+ Nova Refeição</ColorText>
				</Button>
			</View>
			<SectionList
				sections={data}
				keyExtractor={(item, index) => item.date.toLocaleDateString() + index}
				renderSectionHeader={({ section: { title } }) => (
					<ListHeaderItem>{format(title, "dd.MM.yy")}</ListHeaderItem>
				)}
				renderItem={({ item }) => <MealItem data={item} />}
			/>
		</Container>
	);
}
