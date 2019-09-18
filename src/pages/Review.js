import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";

import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  LineShareButton
} from "react-share";
import {
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  LineIcon
} from "react-share";

import { connect } from "unistore/react";
import actionsDemo from "../store/actionsDemo";

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      rating: "",
      photo: "",
      ratingLabels: {
        1: "Useless",
        2: "Poor",
        3: "Ok",
        4: "Good",
        5: "Excellent"
      },
      rating: 3,
      review: {}
    };
  }

  handleChange = event => {
    this.setState(
      { [event.target.name]: event.target.value },
      console.log(event.target.name, event.target.value)
    );
  };

  submitReview = async event => {
    event.preventDefault();
    this.setState(
      {
        review: {
          recipeID: this.props.match.params.recipeID,
          historyID: this.props.historyID,
          content: this.state.content,
          rating: this.state.rating,
          photo: this.state.photo
        }
      },
      () => {
        this.props.postReview(this.state.review);
        sessionStorage.removeItem("recipeSteps");
        this.props.history.push("/activity");
      }
    );
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <Typography component="legend">Rating</Typography>
          </div>

          <div className="row justify-content-center">
            <Rating
              name="rating"
              value={this.state.rating}
              size="large"
              onChange={this.handleChange}
            />
          </div>

          <div className="row justify-content-center">
            <h3>{this.state.ratingLabels[this.state.rating]}</h3>
          </div>
          <div className="row justify-content-center">
            <form onSubmit={this.submitReview} className="row">
              <label htmlFor="content">Review</label>
              <textarea
                className="form-control"
                id="content"
                rows="3"
                name="content"
                onChange={this.handleChange}
              />
              <input
                className=" btn btn-dark btn-block my-3"
                type="submit"
                value="Sumbit"
              />
            </form>
          </div>

          <br />
          <br />
          <FacebookShareButton
            children={<FacebookIcon size={32} round={true} />}
            url={
              "http://coffeology.shop/recipe/" +
              this.props.match.params.recipeID
            }
          />
          <TelegramShareButton
            children={<TelegramIcon size={32} round={true} />}
            url={
              "http://coffeology.shop/recipe/" +
              this.props.match.params.recipeID
            }
          />
          <TwitterShareButton
            children={<TwitterIcon size={32} round={true} />}
            url={
              "http://coffeology.shop/recipe/" +
              this.props.match.params.recipeID
            }
          />
          <WhatsappShareButton
            children={<WhatsappIcon size={32} round={true} />}
            url={
              "http://coffeology.shop/recipe/" +
              this.props.match.params.recipeID
            }
          />
          <LinkedinShareButton
            children={<LinkedinIcon size={32} round={true} />}
            url={
              "http://coffeology.shop/recipe/" +
              this.props.match.params.recipeID
            }
          />
          <LineShareButton
            children={<LineIcon size={32} round={true} />}
            url={
              "http://coffeology.shop/recipe/" +
              this.props.match.params.recipeID
            }
          />
        </div>
      </div>
    );
  }
}

export default connect(
  "historyID",
  actionsDemo
)(Review);
