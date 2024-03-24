import { CenteredTouchableOpacity } from "@styles/global";
import styled, { css } from "styled-components/native";

export const Container = styled(CenteredTouchableOpacity)`
	border-color: ${({ theme }) => theme.COLORS.GRAY_400};
	border-width: 1px;
	border-style: solid;
	flex-direction: row;
	border-radius: 7px;
	padding: 12px 10px;
	height: 50px;
	gap: 8px;
	margin: 5px 0;
`;

export const MealName = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.MD}px;
		border-left-color: ${theme.COLORS.GRAY_400};
	`}
	border-left-width: 1px;
	padding-left: 10px;
	flex: 1;
`;

export const CheckIcon = styled.View<{ checked: boolean }>`
	${({ theme, checked }) => css`
		background-color: ${checked
			? theme.COLORS.GREEN_MID
			: theme.COLORS.RED_MID};
	`}
	height: 14px;
	width: 14px;
	border-radius: 50px;
`;

export const TimeText = styled.Text`
	font-size: ${({ theme }) => theme.FONT_SIZE.XSM}px;
	font-weight: bold;
`;
