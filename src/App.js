import HeatMap from './components/HeatMap';
import styled from "styled-components";

const Header = styled.header`
  margin:10px;
`; 

function App() {
  const year = "2019";

  return (
    <div className="App">
      <Header>Finacial Transaction App ({year})</Header>
      <HeatMap year={year}/>
    </div>
  );
}

export default App;
