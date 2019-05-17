import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import MdMoreHoriz from 'react-icons/lib/md/more-horiz';
import 'SmallCard.css';

const SmallCard = (props) => {
  return (
    <div>
      <Card className="avatar-card">
        <CardImg top className="avatar-card-img" src={props.basics.picture} alt={props.basics.name}/>
        <CardBody>
          <CardTitle className="avatar-title" ><em>{props.basics.name}</em></CardTitle>
          <CardSubtitle className="avatar-subtitle">{props.favorite_programming_languages}</CardSubtitle>
          <div>
            {props.basics.profiles.map(profile => (
              <SocialIcon url={profile.url} />
            ))}
            <MdMoreHoriz target="_blank" onClick={props.handleClick} size={20} />
          </div>

        </CardBody>
      </Card>
    </div>
  );
};

export default SmallCard;
