import { IMeal } from "src/interfaces";
import { CheckIcon, Container, MealName, TimeText } from "./styles";
import { format } from "date-fns";

interface IMealItemProps {
	data: IMeal;
}

export function MealItem({ data: meal, ...props }: IMealItemProps) {
	return (
		<Container>
			<TimeText>{format(meal.date, "HH:mm")}</TimeText>
			<MealName>{meal.name}</MealName>
			<CheckIcon checked={meal.isInside} />
		</Container>
	);
}
