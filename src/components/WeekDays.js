import styled from "styled-components";
import { weekDays, dayBoxHeight, dayBoxMargin } from "../util/util";

const WeekdaysContainer = styled.div`
	display: inline-flex;
	flex-direction: column;
	width: 30px;
  box-sizing: border-box;
`;

const WeekDay = styled.div`
  font-size: 10px;
  height: ${dayBoxHeight}px;
  margin: ${dayBoxMargin}px;
  vertical-align: middle;
  box-sizing: border-box;
`;

function WeekDays() {
	return (
		<WeekdaysContainer>
			{weekDays.map((weekDay, index) => (
				<WeekDay key={index}>{weekDay}</WeekDay>
			))}
		</WeekdaysContainer>
	);
}

export default WeekDays;
