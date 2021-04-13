import React, { Component } from "react";
import "./style.css";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "",
      allMemeImgs: [
        "memeImg/image1.jpg",
        "memeImg/image2.jpg",
        "memeImg/image3.jpg",
        "memeImg/image4.jpg",
        "memeImg/image5.jpg",
        "memeImg/image6.jpg",
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   fetch("http://api.imgflip.com/get_memes")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       const { memes } = response.data;
  //       this.setState({ allMemeImgs: memes });
  //     })
  //     .catch((error) => alert(error));
  // }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randomMemeImg = this.state.allMemeImgs[randNum];
    this.setState({ randomImg: randomMemeImg });
  }

  render() {
    return (
      <div>
        <form className="meme-form">
          <input
            type="text"
            value={this.state.topText}
            name="topText"
            placeholder="top text"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            value={this.state.bottomText}
            name="bottomText"
            placeholder="bottom text"
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Generate Meme Picture</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
