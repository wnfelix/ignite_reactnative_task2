import { TouchableOpacity, View } from "react-native";
import { Container, IconBack, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaViewProps } from "react-native-safe-area-context";

interface ITitleHeaderProps extends SafeAreaViewProps {
	title: string;
	isDietyInside?: boolean;
}

export function TitleHeader({
	title,
	isDietyInside,
	...props
}: ITitleHeaderProps) {
	const navigator = useNavigation();

	function handleBack() {
		navigator.goBack();
	}

	return (
		<Container
			{...props}
			color={
				isDietyInside === true
					? "GREEN_LIGHT"
					: isDietyInside === false
					? "RED_LIGHT"
					: "GRAY_500"
			}
		>
			<TouchableOpacity onPress={handleBack}>
				<IconBack />
			</TouchableOpacity>
			<Title>{title}</Title>
		</Container>
	);
}
