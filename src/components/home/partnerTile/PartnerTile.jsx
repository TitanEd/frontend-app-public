/* eslint-disable react/prop-types */
import './PartnerTile.scss';

const PartnerTile = ({ name }) => (
  <div className="home-partner-tile">
    <span className="home-partner-tile__name">{name}</span>
  </div>
);

export default PartnerTile;
