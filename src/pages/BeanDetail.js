import React from "react";
import { connect } from "unistore/react";
import RadarBean from "../components/radarBean";
import actionsBeans from "../store/actionsBeans";
import loading from "../assets/images/loading.gif";

class BeanDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount = async () => {
    await this.props.getBeanById(this.props.match.params.beanID);
    if (this.props.bean !== null || this.props.bean !== false) {
      await this.setState({
        data: {
          fragrance: this.props.bean.fragrance,
          flavor: this.props.bean.flavor,
          aftertaste: this.props.bean.aftertaste,
          acidity: this.props.bean.acidity,
          body: this.props.bean.body,
          balance: this.props.bean.balance,
          uniformity: this.props.bean.uniformity,
          cleanCups: this.props.bean.cleanCups,
          sweetness: this.props.bean.sweetness,
          overall: this.props.bean.overall
        }
      });
    }
  };

  componentWillUnmount = async () => {
    await this.props.setBean(null);
  };

  render() {
    if (this.props.bean === null) {
      return <img src={loading} alt="loading..." />;
    } else if (this.props.bean === false) {
      return (
        <div>
          <h1>Data Biji Tidak Ada</h1>
        </div>
      );
    } else {
      return (
        <div>
          <img className="backbutton" src={this.props.backButton} onClick="" />
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h4 className="font-weight-bold mb-0">
                  {this.props.bean.name}
                </h4>
              </div>
              <div className="col-12">
                <h6 className="text-secondary">
                  {this.props.origins[this.props.bean.originID - 1].name} |{" "}
                  {this.props.bean.location},{this.props.bean.cupping}
                </h6>
              </div>
              <div className="col-12 py-3">
                <img src={this.props.bean.photo} alt="" className="w-100" />
              </div>
              <div className="col-12 pb-4">
                <p class="text-justify">{this.props.bean.description}</p>
              </div>
              <div className="col-6">
                <h6 className="border-bottom">ADVANTAGE</h6>

                {this.props.bean.advantage.map((adv, index) => (
                  <h6>adv</h6>
                ))}
              </div>
              <div className="col-6">
                <h6 className="border-bottom">DISADVANTAGE</h6>

                {this.props.bean.disadvantage.map((adv, index) => (
                  <h6>adv</h6>
                ))}
              </div>

              <div className="col-12 pt-4">
                <h6 className="border-bottom">CITA RASA</h6>

                <RadarBean data={this.state.data} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(
  "bean, origins, backbutton",
  actionsBeans
)(BeanDetail);
