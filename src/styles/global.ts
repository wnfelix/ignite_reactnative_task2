import theme from "src/theme";
import styled, { css } from "styled-components/native";

export const CenteredTouchableOpacity = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	border-radius: 10px;
`;

export const ColorText = styled.Text<{
	color?: keyof typeof theme.COLORS;
	bold?: boolean;
}>`
	${({ theme, color = "BLACK", bold = false }) => css`
		color: ${theme.COLORS[color]};
		font-weight: ${bold ? "bold" : "normal"};
	`}
`;

export const Button = styled(CenteredTouchableOpacity)`
	${({ theme }) => css`
		background-color: ${theme.COLORS.BLACK};
		color: ${theme.COLORS.WHITE};
	`}
	height: 60px;
`;

export const CenteredView = styled.View`
	align-items: center;
	justify-content: center;
`;
