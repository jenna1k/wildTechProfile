import React from "react";
import { Card, CardImg, CardText, CardBody } from "reactstrap";
import { SocialIcon } from "react-social-icons";
import "./BigCard.css";

const BigCard = props => {
  return (
    <div>
      <Card className="card-container">
        <CardImg className="avatar" src={props.basics.picture} alt={props.basics.name} />

        <CardBody className="card-body-text">
          <CardText>Name:{props.basics.name}</CardText>
          <CardText>Email: {props.basics.email}</CardText>
          <CardText>Skills: </CardText>
          <CardText>Bio: {props.basics.summary}</CardText>
          <CardText>Interests: </CardText>
          <CardText>Latest Project Title: Technologies:</CardText>
          <div className="icons">
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
