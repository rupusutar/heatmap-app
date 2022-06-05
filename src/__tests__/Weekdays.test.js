import { render } from "@testing-library/react";
import WeekDays from "../components/WeekDays";
import { weekDays } from "../util/util";

test("renders seven weekdays on UI", () => {
	const { getByText } = render(<WeekDays />);
	weekDays.forEach((weekday) => expect(getByText(weekday)).toBeInTheDocument());
});
