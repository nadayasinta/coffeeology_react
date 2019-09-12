import React from 'react';
import { connect } from 'unistore/react';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Radar from '../components/radar';

class CreateRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beanNumber: '',
      waterNumber: '',
      grind: '',
      beans: '',
      process: '',
      roasting: '',
      brewMethod: '',
      grind: '',
      fragrance: 0,
      aroma: 0,
      cleanliness: 0,
      sweetness: 0,
      taste: 0,
      acidity: 0,
      aftertaste: 0,
      balance: 0,
      global: 0,
      body: 0,
      tempFlavor: {
        fragrance: 0,
        aroma: 0,
        cleanliness: 0,
        sweetness: 0,
        taste: 0,
        acidity: 0,
        aftertaste: 0,
        balance: 0,
        globalTaste: 0,
        body: 0
      }
    }

    componentDidUpdate(){
      this.setState({
        tempFlavor: {
          fragrance: this.state.fragrance,
          aroma: this.state.aroma,
          cleanliness: this.state.cleanliness,
          sweetness: this.state.sweetness,
          taste: this.state.taste,
          acidity: this.state.acidity,
          aftertaste: this.state.aftertaste,
          balance: this.state.balance,
          globalTaste: this.state.global,
          body: this.state.body
        }
      })
    }

    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value }, console.log(event.target.name, event.target.value));
    }

    render() {
      return (
        <div>
          <Header />
          <div className="container">

            <form onSubmit={this.doEditProfile}>
              <div className="row form-group">
                <label htmlFor="brewMethod">Pilih Metode Brew</label>

                <select className="form-control" id="brewMethod" name="brewMethod" onChange={this.handleChange}>
                  {this.props.methods.map((method, index) => <option>{method.name}</option>)}
                </select>
              </div>

              <div className=" row ">
                <div className=" col-3  ">
                  <div className=" row justify-content-center border">
                    <div className=" col-12">
                      <label htmlFor="beanNumber">
                        Jumlah
                      <br />
                        Biji
                    </label>
                    </div>
                    <div className=" col-12">
                      <img
                        src={require('../assets/images/RecipeIcon/coffee.png')}
                        className="w-50 py-2"
                      />
                    </div>
                    <div className=" col-9 px-0">
                      <input
                        className="form-control"
                        type="number"
                        name="beanNumber"
                        placeholder="16"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className=" col-2 px-0 align-self-center">
                      g
                  </div>
                  </div>
                </div>

                <div className=" col-3  ">
                  <div className=" row justify-content-center border">
                    <div className=" col-12">
                      <label htmlFor="waterNumber">
                        Jumlah
                      <br />
                        Air
                    </label>

                    </div>
                    <div className=" col-12">
                      <img
                        src={require('../assets/images/RecipeIcon/water.png')}
                        className="w-50 py-2"
                      />
                    </div>
                    <div className=" col-9 px-0">
                      <input
                        className="form-control"
                        type="number"
                        name="waterNumber"
                        placeholder="200"
                        onChange={this.handleChange}

                      />
                    </div>
                    <div className=" col-2 px-0 align-self-center">
                      ml
                  </div>
                  </div>
                </div>

                <div className=" col-3 ">
                  <div className=" row justify-content-center border">
                    <div className=" col-12">
                      <label htmlFor="grind">
                        Ukuran
                      <br />
                        Butir
                    </label>
                    </div>
                    <div className=" col-12">
                      <img
                        src={require('../assets/images/RecipeIcon/coffee-grinder.png')}
                        className="w-50 py-2"
                      />
                    </div>
                    <div className=" col-9 px-0">

                      <select className="form-control" id="grind" name="grind" onChange={this.handleChange}>
                        {this.props.grinds.map((grind, index) => <option>{grind.name}</option>)}
                      </select>

                    </div>
                  </div>
                </div>

                <div className=" col-3">
                  <div className=" row justify-content-center border">
                    <div className=" col-12">
                      <label htmlFor="temperature">
                        Suhu
                      <br />
                        Air
                    </label>
                    </div>
                    <div className=" col-12">
                      <img
                        src={require('../assets/images/RecipeIcon/thermometer.png')}
                        className="w-50 py-2"
                      />
                    </div>
                    <div className=" col-9 px-0">
                      <input
                        className="form-control"
                        type="number"
                        name="temperature"
                        placeholder="92"
                        onChange={this.handleChange}

                      />
                    </div>
                    <div className=" col-2 px-0 align-self-center">
                      &deg;C
                  </div>
                  </div>
                </div>
              </div>

              <div className=" row justify-content-center bg-warning">
                Profile Biji
            </div>

              <div className=" row ">
                <label htmlFor="beans">Biji :</label>
              </div>

              <div className=" row justify-content-center text-center">
                <input
                  className="form-control"
                  type="text"
                  name="beans"
                  placeholder="biji"
                  onChange={this.handleChange}
                />
              </div>

              <div className=" row ">
                <label htmlFor="process">Proses :</label>
              </div>

              <div className=" row justify-content-center text-center">
                <input
                  className="form-control"
                  type="text"
                  name="process"
                  placeholder="proses"
                  onChange={this.handleChange}

                />
              </div>

              <div className=" row ">
                <label htmlFor="roasting">Roasting :</label>
              </div>

              <div className=" row justify-content-center text-center">
                <input
                  className="form-control"
                  type="text"
                  name="roasting"
                  placeholder="roasting"
                  onChange={this.handleChange}

                />
              </div>


              <div className=" row justify-content-center text-center">
                <input
                  className=" btn btn-dark btn-block my-3"
                  type="submit"
                  value="Next"
                />
              </div>
            </form>
          </div>

          <Radar data={this.state.tempFlavor} />
          <div className="container">
            {this.props.flavors.map((flavor, index) => (
              <div className="row">
                <div className="col-3">
                  <label htmlFor="customRange1">{flavor}</label>
                </div>
                <div className="col-9">
                  <input type="range" className="custom-range" min="0" max="1" step="0.01" id={flavor} name={flavor} onChange={this.handleChange} />
                </div>
              </div>
            ))}


          </div>
        </div>
      );
    }
  }

  export default connect('methods, grinds, flavors, recipeDetails')(CreateRecipe);
