import React from 'react';
import { connect } from 'unistore/react';
import Navbar from '../components/navbar';
import Radar from '../components/radar';
import { actionsCreateRecipe } from '../store/store'

class CreateRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: '',
      brewMethod: '',
      difficulty: '',
      beanNumber: '',
      waterNumber: '',
      grind: '',
      temperature: '',
      beans: '',
      origin: '',
      process: '',
      roasting: '',
      fragrance: 0.5,
      aroma: 0.5,
      cleanliness: 0.5,
      sweetness: 0.5,
      taste: 0.5,
      acidity: 0.5,
      aftertaste: 0.5,
      balance: 0.5,
      global: 0.5,
      body: 0.5,
    }
  }

  handleChangeRecipe = (event) => {
    this.setState({ [event.target.name]: event.target.value }, console.log(event.target.name, event.target.value));
  }

  handleChangeRecipeDetail = (event) => {
    this.setState({ [event.target.name]: parseFloat(event.target.value) });
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
    await sessionStorage.setItem("RecipeDetail", JSON.stringify(
      {

        fragrance: this.state.fragrance,
        aroma: this.state.aroma,
        cleanliness: this.state.cleanliness,
        sweetness: this.state.sweetness,
        taste: this.state.taste,
        acidity: this.state.acidity,
        aftertaste: this.state.aftertaste,
        balance: this.state.balance,
        globalTaste: this.state.global,
        body: this.state.body,
        grindSize: this.state.grind,
        waterTemp: this.state.temperature
      })
    )
    this.props.history.push("/addstep");
  }

  render() {
    return (
      <div>
        <div className="container">

          <form onSubmit={this.submitRecipe}>
            <div className=" row ">
              <label htmlFor="recipeName">Nama Resep</label>
            </div>

            <div className=" row justify-content-center text-center">
              <input
                className="form-control"
                type="text"
                name="recipeName"
                onChange={this.handleChangeRecipe}
                required
              />
            </div>
            <div className="row form-group">
              <label htmlFor="brewMethod">Pilih Metode Brew</label>

              <select className="form-control" id="brewMethod" name="brewMethod" onChange={this.handleChangeRecipe} required>
                <option selected disabled>-Pilih-</option>
                {this.props.methods.map((method, index) => <option value={method.id}>{method.name}</option>)}
              </select>
            </div>
            <div className="row form-group">
              <label htmlFor="difficulty">Tingkat Kesulitan</label>

              <select className="form-control" id="difficulty" name="difficulty" onChange={this.handleChangeRecipe} required>
                <option selected disabled>-Pilih-</option>
                <option value="1">Mudah</option>
                <option value="2">Sedang</option>)
                <option value="3">Sulit</option>)

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
                      onChange={this.handleChangeRecipe}
                      required
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
                      onChange={this.handleChangeRecipe}
                      required

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

                    <select className="form-control" id="grind" name="grind" onChange={this.handleChangeRecipe} required>
                      <option selected disabled>-Pilih-</option>
                      {this.props.grinds.map((grind, index) => <option value={grind.id}>{grind.name}</option>)}
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
                      onChange={this.handleChangeRecipe}
                      required
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
                onChange={this.handleChangeRecipe}
                required
              />
            </div>

            <div className="row form-group">
              <label htmlFor="origin">Origin : </label>

              <select className="form-control" id="origin" name="origin" onChange={this.handleChangeRecipe} required>
                <option selected disabled>-Pilih-</option>
                {this.props.origins.map((origin, index) => <option value={origin.id}>{origin.name}</option>)}
                <option>lainnya</option>)
              </select>
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
                onChange={this.handleChangeRecipe}
                required
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
                onChange={this.handleChangeRecipe}
                required
              />
            </div>
            <Radar data={{
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
            }} />

            {this.props.flavors.map((flavor, index) => (
              <div className="row">
                <div className="col-3">
                  <label htmlFor="customRange1">{flavor}</label>
                </div>
                <div className="col-9">
                  <input type="range" className="custom-range" min="0" max="1" step="0.01" value={this.state[flavor]} id={flavor} name={flavor} onChange={this.handleChangeRecipeDetail} />
                </div>
              </div>
            ))}

            <div className=" row justify-content-center text-center">
              <input
                className=" btn btn-dark btn-block my-3"
                type="submit"
                value="Next"
              />
            </div>
          </form>
        </div>
        <Navbar />
      </div>
    );
  }
}

// export default Steps;
export default connect('methods, grinds, flavors, origins, recipeDetails')(CreateRecipe);
