import styled from "styled-components";

const CalenderContainer = styled.div`
  width: 795px;  /* (15 * 53weeks) */
	display: inline-flex;
	flex-direction: column;
	flex-wrap: wrap;
	height: 105px; /* 15 * 7days  */
`;

const PaddingCells = styled.div`
	height: ${(props) => props.numberOfDays * 15}px;
	width: 11px;
`;

const Day = styled.div`
	background-color: rgba(0, 0, 0, 0.05);
	height: 11px;
	width: 11px;
	border: 1px solid rgba(27, 31, 35, 0.06);
	box-sizing: border-box;
	margin: 2px;
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
