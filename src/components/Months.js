import styled from "styled-components";

function width({index, year}){
  let startDayCount = Math.floor((new Date(year, index) - new Date(year)) /
        (24 * 60 * 60 * 1000)) + 1;
  let nextMonthStart = Math.floor((new Date(year, index + 1) - new Date(year)) /
  (24 * 60 * 60 * 1000)) +1;

  let weeksInMonth = Math.ceil(nextMonthStart/7) - Math.ceil(startDayCount/7)
  let monthWidth= (weeksInMonth *11) +  (weeksInMonth-1)*4;
  return `width: ${monthWidth}px;`
 
}

const MonthContainer = styled.div`
	display: flex;
	padding-left: 30px;
`;

const Month = styled.div`
	font-size: 11px;
	color: rgb(57 163 225);
	margin: 2px;
  ${props => width(props)}
`;

function Months({year}) {
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"June",
		"July",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	return (
		<MonthContainer>
			{months.map((month, index) => (
				<Month key={index} index={index} year={year}> {month} </Month>
			))}
		</MonthContainer>
	);
}

export default Months;
