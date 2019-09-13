import React from 'react';
import Swal from 'sweetalert2';
import RatingStar from '../components/ratingStar';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      rating: '',
      photo: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, console.log(event.target.name, event.target.value));
  }

  submitRecipe = async (event) => {
    await sessionStorage.setItem("Recipe", JSON.stringify(
      {
        name: this.state.recipeName,
        methodID: this.state.brewMethod,
        originID: this.state.origin,
        beanName: this.state.beans,
        beanProcess: this.state.process,
        beanRoasting: this.state.roasting,
        difficulty: this.state.difficulty,
        coffeeWeight: this.state.beanNumber,
        water: this.state.waterNumber
      })
    )
    // this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <RatingStar />
        <form onSubmit={this.submitRecipe}>
          <div className="form-group">
            <label htmlFor="content">Review</label>
            <textarea className="form-control" id="content" rows="3" onChange={this.handleChange} />
          </div>
          <input
            className=" btn btn-dark btn-block my-3"
            type="submit"
            value="Sumbit"
          />
        </form>
      </div>
    );
  }
}

export default Review;
