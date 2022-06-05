import styled from "styled-components";
import { dayBoxHeight, dayBoxWidth, dayBoxMargin } from "../util/util";

const CalenderContainer = styled.div`
	width: ${(2 * dayBoxMargin + dayBoxWidth) * 53}px;
	display: inline-flex;
	flex-direction: column;
	flex-wrap: wrap;
	height: ${(2 * dayBoxMargin + dayBoxHeight) * 7}px;
`;

const PaddingCells = styled.div`
	height: ${(props) =>
		props.numberOfDays * (2 * dayBoxMargin + dayBoxHeight)}px;
	width: ${dayBoxWidth}px;
`;

const Day = styled.div`
	background-color: rgba(0, 0, 0, 0.05);
	height: ${dayBoxHeight}px;
	width: ${dayBoxWidth}px;
	border: 1px solid rgba(27, 31, 35, 0.06);
	box-sizing: border-box;
	margin: ${dayBoxMargin}px;
`;

function CalenderDays({ year }) {
	const totalDays =
		(year % 4 === 0 && year % 100 > 0) || year % 400 === 0 ? 366 : 365;
	const firstDayInYear = new Date(year).getDay();
	let days = Array.from(new Array(totalDays));

	return (
		<CalenderContainer>
			<PaddingCells numberOfDays={firstDayInYear} />
			{days.map((_, index) => (
				<Day key={index} />
			))}
		</CalenderContainer>
	);
}

export default CalenderDays;
