import features from "../data/features.json";
// import PropTypes from "prop-types";
import { Section } from "./Sections/Section";
import { FeaturesList } from "./FeaturesList/FeaturesList";

function App() {
  return (
    <Section>
      <FeaturesList features={features} />
    </Section>
  );
}

export default App;
