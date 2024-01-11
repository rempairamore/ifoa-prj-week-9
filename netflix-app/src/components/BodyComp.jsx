import React, { Component } from 'react';
import { urlApi } from '../data';
import TrendingNowComp from './TrendingNowComp';
import WatchComp from './WatchComp'
import NewReleasesComp from './NewReleasesComp'


export default class BodyComp extends Component {
    state = {
        arrayTrendingNow : ['tt7322224', 'tt0105236', 'tt0075938', 'tt0047478'],
        arrayWatch : ['tt0315110', 'tt3774694', 'tt1191111', 'tt0364569'],
        arrayNewReleases : ['tt0209144', 'tt0068646', 'tt0114746', 'tt0401792'],
        objTrendingNow : [],
        objWatch : [],
        objNewRelease : []
    }

  
    render() {
    return (
        <div className="container-fluid px-4" id='contBody'>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <div className="dropdown ml-4 mt-1">
              <button
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ backgroundColor: '#221f1f' }}
              >
                Genres &nbsp;
              </button>
              <div className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item text-white bg-dark" href="#">
                  Comedy
                </a>
                <a className="dropdown-item text-white bg-dark" href="#">
                  Drama
                </a>
                <a className="dropdown-item text-white bg-dark" href="#">
                  Thriller
                </a>
              </div>
            </div>
          </div>
          <div>
            <i className="fa fa-th-large icons"></i>
            <i className="fa fa-th icons"></i>
          </div>
        </div>
        <h4>Trending Now</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center d-flex justify-content-around">
            <TrendingNowComp filmId={this.state.arrayTrendingNow} />
        </div>
        <h4>Watch it Again</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center d-flex justify-content-around">
            <WatchComp filmId={this.state.arrayWatch} />
        </div>
        <h4>New Releases</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center d-flex justify-content-around">
            <NewReleasesComp filmId={this.state.arrayNewReleases} />
        </div>
      </div>
    )
  }
}
