import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormLabel } from '@material-ui/core'
import Rating from "@material-ui/lab/Rating";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }

  /* 
      Update activeItem by adding newly entered data to activeItem. Then this updated 
      activeItem will be passed as parameter to onSave() of the parent component. 
   */
  handleChange = e => {
    let { name, value } = e.target;
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };

  
  handleOnPost = () => {

  }

  render() {
    const { toggle, onSave } = this.props;
    return (

      <Dialog
        open={toggle}
        aria-labelledby="add-review-dialog-form"
        onBackdropClick={toggle}
      >
        <DialogTitle id="add-review-modal">Review</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please add your comment below. Your comment will make other students' day better.
          </DialogContentText>
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
                multiple
              />
            </FormGroup>
            <FormGroup>
              <Label for="userEmail">Name</Label>
              <Input
                type="email"
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
        </DialogContent>

        <DialogActions>
          <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Post
           </Button>
        </DialogActions>
      </Dialog>
    );
  }
}