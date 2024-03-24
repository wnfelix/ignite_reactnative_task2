import { useCallback, useState } from "react";
import { Alert, Modal, Text } from "react-native";
import { format } from "date-fns";
import {
	useFocusEffect,
	useNavigation,
	useRoute,
} from "@react-navigation/native";
import {
	Body,
	ButtonSection,
	CheckIcon,
	Container,
	DeleteButton,
	DescriptionText,
	EditButton,
	DeleteIcon,
	EditIcon,
	TagSection,
	DateSection,
	DescriptionSection,
	ModalSection,
} from "./styles";
import { TitleHeader } from "@components/TitleHeader";
import { IMeal } from "src/interfaces";
import { mealGetById } from "@storage/meal/mealGetById";
import { Button, ColorText, ColorView } from "@styles/global";
import { mealDeleteById } from "@storage/meal/mealDelete";
import { MessageBox } from "@components/MessageBox";

interface IRouteParams {
	id: string;
}

export function MealDetail() {
	const navigator = useNavigation();
	const route = useRoute();
	const { id } = route.params as IRouteParams;
	const [meal, setMeal] = useState<IMeal>({ date: new Date() } as IMeal);
	const [showModal, setShowModal] = useState(false);

	useFocusEffect(
		useCallback(() => {
			mealGetById(id).then(result => {
				setMeal(result);
			});
		}, [])
	);

	function handleEditMeal() {
		navigator.navigate("edit", { id });
	}

	function handleDeleteMeal() {
		Alert.alert("", "Deseja realmente excluir o registro da refeição?", [
			{
				text: "Cancelar",
				style: "cancel",
			},
			{
				text: "Sim, excluir",
				onPress: deleteMeal,
			},
		]);
	}

	async function deleteMeal() {
		await mealDeleteById(id);
		navigator.navigate("home");
	}

	return (
		<Container insideDiety={meal.isInside}>
			<MessageBox
				text="Deseja realmente excluir o registro da refeição?"
				show={showModal}
				buttons={[
					{
						text: "Cancelar",
						style: "cancel",
						onPress: () => setShowModal(false),
					},
					{
						text: "Sim, excluir",
						onPress: deleteMeal,
					},
				]}
			/>
			<TitleHeader title="Refeição" isDietyInside={meal.isInside} />
			<Body>
				<DescriptionSection>
					<ColorText bold size="LG">
						{meal.name}
					</ColorText>
					<DescriptionText>{meal.description}</DescriptionText>
				</DescriptionSection>
				<DateSection>
					<ColorText bold size="XSM">
						Data e hora
					</ColorText>
					<Text>{format(meal.date, "dd/MM/yyyy 'às' HH:mm")}</Text>
				</DateSection>
				<TagSection>
					<CheckIcon checked={meal.isInside} />
					<Text>{meal.isInside ? "dentro da dieta" : "fora da dieta"}</Text>
				</TagSection>
				<ButtonSection>
					<EditButton onPress={handleEditMeal}>
						<EditIcon />
						<ColorText color="WHITE" size="SM" bold>
							Editar Refeição
						</ColorText>
					</EditButton>
					<DeleteButton onPress={() => setShowModal(true)}>
						<DeleteIcon />
						<ColorText bold>Excluir Refeição</ColorText>
					</DeleteButton>
				</ButtonSection>
			</Body>
		</Container>
	);
}
