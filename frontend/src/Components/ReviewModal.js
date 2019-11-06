import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import StarRating from "./StarRating";
import { TextField } from "@material-ui/core";

export default class ReviewModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,

    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle} width='sm'>
        <ModalHeader toggle={toggle}> Review </ModalHeader>
        <ModalBody>
          <Form>
            {/* Food Name */}
            <FormGroup>
              <Label for="title">Food Name</Label>
              <TextField
                id='outlined-basic'
                label='Food Name'
                variant='outlined'
                onChange={this.handleChange}
                required='true'
              />
            </FormGroup>
            {/* Star Rating  */}
            <FormGroup>
              <Label for="title">Rating</Label>
              <StarRating />
            </FormGroup>
            <FormGroup>
              <Label for="comment">Comment</Label>
              <Input
                type="text"
                name="description"
                value={this.state.activeItem.description}
                onChange={this.handleChange}
                placeholder="Describe the food"
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.activeItem.name}
                onChange={this.handleChange}
                placeholder="Enter Your Name (optional)"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}