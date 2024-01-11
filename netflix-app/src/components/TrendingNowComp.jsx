import React, { Component } from 'react';
import { urlApi } from '../data';

export default class TrendingNowComp extends Component {
    state = { 
        objTrending : [],
    }
    
    componentDidMount() {
        this.props.filmId.forEach((movie, index) => {
          fetch(urlApi + '&i=' + movie)
            .then((response) => {
              if (response.ok) {
                return response.json();
              }
              throw new Error('Something went wrong');
            })
            .then((responseJson) => {
              // Verifica se responseJson è già presente in objTrending
              const isDuplicate = this.state.objTrending.some(item => item.imdbID === responseJson.imdbID);
      
              // Aggiungi responseJson solo se non è un duplicato
              if (!isDuplicate) {
                this.setState((prevState) => ({
                  objTrending: [...prevState.objTrending, responseJson],
                }));
              }
      
              console.log(this.state);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      }
      
    render() {
        console.log(this.state)
        return (
            this.state.objTrending.map((e, index) => (
              <div key={index} className="col mb-2 px-1">
                <img className="img-fluid" src={e.Poster} alt={e.Plot} />
              </div>
            ))
          );
          
  }
}
