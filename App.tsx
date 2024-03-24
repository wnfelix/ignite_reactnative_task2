import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import { Routes } from "src/routes";
import {
	useFonts,
	Nunito_400Regular,
	Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { Loading } from "@components/Loading";

export default function App() {
	const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

	return (
		<ThemeProvider theme={theme}>
			<StatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent
			/>
			{!fontsLoaded ? <Loading /> : <Routes />}
		</ThemeProvider>
	);
}
