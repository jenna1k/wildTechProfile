import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import PopUpButton from "./PopUpButton";
import BigCard from "./BigCard";

const SmallCard = props => {
  return (
    <div>
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
        </CardBody>
      </Card>
    </div>
  );
};

export default SmallCard;
