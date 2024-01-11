import React, { Component } from 'react';
import { urlApi } from '../data';
import Logo from '../assets/logo_sopra.png';


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
            })
            .catch((error) => {
              console.log(error);
            });
        });
      }
      
    render() {
        return (
            this.state.objTrending.map((e, index) => (
                <div key={index} className="col mb-2 px-1 position-relative">
                <div className="top-left-image" style={{ position: 'absolute', top: 5, left: 10, zIndex: 2 }}>
                  <img className="img-fluid" src={Logo} alt='logoNetflix' />
                </div>
                <img className="img-fluid" src={e.Poster} alt={e.Plot} />
              </div>
            ))
          );
          
  }
}
