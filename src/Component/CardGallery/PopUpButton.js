import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import BigCard from "./BigCard";

class PopUpButton extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    modal: false
    };

    this.toggle = this.toggle.bind(this);
}

toggle() {
    this.setState(prevState => ({
    modal: !prevState.modal
    }));
}

render() {
    return (
    <div>
        <Button color="danger" onClick={this.toggle}>
        click me
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalBody onClick={this.toggle}>
            <BigCard {...this.props}/>
        </ModalBody>
        </Modal>
    </div>
    );
}
}

export default PopUpButton;