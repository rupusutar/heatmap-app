import styled from "styled-components";
import { calculateWidth, months } from "../util/util";

const MonthContainer = styled.div`
	display: flex;
	padding-left: 30px;
`;

const Month = styled.div`
	font-size: 11px;
	color: rgb(57 163 225);
	margin: 2px;
  ${props => calculateWidth(props)}
`;

function Months({year}) {

	return (
		<MonthContainer>
			{months.map((month, index) => (
				<Month key={index} index={index} year={year}> {month} </Month>
			))}
		</MonthContainer>
	);
}

export default Months;
