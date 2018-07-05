import * as React from 'react';
import './App.css';
import CitiesView from './CitiesView';
//import DetailedView from './DetailedView';
interface IAppProp {
}
interface IAppState {
  mode: string
}

class App extends React.Component<IAppProp, IAppState> {
  public state = {
    mode: "liste"
  };

  public activateDetailsView(name: string) {
    this.setState({
      mode: "details"
    });
  }

  public activateListView() {

  }
  public render() {
    return (
      this.state.mode === "liste" ?
        <CitiesView activateDetails={this.activateDetailsView.bind(this)}></CitiesView>
        :
        <div>,khjkk</div>
      //<DetailedView />
    );
  }
}

export default App;
