import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "src/theme";
import styled, { css } from "styled-components/native";

interface IContainerStyleProps {
	color: keyof typeof theme.COLORS;
}
export const Container = styled.View<IContainerStyleProps>`
	${({ theme, color }) => css`
		background-color: ${theme.COLORS[color]};
	`}
	padding: 25px;
	align-items: center;
	flex-direction: row;
`;

export const Title = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.MD}px;
		color: ${theme.COLORS.GRAY_100};
	`}
	font-weight: bold;
	flex: 1;
	text-align: center;
`;

export const IconBack = styled(ArrowLeft).attrs(({ theme }) => ({
	size: 24,
	color: theme.COLORS.GRAY_200,
}))``;
