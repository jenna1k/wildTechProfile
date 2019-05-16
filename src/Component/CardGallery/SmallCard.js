import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const SmallCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="30%" src={props.basics.picture} alt={props.basics.name}/>
        <CardBody>
          <CardTitle style={{color: 'black'}} >{props.basics.name}</CardTitle>
          <CardSubtitle style={{color: 'black'}}>{props.favorite_programming_languages}</CardSubtitle>
          <Button href={props.basics.email}>Contact</Button>
          <Button onClick={props.handleClick}> Further </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default SmallCard;
