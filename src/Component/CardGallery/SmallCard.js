import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';
import PopUpButton from './PopUpButton';
import './SmallCard.css';

const SmallCard = props => {
  return (
    <Card className="avatar-card">
      <CardImg className="avatar-card-img" src={props.basics.picture} alt={props.basics.name} />
      <CardBody>
        <CardTitle className="avatar-title">
          <em>{props.basics.name}</em>
        </CardTitle>
        <CardSubtitle className="avatar-subtitle">
          Skills: {props.favorite_programming_languages.join(", ")}
        </CardSubtitle>
        <div>
          {props.basics.profiles.map(profile => (
            <SocialIcon key={profile.network} className="avatar-social-icon" url={profile.url} />
          ))}
          {/* <MdMoreHoriz className="avatar-more-icon"target="_blank" onClick={props.handleClick} size={20} /> */}
          <PopUpButton {...props} />
        </div>
      </CardBody>
    </Card>
  );
};

export default SmallCard;
