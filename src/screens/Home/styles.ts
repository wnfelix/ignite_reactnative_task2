import { ArrowUpRight } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

interface IStyledProps {
	insideDiety: boolean;
}

export const Container = styled.View`
	flex: 1;
	padding: 20px;
	gap: 20px;
`;

export const AvatarImage = styled.Image.attrs(() => ({
	source: { uri: "https://avatars.githubusercontent.com/u/14361940?v=4" },
}))`
	height: 40px;
	width: 40px;
	border-radius: 50px;
	border: 1px solid ${({ theme }) => theme.COLORS.BLACK};
`;

export const Header = styled.View`
	margin-top: 30px;
	flex-direction: row;
	justify-content: space-between;
`;

export const CounterSection = styled.View<IStyledProps>`
	${({ theme, insideDiety }) => css`
		background-color: ${insideDiety
			? theme.COLORS.GREEN_LIGHT
			: theme.COLORS.RED_LIGHT};
	`}
	border-radius: 10px;
	height: 110px;
	padding: 5px;
	align-items: center;
`;

export const IconDetail = styled(ArrowUpRight).attrs<IStyledProps>(
	({ theme, insideDiety }) => ({
		size: 24,
		color: insideDiety ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
	})
)`
	margin-left: auto;
`;

export const Counter = styled.Text`
	font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
	font-weight: bold;
`;

export const ListHeaderItem = styled.Text`
	font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
	font-weight: bold;
	margin-top: 15px;
`;
