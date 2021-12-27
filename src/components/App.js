import features from "../data/features.json";
import teamList from "../data/team-list.json";
// import PropTypes from "prop-types";
import { Section } from "./Sections/Section";
import { FeaturesList } from "./FeaturesList/FeaturesList";
import { TeamList } from "./TeamList/TeamList";

function App() {
  return (
    <>
      <Section>
        <FeaturesList features={features} />
      </Section>
      <Section>
        <TeamList teamList={teamList} />
      </Section>
    </>
  );
}

export default App;
