import { IMeal } from "src/interfaces";
import { CheckIcon, Container, MealName, TimeText } from "./styles";
import { format } from "date-fns";
import { TouchableOpacityProps } from "react-native";

interface IMealItemProps extends TouchableOpacityProps {
	data: IMeal;
}

export function MealItem({ data: meal, ...props }: IMealItemProps) {
	return (
		<Container {...props}>
			<TimeText>{format(meal.date, "HH:mm")}</TimeText>
			<MealName>{meal.name}</MealName>
			<CheckIcon checked={meal.isInside} />
		</Container>
	);
}
