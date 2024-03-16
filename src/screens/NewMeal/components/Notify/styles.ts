import { Button, CenteredView } from "@styles/global";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	gap: 30px;
	background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export interface TitleProps {
	insideDiety: boolean;
}

export const Title = styled.Text<TitleProps>`
	${({ theme, insideDiety }) => css`
		color: ${insideDiety ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
		font-size: ${theme.FONT_SIZE.XL}px;
	`}
	font-weight: bold;
`;

export const HomeButton = styled(Button)`
	width: 200px;
`;

export const Header = styled(CenteredView)`
	gap: 8px;
`;

export const SubTitle = styled.Text`
	text-align: center;
`;
