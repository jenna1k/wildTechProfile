import React from "react";
import { Card, CardImg, CardText, CardBody } from "reactstrap";
import { SocialIcon } from "react-social-icons";
import "./BigCard.css";

const BigCard = props => {
  return (
    <div>
      <Card className="card-container">
        <CardImg className="avatar" src={props.basics.picture} alt="No Img" />

        <CardBody className="card-body-text">
          <CardText>Name:{props.basics.name}</CardText>
          <CardText>Email: {props.basics.email}</CardText>

          <div className="skills">
            <p>Skills: </p>
            {props.favorite_programming_languages.toString(favorite => (
              <CardText>
                {favorite
                  .charAt(0)
                  .toUpperCase()
                  .slice(1)}
              </CardText>
            ))}
          </div>

          <CardText>Bio: {props.basics.summary}</CardText>

          <div className="interests">
            {props.interests.map(interest => (
              <CardText>Passionate about: {interest.name}</CardText>
            ))}
          </div>

          <CardText>Latest Project Title:</CardText>
          <CardText>Technologies:</CardText>

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
