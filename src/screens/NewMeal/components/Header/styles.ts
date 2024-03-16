import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
	background-color: ${({ theme }) => theme.COLORS.GRAY_500};
	padding: 20px;
	align-items: center;
`;

export const Title = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.MD}px;
		color: ${theme.COLORS.GRAY_100};
		font-weight: bold;
	`}
`;
