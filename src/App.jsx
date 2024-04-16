import "./App.css";
import Kapthcha from "./components/BigSections/Kapthcha";
import BlockMap from "./components/BlockMap/BlockMap";
import FourBlock from "./components/ChetvertyiBlock/FourBlock";
import Header from "./components/Header";
import None from "./components/None";
import Preview from "./components/Preview";
import OneClick from "./components/SecondSections/OneClick";
import Section from "./components/Section";
import SectionZetIndex from "./components/SectionZetIndex";
import NotBlurBlock from "./components/TretiyBlock/NotBlurBlock";
function App() {
	return (
		<div>
			<Header />
			<Preview />
			<None/>
			<Section />
			<SectionZetIndex/>
			<OneClick/>
			<NotBlurBlock/>
			<FourBlock/>
			<BlockMap/>
			<Kapthcha/>
		</div>
	);
}

export default App;
