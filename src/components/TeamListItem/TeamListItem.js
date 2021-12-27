import PropTypes from "prop-types";
import { SocialList } from "../SocialList/SocialList";

export const TeamListItem = ({ avatar, name, profession, links }) => {
  return (
    <>
      <img alt={name} src={avatar} />
      <h3>{name}</h3>
      <p>{profession}</p>
      <>
        <SocialList links={links} />
      </>
    </>
  );
};
TeamListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  links: PropTypes.shape({
    instagram: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
  }).isRequired,
};
