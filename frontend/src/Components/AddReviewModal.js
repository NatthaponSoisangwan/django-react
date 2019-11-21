
import React, { Component } from "react";
import CustomModal from "./Modal";
import axios from "axios";
import AddIcon from '@material-ui/icons/Add'
// import { makeStyles } from "@material-ui/core/styles";
import Fab from '@material-ui/core/Fab';


class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        stars: "",
        title: "",
        description: "",
        name: "",
        image: null,
      },
      reviewList: []
    };
  }
  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("api/reviews/")
      .then(res => this.setState({ reviewList: res.data }))
      .catch(err => console.log(err));
  };


  // Switch to display Modal
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  // On submit handler for save button in Modal
  handleSubmit = item => {
    let bodyFormData = new FormData();
    
    for (var key in item) {
      bodyFormData.append(key, item[key]);
    }

    this.toggle();
    axios({
      method: 'post',
      url: '/api/reviews/',
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(res => this.refreshList());

  };

  // Create a new activeItem to be submitted!
  createItem = () => {
    const item = { title: "", stars: "", description: "", name: "", };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  render() {
    return (
      <div>
        <div>
          <Fab color="secondary" aria-label="add" onClick={this.createItem} className={this.props.fabButton}>
            <AddIcon />
          </Fab>
        </div>
        <div>
          {this.state.modal ? (
            <CustomModal
              activeItem={this.state.activeItem}
              toggle={this.toggle}
              onSave={this.handleSubmit}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
export default Review;