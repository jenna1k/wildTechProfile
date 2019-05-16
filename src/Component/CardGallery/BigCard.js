import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';

const BigCard = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardImg
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Card image cap"
          />
        </CardBody>
        <CardTitle>Name: {props.basics.name}</CardTitle>
        <CardSubtitle>Email: {props.email}</CardSubtitle>
        <CardBody>
          {/* <CardText>Skills: {props.favorite_programming_languages}</CardText>
          <CardText>Bio: {props.bio}</CardText>
          <CardText>Interests: {props.interests.name}</CardText>
          <CardText>Latest Project: {props.interests.projects}</CardText>
          <CardLink href={props.profiles.network}>Github</CardLink>
          <CardLink href={props.profiles.network}>LinkedIn</CardLink> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default BigCard;
