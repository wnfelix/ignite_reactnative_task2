import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "src/theme";
import styled, { css } from "styled-components/native";

interface IStyledProps {
	insideDiety: boolean;
}

export const Container = styled(SafeAreaView)<IStyledProps>`
	flex: 1;
	${({ theme, insideDiety }) => css`
		background-color: ${insideDiety
			? theme.COLORS.GREEN_LIGHT
			: theme.COLORS.RED_LIGHT};
	`}
`;

export const CounterSection = styled.View`
	border-radius: 10px;
	height: 110px;
	padding: 10px 0 0 10px;
	align-items: center;
`;

export const IconDetail = styled(ArrowLeft).attrs<IStyledProps>(
	({ theme, insideDiety }) => ({
		size: 24,
		color: insideDiety ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
	})
)`
	margin-right: auto;
`;

export const Counter = styled.Text`
	font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
	font-weight: bold;
`;

export const Body = styled.View`
	${({ theme }) => css`
		background-color: ${theme.COLORS.GRAY_700};
	`}
	border-radius: 20px;
	padding: 20px;
	padding-top: 30px;
	height: fit-content;
	flex: 1;
	gap: 15px;
	align-items: center;
`;

export const ColorView = styled.View<{
	color?: keyof typeof theme.COLORS;
	width?: string;
}>`
	${({ theme, color = "WHITE", width = "100%" }) => css`
		background-color: ${theme.COLORS[color]};
		width: ${width};
	`}
	border-radius: 10px;
	padding: 15px;
	height: 100px;
	align-items: center;
	justify-content: center;
`;

export const ResultSectionDifference = styled.View`
	flex-direction: row;
	justify-content: space-between;
	gap: 15px;
`;

export const ValueResultText = styled.Text`
	font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
	font-weight: bold;
`;

export const LabelResultText = styled.Text`
	text-align: center;
`;
