import { Text as NativeText } from "react-native";
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
import { Header } from "./components/Header";
import { useState } from "react";
import { format } from "date-fns";
import { ColorText } from "@styles/global";
import { Notify } from "./components/Notify";

export function NewMeal() {
	const [dietyChecked, setDietyChecked] = useState(true);
	const [date, setDate] = useState(new Date());
	const [time, setTime] = useState(new Date());
	const [showResult, setShowResult] = useState(false);

	function handleCreateMeal() {
		setShowResult(true);
	}

	return (
		<Container>
			{showResult ? (
				<Notify insideDiety={dietyChecked} />
			) : (
				<>
					<Header />
					<Form>
						<Text>Nome</Text>
						<TextInput />
						<Text>Descrição</Text>
						<TextInput multiline numberOfLines={5} textAlignVertical="top" />
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
								Cadastrar refeição
							</ColorText>
						</AddButton>
					</Form>
				</>
			)}
		</Container>
	);
}
