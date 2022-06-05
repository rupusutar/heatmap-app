import HeatMap from "./components/HeatMap";
import styled from "styled-components";
import data from "./transactions.json";
import { useEffect, useState } from "react";
import getTransformeddata from "./util/dataTransaformation";

const Header = styled.header`
	margin: 10px;
`;

function App() {
	const [year, setYear] = useState("2019"); //can be set to current year
	const [finData, setFinData] = useState([]);

	useEffect(() => {
		const transaformedData = getTransformeddata(data);
		setYear(transaformedData.year);
		setFinData(transaformedData.transactions);
	}, []);

	return (
		<div className="App">
			<Header>Finacial Transaction App ({year})</Header>
			<HeatMap year={year} data={finData} />
		</div>
	);
}

export default App;
