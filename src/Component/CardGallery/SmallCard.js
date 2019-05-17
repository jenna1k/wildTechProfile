<<<<<<< HEAD
import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import PopUpButton from "./PopUpButton";
import BigCard from "./BigCard";
=======
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import MdMoreHoriz from 'react-icons/lib/md/more-horiz';
import './SmallCard.css';
>>>>>>> d0d52a3ec7e3131e19a48d9bcde722c97bb8409a

const SmallCard = props => {
  return (
    <div>
<<<<<<< HEAD
      <Card style={{ width: "10%", height: "40%" }}>
        <CardImg top style={{ width: "70%", position: "relative" }} src="" alt="" />
        <CardBody>
          <CardTitle style={{ color: "black", textalign: "justify", textsize: "5%" }}>
            <em />
          </CardTitle>
          <CardSubtitle style={{ color: "black", textalign: "justify", textsize: "5%" }} />
          <Button target="_blank" href="">
            Contact
          </Button>

          <PopUpButton />
=======
      <Card className="avatar-card">
        <CardImg className="avatar-card-img" src={props.basics.picture} alt={props.basics.name}/>
        <CardBody>
          <CardTitle className="avatar-title" ><em>{props.basics.name}</em></CardTitle>
          <CardSubtitle className="avatar-subtitle">{props.favorite_programming_languages}</CardSubtitle>
          <div>
            {props.basics.profiles.map(profile => (
              <SocialIcon className="avatar-social-icon" url={profile.url} />
            ))}
            <MdMoreHoriz className="avatar-more-icon"target="_blank" onClick={props.handleClick} size={20} />
          </div>

>>>>>>> d0d52a3ec7e3131e19a48d9bcde722c97bb8409a
        </CardBody>
      </Card>
    </div>
  );
};

export default SmallCard;
