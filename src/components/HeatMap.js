import WeekDays from "./WeekDays";
import CalenderDays from "./CalenderDays";
import Months from "./Months";
import styled from "styled-components";

const MapContainer = styled.div`
  border: 1px solid gray;
  display: inline-block;
  box-sizing: border-box;
  padding: 10px;
  margin-left: 10px;
`;

const Wrapper= styled.div`
  display: inline-flex;
`;

export default function HeatMap({ year }) {
	return (
		<MapContainer>
			<Wrapper>
				<WeekDays />
				<CalenderDays year={year} />
			</Wrapper>
			<Months />
		</MapContainer>
	);
}
