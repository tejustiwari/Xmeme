import React, { Component } from 'react';
import axios from 'axios';

export default class CreateMemee extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCaption = this.onChangeCaption.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      caption: '',
      url: ''
    }
  }

  // componentDidMount() {
  //   axios.get('http://localhost:5000/users/')
  //     .then(response => {
  //       if (response.data.length > 0) {
  //         this.setState({
  //           users: response.data.map(user => user.username),
  //           username: response.data[0].username
  //         })
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })

  // }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeCaption(e) {
    this.setState({
      caption: e.target.value
    })
  }

  onChangeUrl(e) {
    this.setState({
      url: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const meme = {
      name: this.state.name,
      caption: this.state.caption,
      url: this.state.url
    }

    console.log(meme);

    axios.post('http://localhost:5000/memes/', meme)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Meme</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              />
        </div>
        <div className="form-group"> 
          <label>Caption: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.caption}
              onChange={this.onChangeCaption}
              />
        </div>
        <div className="form-group">
          <label>Url : </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.url}
              onChange={this.onChangeUrl}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Create Meme" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}