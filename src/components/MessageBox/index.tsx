import { AlertButton, Modal } from "react-native";
import { Body, Button, Container, ButtonSection } from "./styles";
import { useEffect, useState } from "react";
import { ColorText } from "@styles/global";

interface IMessageBoxProps {
	text: string;
	buttons: AlertButton[];
	show: boolean;
}

export function MessageBox(props: IMessageBoxProps) {
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		setShowModal(props.show);
	}, [props.show]);

	return (
		<Modal
			animationType="slide"
			transparent
			visible={showModal}
			onRequestClose={() => setShowModal(false)}
		>
			<Container>
				<Body>
					<ColorText bold>{props.text}</ColorText>
					<ButtonSection>
						{props.buttons.map(btn => (
							<Button
								key={btn.text}
								color={btn.style === "cancel" ? "WHITE" : "BLACK"}
								onPress={() => btn.onPress?.(btn.text)}
							>
								<ColorText
									color={btn.style === "cancel" ? "BLACK" : "WHITE"}
									size="SM"
								>
									{btn.text}
								</ColorText>
							</Button>
						))}
					</ButtonSection>
				</Body>
			</Container>
		</Modal>
	);
}
