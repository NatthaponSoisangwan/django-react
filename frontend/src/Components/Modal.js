import React, { Component, Fragment } from "react";
import {
  Button,
  FormGroup,
} from "reactstrap";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import Rating from "@material-ui/lab/Rating";
import analyseComment from './CommentAnalyzer.js'
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';



export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
      errors: "",
      showValidateDialog: false,
      commentScore: "Unchanged",
      submissionMessage: ""
    };
  }

  /* 
      Update activeItem by adding newly entered data to activeItem. Then this updated 
      activeItem will be passed as parameter to onSave() of the parent component.
      (Except image file)
   */
  handleChange = (e) => {
    let { name, value } = e.target;
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });

  };

  /* 
    Update activeItem by adding newly entered IMAGE FILE to activeItem.
   */
  handleImageChange = e => {
    const activeItem = { ...this.state.activeItem, image: e.target.files[0] };
    this.setState({ activeItem });
  };

  /*   Validate all input fields and analyze comment score then show submission dialoge and post to server. */
  handleSubmit = (event, errors) => {
    this.setState({ errors });

    /* If not all required fields are completed */
    if ((Object.keys(this.state.errors).length != 0)) {
      let message = "Almost There....! \n Please complete all required fields";
      this.setSubmissionMessage(message);
      this.onOpenDialog();
    }

    /* Pushing activieItem to Django server */
    else {

      /*
      TODO:
      1. Analyse comment and compare it against THRESHOLD
      2. POST if the comment is okay
      3. Show dialog to try again if score greater than THRESHOLD
      */

      /* get score and isToxiccomment  */
      const report = analyseComment(this.state.activeItem.description);

      report.then((score) => {
        let isToxicComment = score[1];

        /* The comment is toxic : set error message and open dialog */
        if (isToxicComment) {
          let message = "Opp....! \n Unfortunately, you comment may be violate community standard. \n Your comment score is " + score[0];
          this.setSubmissionMessage(message);
          this.onOpenDialog();
        }
        /* The comment is not toxic : set post review, set success message and open dialog */
        else {
          this.props.onSave(this.state.activeItem);
          let message = "Successful! \n Thank you for your review";
          this.setSubmissionMessage(message);
          this.onOpenDialog();
          
        }
      })
    }

  }

  setSubmissionMessage = (message) => {
    this.setState({ submissionMessage: message })
  }

  onOpenDialog = () => {
    this.setState({ showValidateDialog: true })
  }

  onCloseDialog = () => {
    this.setState({ showValidateDialog: false })
  }

  render() {
    const { toggle, onSave } = this.props;
    return (

      <Fragment>
        <Dialog
          open={toggle}
          aria-labelledby="add-review-dialog-form"
          onBackdropClick={toggle}
        >
          <DialogTitle id="add-review-modal">Review</DialogTitle>

          <DialogContent>

            <AvForm onSubmit={this.handleSubmit} >
              {/* With AvField */}
              <AvField
                label="Menu Name"
                // required
                name="title"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                errorMessage="Please enter the menu name" />

              {/* Radios */}
              <AvGroup check
                name="activeItem.stars">
                <Rating
                  id="star rating"
                  name="stars"
                  value={this.state.activeItem.stars}
                  size="medium"
                  precision={1}
                  onChange={this.handleChange}
                />
              </AvGroup>

              {/* Food Decription */}
              <AvField
                name="description"
                value={this.state.activeItem.description}
                onChange={this.handleChange}
                label="Comment"
                required
                errorMessage="Please enter your comment" />

              {/* Author name */}
              <AvField
                type="email"
                name="name"
                value={this.state.activeItem.name}
                onChange={this.handleChange}
                label="Comment by"
                helpMessage="Your email is optional"
                validate={{ email: true }} />

              <AvGroup>
                <AvInput
                  // required
                  accept="image/*"
                  name="image"
                  type="file"
                  onChange={this.handleImageChange}
                />
              </AvGroup>

              <FormGroup>
                <Button >Submit</Button>
              </FormGroup>
            </AvForm>
          </DialogContent>

        </Dialog>

        <Dialog
          open={this.state.showValidateDialog}
          onClose={this.onCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Almost There..."}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.state.submissionMessage}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onCloseDialog} color="primary" autoFocus>
              Got it
            </Button>
          </DialogActions>
        </Dialog>


      </Fragment>
    );
  }
}