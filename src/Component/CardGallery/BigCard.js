import React from "react";
import { Card, CardImg, CardText, CardBody } from "reactstrap";
import { SocialIcon } from "react-social-icons";
import "./BigCard.css";

const BigCard = (props) => {
  return (
    <div>
      <Card className="card-container card--expand">
        <h1 className= "card-title--expand">Discover the profiles of our Fullstack Junior Developers</h1>
        <CardImg className="avatar" src={props.basics.picture} alt={props.basics.name} />

        <CardBody className="card-body-wrapper">
          <CardText className= "card-text">Name:{props.basics.name}</CardText>
          <CardText>Email: {props.basics.email}</CardText>
          <CardText>Skills: </CardText>
          <CardText>Bio: {props.basics.summary}</CardText>
          <CardText>Interests: </CardText>
          <CardText>Latest Project Title: Technologies:</CardText>
          <div className="card-social__icons icons">
            {props.basics.profiles.map(profile => (
              <SocialIcon url={profile.url} />
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default BigCard;
