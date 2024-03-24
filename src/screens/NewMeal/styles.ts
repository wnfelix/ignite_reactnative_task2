import { DateTimePicker } from "@components/DateTimePicker";
import { Button, CenteredTouchableOpacity } from "@styles/global";
import { DotOutline } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
	background-color: ${({ theme }) => theme.COLORS.GRAY_500};
	flex: 1;
`;

export const RowSection = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

export const Form = styled.View`
	${({ theme }) => css`
		background-color: ${theme.COLORS.GRAY_700};
	`}
	border-radius: 20px;
	padding: 20px;
	height: fit-content;
	flex: 1;
	/* border: 1px solid red; */
`;

export const Text = styled.Text`
	color: ${({ theme }) => theme.COLORS.GRAY_200};
	margin-top: 15px;
	font-weight: bold;
`;

export const DateInput = styled(DateTimePicker)`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_200};
		border: 1px solid ${theme.COLORS.GRAY_500};
	`}
	border-radius: 10px;
	padding: 5px;
	align-items: center;
	justify-content: center;
	height: 35px;
`;

export const TextInput = styled.TextInput`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_200};
		border: 1px solid ${theme.COLORS.GRAY_500};
	`}
	border-radius: 10px;
	padding: 5px;
`;

export const ContainerData = styled.View`
	width: 48%;
`;

export const CheckButton = styled(CenteredTouchableOpacity)<{
	checked: boolean;
}>`
	${({ theme, checked }) => css`
		background-color: ${checked
			? theme.COLORS.GREEN_LIGHT
			: theme.COLORS.GRAY_600};
		border: 1px solid
			${checked ? theme.COLORS.GREEN_DARK : theme.COLORS.GRAY_600};
	`}
	flex-direction: row;
	width: 48%;
	height: 50px;
	margin-top: 10px;
	padding-right: 10px;
`;

export const CheckIcon = styled(DotOutline).attrs<{ checked: boolean }>(
	({ theme, checked }) => ({
		weight: "fill",
		size: 40,
		color: checked ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
	})
)`
	border: 1px solid ${({ theme }) => theme.COLORS.BLACK};
`;

export const AddButton = styled(Button)`
	margin-top: auto;
`;
