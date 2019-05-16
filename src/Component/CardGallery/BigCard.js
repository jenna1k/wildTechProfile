import React from "react";
import {
  Card,
  Button,
  CardLink,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col
} from "reactstrap";
import { SocialIcon } from "react-social-icons";

const BigCard = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardImg width="50%" src={props.basics.picture} alt="Image {props.basics.name}" />
        </CardBody>
        <CardTitle>Name:{props.basics.name}</CardTitle>
        <CardSubtitle>Email: {props.basics.email}</CardSubtitle>
        <CardBody>
          <CardText>Skills: {props.favorite_programming_languages}</CardText>
          <CardText>Bio: {props.basics.summary}</CardText>
          <CardText>Interests: {props.interests.name}</CardText>
          <CardText>
            Latest Project: Title: {props.projects.title} Technologies:{" "}
            {props.projects.technologies}
          </CardText>
          <SocialIcon url={props.basics.profiles[0].url} />
          <SocialIcon url={props.basics.profiles[1].url} />
        </CardBody>
      </Card>
    </div>
  );
};

export default BigCard;
