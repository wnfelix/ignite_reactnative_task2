import { useCallback, useState } from "react";
import { Alert, Text as NativeText } from "react-native";
import { format, set } from "date-fns";
import GenerateUUID from "react-native-uuid";
import {
	Form,
	Container,
	ContainerData,
	RowSection,
	Text,
	TextInput,
	CheckButton,
	CheckIcon,
	AddButton,
	DateInput,
} from "./styles";
import { Notify } from "./components/Notify";
import { ColorText } from "@styles/global";
import { mealCreateEdit } from "@storage/meal/mealCreateEdit";
import { handleError } from "@utils/AppError";
import { TitleHeader } from "@components/TitleHeader";
import { IMeal } from "src/interfaces";
import {
	useFocusEffect,
	useNavigation,
	useRoute,
} from "@react-navigation/native";
import { mealGetById } from "@storage/meal/mealGetById";

interface IRouteParams {
	id: string;
}

export function NewMeal() {
	const navigator = useNavigation();
	const route = useRoute();
	const id = (route.params as IRouteParams)?.id;

	const [dietyChecked, setDietyChecked] = useState(true);
	const [date, setDate] = useState(new Date());
	const [time, setTime] = useState(new Date());
	const [showResult, setShowResult] = useState(false);
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	useFocusEffect(
		useCallback(() => {
			if (id) {
				mealGetById(id).then(result => {
					setDietyChecked(result.isInside);
					setDate(new Date(result.date));
					setTime(new Date(result.date));
					setName(result.name);
					setDescription(result.description);
				});
			}
		}, [])
	);

	async function handleCreateMeal() {
		const { v4: uuid } = GenerateUUID;

		try {
			const entity: IMeal = {
				id: id ?? uuid().toString(),
				name,
				description,
				date: set(date, { hours: time.getHours(), minutes: time.getMinutes() }),
				isInside: dietyChecked,
			};

			await mealCreateEdit(entity);

			if (id) {
				navigator.goBack();
			} else {
				setShowResult(true);
			}
		} catch (error) {
			handleError(error, "não foi possível criar uma nova refeição", message =>
				Alert.alert("Nova refeição", message)
			);
		}
	}

	return (
		<Container>
			{showResult ? (
				<Notify insideDiety={dietyChecked} />
			) : (
				<>
					<TitleHeader title="Nova refeição" />
					<Form>
						<Text>Nome</Text>
						<TextInput onChangeText={setName} value={name} />
						<Text>Descrição</Text>
						<TextInput
							multiline
							numberOfLines={5}
							textAlignVertical="top"
							onChangeText={setDescription}
							value={description}
						/>
						<RowSection>
							<ContainerData>
								<Text>Data</Text>
								<DateInput onChange={setDate}>
									<NativeText>{format(date, "dd/MM/yyyy")}</NativeText>
								</DateInput>
							</ContainerData>
							<ContainerData>
								<Text>Hora</Text>
								<DateInput onChange={setTime} mode="time">
									<NativeText>{format(time, "HH:mm")}</NativeText>
								</DateInput>
							</ContainerData>
						</RowSection>

						<Text>Está dentro do dieta?</Text>
						<RowSection>
							<CheckButton
								checked={dietyChecked}
								onPress={() => setDietyChecked(true)}
							>
								<CheckIcon checked={true} />
								<ColorText bold>Sim</ColorText>
							</CheckButton>
							<CheckButton
								checked={!dietyChecked}
								onPress={() => setDietyChecked(false)}
							>
								<CheckIcon checked={false} />
								<ColorText bold>Não</ColorText>
							</CheckButton>
						</RowSection>
						<AddButton onPress={handleCreateMeal}>
							<ColorText color={"WHITE"} bold>
								{id ? "Salvar Alterações" : "Cadastrar refeição"}
							</ColorText>
						</AddButton>
					</Form>
				</>
			)}
		</Container>
	);
}
