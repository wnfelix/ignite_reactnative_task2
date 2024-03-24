import theme from "src/theme";
import styled, { css } from "styled-components/native";

export const CenteredTouchableOpacity = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	border-radius: 10px;
`;

export const ColorText = styled.Text<{
	color?: keyof typeof theme.COLORS;
	size?: keyof typeof theme.FONT_SIZE;
	bold?: boolean;
}>`
	${({ theme, color = "BLACK", bold = false, size = "MD" }) => css`
		color: ${theme.COLORS[color]};
		font-weight: ${bold ? "bold" : "normal"};
		font-size: ${theme.FONT_SIZE[size]}px;
		font-family: ${bold ? theme.FONT_FAMILY.REGULAR : theme.FONT_FAMILY.BOLD};
	`}
`;

export const ColorView = styled.View<{
	color?: keyof typeof theme.COLORS;
}>`
	${({ theme, color = "WHITE" }) => css`
		background-color: ${theme.COLORS[color]};
	`}
	border-radius: 20px;
`;

export const Button = styled(CenteredTouchableOpacity)`
	${({ theme }) => css`
		background-color: ${theme.COLORS.BLACK};
	`}
	height: 60px;
`;

export const CenteredView = styled.View`
	align-items: center;
	justify-content: center;
`;
