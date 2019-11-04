
import React, { Component } from "react";
import Modal from "./Modal";
import axios from "axios";
import AddIcon from '@material-ui/icons/Add'

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //  viewCompleted: false,
      activeItem: {
        stars: "",
        title: "",
        description: "",
        name: "",
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
  displayCompleted() {
    return this.setState();
  }

  renderItems = () => {
    //  const { viewCompleted } = this.state;
    const newItems = this.state.reviewList
    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${
            this.state.viewCompleted
            }`}
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"
          >
            {" "}
            Edit{" "}
          </button>
          <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger"
          >
            Delete{" "}
          </button>
        </span>
      </li>
    ));
  };
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  handleSubmit = item => {
    this.toggle();
    if (item.id) {
      axios
        .put(`/api/reviews/${item.id}/`, item)
        .then(res => this.refreshList());
      return;
    }
    axios
      .post(`/api/reviews/`, item)
      .then(res => this.refreshList());
  };
  handleDelete = item => {
    axios
      .delete(`/api/reviews/${item.id}`)
      .then(res => this.refreshList());
  };
  createItem = () => {
    const item = { title: "", stars: "", description: "", name: "", };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  render() {
    return (
      <main className="content">
        <div className=''>
          {/* <button onClick={this.createItem} className="btn btn-primary"> */}
          <AddIcon onClick={this.createItem} />
          {/* </button> */}
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}
export default Review;