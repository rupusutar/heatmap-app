import styled from "styled-components";

const WeekdaysContainer = styled.div`
	display: inline-flex; /* to make cells place at equal distance horizontally*/
	flex-direction: column;
	width: 30px;
  box-sizing: border-box;
`;

const WeekDay = styled.div`
  font-size: 10px;
  height: 11px;
  margin: 2px;
  vertical-align: middle;
  box-sizing: border-box;
`;

function WeekDays() {
	const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	return (
		<WeekdaysContainer>
			{weekDays.map((weekDay, index) => (
				<WeekDay key={index}>{weekDay}</WeekDay>
			))}
		</WeekdaysContainer>
	);
}

export default WeekDays;
