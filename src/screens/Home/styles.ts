import { Button } from "@styles/global";
import { ArrowUpRight, Plus } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

interface IStyledProps {
	insideDiety: boolean;
}

export const Container = styled(SafeAreaView)`
	flex: 1;
	padding: 0 20px;
	gap: 20px;
`;

export const AvatarImage = styled.Image.attrs(() => ({
	source: { uri: "https://avatars.githubusercontent.com/u/14361940?v=4" },
}))`
	height: 40px;
	width: 40px;
	border-radius: 50px;
	border-color: ${({ theme }) => theme.COLORS.BLACK};
	border-width: 1px;
	border-style: solid;
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

export const NewSection = styled.View`
	gap: 10px;
`;

export const AddButton = styled(Button)`
	flex-direction: row;
	gap: 8px;
`;

export const AddIcon = styled(Plus).attrs(({ theme }) => ({
	size: 16,
	color: theme.COLORS.WHITE,
}))``;

export const AddText = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.WHITE};
		font-family: ${theme.FONT_FAMILY.BOLD};
	`}
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
