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
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }
  handleChange = e => {
    let { name, value } = e.target;
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };

  classes = makeStyles(theme => ({
  
    
    uploadButton: {
      margin: theme.spacing(1),
      color: 'primary'
    },
    input: {
      display: 'none',
    }
  }));

  render() {
    const { toggle, onSave } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle} className={this.classes.root}>
        <ModalHeader toggle={toggle}> Review </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="title">Menu Name</Label>

              <Input
                type="text"
                name="title"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="Enter Menu Name Here..."
              />
            </FormGroup>
            <Label for="title">Rating</Label>
            <FormGroup>
              <Rating
                name="stars"
                required="true"
                value={this.state.activeItem.stars}
                size="medium"
                precision={1}
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="text"
                name="description"
                value={this.state.activeItem.description}
                onChange={this.handleChange}
                placeholder="Enter Food Description"
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
            
            <FormGroup>
              <input
                accept="image/*"
                name="image"
                value={this.state.activeItem.image}
                multiple
                type="file"
                onChange={this.handleChange}
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