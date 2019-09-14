import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      rating: '',
      photo: '',
      ratingLabels: {
        1: 'Useless',
        2: 'Poor',
        3: 'Ok',
        4: 'Good',
        5: 'Excellent',
      },
      rating: 3,
      review: {},
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, console.log(event.target.name, event.target.value));
  }

  submitReview = async (event) => {
    await sessionStorage.setItem("Review", JSON.stringify(
      {
        content: this.state.content,
        rating: this.state.rating,
        photo: this.state.photo,
      })
    )
    // this.setState({
    //   review: {
    //     content: this.state.content,
    //     rating: this.state.rating,
    //     photo: this.state.photo,
    //   }
    // })
    this.props.history.push("/activity");
  }

  render() {
    return (
      <div>
        <div className='container'>
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
              <textarea className="form-control" id="content" rows="3" name="content" onChange={this.handleChange} />
              <input
                className=" btn btn-dark btn-block my-3"
                type="submit"
                value="Sumbit"
              />
              {/* <div class="form-group">
            <label for="exampleInputFile">File input</label>
            <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
            <small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
          </div> */}
            </form>
          </div>

        </div>

      </div>
    );
  }
}

export default Review;
