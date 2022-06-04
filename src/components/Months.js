import styled from "styled-components";

const MonthContainer = styled.div`
	display: flex;
	padding-left: 30px;
`;

const Month = styled.div`
	font-size: 11px;
	color: rgb(57 163 225);
	margin: 2px;
  width: 54px; /* need to be changed*/
`;

function Months() {
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
				<Month key={index}>{month}</Month>
			))}
		</MonthContainer>
	);
}

export default Months;
