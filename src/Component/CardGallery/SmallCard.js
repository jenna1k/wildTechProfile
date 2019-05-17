import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Col } from 'reactstrap';

const SmallCard = props => {
  return (
    <Col xs="12" md="12" lg="12">
      <Card style={{ width: '80%', height: '40%' }}>
        <CardImg
          top
          style={{ width: '70%', position: 'relative' }}
          src={props.basics.picture}
          alt={props.basics.name}
        />
        <CardBody>
          <CardTitle style={{ color: 'black', textalign: 'justify', textsize: '5%' }}>
            <em>{props.basics.name}</em>
          </CardTitle>
          <CardSubtitle style={{ color: 'black', textalign: 'justify', textsize: '5%' }}>
            {props.favorite_programming_languages}
          </CardSubtitle>
          <Button target="_blank" href={props.basics.email}>
            Contact
          </Button>
          <Button target="_blank" onClick={props.handleClick}>
            Further
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SmallCard;
