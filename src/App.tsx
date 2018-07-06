import * as React from 'react';
import './App.css';
import CitiesView from './CitiesView';
import DetailedView from './DetailedView';
import WeeklyView from './WeeklyView';

interface IAppProp {
}
interface IAppState {
  mode: string,
  city: string,
  country: string,
  cityURL: string,
}

class App extends React.Component<IAppProp, IAppState> {
  public state = {
    mode: "liste",
    city: "",
    country: "",
    cityURL: "",
  };

  public activateDetailsView(city: string, country: string, cityURL: string) {
    this.setState({
      mode: "details",
      city: city,
      country: country,
      cityURL: cityURL,
    });
  }

  public activateListView() { // TODO
    this.setState({
      mode: "liste",
      city: "",
      country: "",
      cityURL: "",
    });
  }
  public render() {
      if(this.state.mode === "liste"){
        return <CitiesView activateDetails={this.activateDetailsView.bind(this)}></CitiesView>
      }
      else{
        return <div id="detailWrapper"><DetailedView city={this.state.city} country={this.state.country} cityURL={this.state.cityURL} activateListView={this.activateListView.bind(this)} />
        <WeeklyView city={this.state.city}/></div>
      } 
  }
}

export default App;
