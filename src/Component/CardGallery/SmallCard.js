import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import MdMoreHoriz from 'react-icons/lib/md/more-horiz';

const SmallCard = (props) => {
  return (
    <div>
      <Card style={{width:"10%", height:"40%"}}>
        <CardImg top style={{width:"70%", position:"relative"}} src={props.basics.picture} alt={props.basics.name}/>
        <CardBody>
          <CardTitle style={{color:'black', textalign:"justify", textsize:"2%"}} ><em>{props.basics.name}</em></CardTitle>
          <CardSubtitle style={{color:'black', textalign:"justify", textsize:"2%"}}>{props.favorite_programming_languages}</CardSubtitle>
          <div>
            {props.basics.profiles.map(profile => (
              <SocialIcon url={profile.url} />
            ))}
            <MdMoreHoriz target="_blank" onClick={props.handleClick} color="#cccccc" size={20} />
          </div>

        </CardBody>
      </Card>
    </div>
  );
};

export default SmallCard;
