import { useState } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import {
	DateTimePickerAndroid,
	DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

export type PickerMode = "date" | "time";
export interface DateTimePickerProps extends TouchableOpacityProps {
	mode?: PickerMode;
	is24Hours?: boolean;
	onChange?: (selectedDate: Date) => void;
}

export function DateTimePicker({
	onChange,
	mode = "date",
	is24Hours = true,
	...props
}: DateTimePickerProps) {
	const [date, setDate] = useState(new Date());

	const handleOnChange = (_event: DateTimePickerEvent, selectedDate?: Date) => {
		setDate(selectedDate ?? new Date());
		if (selectedDate) onChange?.(selectedDate);
	};

	const showDatepicker = () => {
		DateTimePickerAndroid.open({
			value: date,
			onChange: handleOnChange,
			mode: mode,
			is24Hour: is24Hours,
		});
	};

	return (
		<TouchableOpacity {...props} onPress={showDatepicker}></TouchableOpacity>
	);
}
