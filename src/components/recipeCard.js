import React from 'react';

function methodCard(props) {
  return (
    <div className="container-fluid recipeCard border mt-3">
      <div className="row h-100 pt-2">
        <div className="col-3 text-center">
          <img src={props.data.icon} className="w-100" />
        </div>
        <div className="col-9">
          <div className="row">
            <div className="col-9 text-left">
              <h4>{props.data.name}</h4>
            </div>
            <div className="col-3 text-right">
              <h5>...</h5>
            </div>
            <div className="col-2 text-left">
              <div className="row h-100 align-items-center">
                <div className="col-12">{props.data.time}</div>
              </div>
            </div>
            <div className="col-2 text-right">
              <img
                src={require('../assets/images/RecipeIcon/timer.png')}
                width="150%"
              />
            </div>
            <div className="col-2 text-left">
              <div className="row h-100 align-items-center">
                <div className="col-12">{props.data.coffeeWeight}</div>
              </div>
            </div>
            <div className="col-2 text-right">
              <img
                src={require('../assets/images/RecipeIcon/coffee.png')}
                width="150%"
              />
            </div>
            <div className="col-2 text-left">
              <div className="row h-100 align-items-center">
                <div className="col-12">{props.data.water}</div>
              </div>
            </div>
            <div className="col-2 text-right">
              <img
                src={require('../assets/images/RecipeIcon/water.png')}
                width="150%"
              />
            </div>
          </div>
          <br />
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-5 text-left">
              <h6>Beans :</h6>
            </div>
            <div className="col-7 text-left">
              <h6>{props.data.beanName}</h6>
            </div>
            <div className="col-5 text-left">
              <h6>Process :</h6>
            </div>
            <div className="col-7 text-left">
              <h6>{props.data.beanProcess}</h6>
            </div>
            <div className="col-5 text-left">
              <h6>Roasting :</h6>
            </div>
            <div className="col-7 text-left">
              <h6>{props.data.beanRoasting}</h6>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row h-100">
            <div className="col-12 h-50">
              <div className="row align-items-center h-100">
                <div className="col-6">
                  <img
                    src={require('../assets/images/RecipeIcon/star.png')}
                    width="100%"
                  />
                </div>
                <div className="col-6">{props.data.rating}</div>
              </div>
            </div>

            <div className="col-12 h-50">
              <div className="row align-items-center h-100">
                <div className="col-6">
                  <img
                    src={require('../assets/images/RecipeIcon/like.png')}
                    width="100%"
                  />
                </div>
                <div className="col-6">{props.data.favoriteCount}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default methodCard;
