import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Meme = props => (
  <center>
    <tr>
      <tr>Posted By: {props.meme.name}</tr>
      <tr>Caption: {props.meme.caption}</tr>
      <tr>
        <Link to={"/edit/"+props.meme._id}>edit </Link>
      </tr>
      <tr>
        <img alt="Meme" src={props.meme.url} width="500"/>
      </tr>
      <br></br>
    </tr>
  </center>
)

export default class MemesList extends Component {
  constructor(props) {
    super(props);

    this.state = {memes: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/memes/')
      .then(response => {
        this.setState({ memes: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  memeList() {
    return this.state.memes.slice(-100).reverse().map(currentmeme => {
      return <Meme meme={currentmeme} key={currentmeme._id}/>;
    })
  }

  render() {
    return (
      <center>
        <div>
          <h3>Meme Stream</h3>
          <table className="table">
            <tbody>
              { this.memeList() }
            </tbody>
          </table>
        
        </div>
      </center>
    )
  }
}