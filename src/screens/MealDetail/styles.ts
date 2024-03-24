import { Button, CenteredView } from "@styles/global";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { AlertButton } from "react-native";

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

export const Body = styled.View`
	${({ theme }) => css`
		background-color: ${theme.COLORS.WHITE};
	`}
	border-radius: 20px;
	padding: 20px;
	padding-top: 30px;
	height: fit-content;
	flex: 1;
`;

export const DescriptionText = styled.Text`
	font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
	justify-content: center;
`;

export const CheckIcon = styled.View<{ checked: boolean }>`
	${({ theme, checked }) => css`
		background-color: ${checked
			? theme.COLORS.GREEN_DARK
			: theme.COLORS.RED_DARK};
	`}
	height: 10px;
	width: 10px;
	border-radius: 50px;
`;

export const DescriptionSection = styled.View`
	gap: 7px;
`;

export const DateSection = styled.View`
	margin: 20px 0;
	gap: 7px;
`;

export const TagSection = styled(CenteredView)`
	background-color: ${({ theme }) => theme.COLORS.GRAY_600};
	border-radius: 25px;
	flex-direction: row;
	padding: 10px 15px;
	gap: 5px;
	margin-right: auto;
`;

export const ButtonSection = styled.View`
	flex: 1;
	justify-content: flex-end;
	flex-direction: column;
	gap: 10px;
`;

const BaseButton = styled(Button)`
	flex-direction: row;
	gap: 12px;
`;

export const EditButton = styled(BaseButton)``;

export const DeleteButton = styled(BaseButton)`
	${({ theme }) => css`
		background-color: ${theme.COLORS.WHITE};
		border-color: ${theme.COLORS.BLACK};
	`}
	border-width: 1px;
	border-style: solid;
`;

export const EditIcon = styled(PencilSimpleLine).attrs(({ theme }) => ({
	size: 16,
	color: theme.COLORS.WHITE,
}))``;

export const DeleteIcon = styled(Trash).attrs(() => ({
	size: 16,
}))``;

export const ModalSection = styled(CenteredView)`
	${({ theme }) => css`
		background-color: ${theme.COLORS.WHITE};
		/* opacity: 1; */
	`}
	align-self: center;
	justify-self: center;
	border-radius: 20px;
`;

// export const CancelButton = styled.View<AlertButton>`
// 	${({ theme }) => css`
// 		background-color: ${theme.COLORS.WHITE};
// 		border-color: ${theme.COLORS.BLACK};
// 	`}
// 	border-radius: 10px;
// 	border-width: 1px;
// 	border-style: solid;
// `;
