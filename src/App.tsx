import * as React from 'react';
import './App.css';
import CitiesView from './CitiesView';
import DetailedView from './DetailedView';

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
      mode: "details",
      city: "",
      country: "",
      cityURL: "",
    });
  }
  public render() {
    return (
      this.state.mode === "liste" ?
        <CitiesView activateDetails={this.activateDetailsView.bind(this)}></CitiesView>
        :
        <DetailedView city={this.state.city} country={this.state.country} cityURL={this.state.cityURL} /> // TODO make it dynamic
      );
  }
}

export default App;
