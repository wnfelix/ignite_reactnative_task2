import { CenteredTouchableOpacity, CenteredView } from "@styles/global";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "src/theme";
import styled, { css } from "styled-components/native";

interface IButtonProps {
	color: keyof typeof theme.COLORS;
}

export const Container = styled(SafeAreaView)`
	${({ theme }) => css`
		background-color: ${theme.COLORS.BLACK_25};
	`}
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Body = styled(CenteredView)`
	${({ theme }) => css`
		background-color: ${theme.COLORS.WHITE};
	`}
	margin: 0 20px;
	padding: 20px;
	border-radius: 10px;
	gap: 10px;
`;

export const ButtonSection = styled.View`
	flex-direction: row;
	gap: 5px;
	justify-content: flex-end;
	width: 100%;
`;

export const Button = styled(CenteredTouchableOpacity)<IButtonProps>`
	${({ theme, color }) => css`
		background-color: ${theme.COLORS[color]};
	`}
	height: 50px;
	border-width: 1px;
	border-style: solid;
	padding: 9px 20px;
`;
