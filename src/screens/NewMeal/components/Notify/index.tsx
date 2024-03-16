import { Container, Header, HomeButton, SubTitle, Title } from "./styles";

import mealOk from "@assets/mealok.png";
import mealNotOk from "@assets/mealnotok.png";
import { Image } from "react-native";
import { ColorText } from "@styles/global";
import { useNavigation } from "@react-navigation/native";

interface INotifyProps {
	insideDiety: boolean;
}

export function Notify(props: INotifyProps) {
	const navigation = useNavigation();

	function handleGoHome() {
		navigation.navigate("newMeal");
	}

	return (
		<Container>
			<Header>
				<Title insideDiety={props.insideDiety}>
					{props.insideDiety ? "Continue assim!" : "Que pena!"}
				</Title>

				{props.insideDiety ? (
					<SubTitle>
						Você continua <ColorText bold>dentro da dieta</ColorText>. Muito
						bem!
					</SubTitle>
				) : (
					<SubTitle>
						Você <ColorText bold>saiu da dieta</ColorText> dessa vez, mas
						continue se esforçando e não desista!
					</SubTitle>
				)}
			</Header>
			{props.insideDiety ? (
				<Image source={mealOk} />
			) : (
				<Image source={mealNotOk} />
			)}
			<HomeButton onPress={handleGoHome}>
				<ColorText color="WHITE">Ir para a página inicial</ColorText>
			</HomeButton>
		</Container>
	);
}
