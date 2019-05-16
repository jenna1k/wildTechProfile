import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const SmallCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://media.licdn.com/dms/image/C4D03AQH7JYoNXLQoCg/profile-displayphoto-shrink_200_200/0?e=1563408000&v=beta&t=PcOZXYVuZXzFEEr0Silb009SnjgHoPXD52WSNa47ez4" />
        <CardBody>
          <CardTitle style={{color: 'black'}} >Name</CardTitle>
          <CardSubtitle style={{color: 'black'}}>favorite programming languages</CardSubtitle>
          <CardText style={{color: 'black'}}>summery</CardText>
          <Button href="https://www.linkedin.com/in/asieh-mirzabagherian-1819b23b/">Contact</Button>
          <Button onClick={props.handleClick}> Further </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default SmallCard;
