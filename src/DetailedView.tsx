import * as React from 'react';
import './DetailedView.css';
import weather from "yahoo-weather";

interface IDetailedViewProps {
    city: string,
    country: string,
    cityURL: string,
}

interface IDetailedViewState {
    tempInC: [number, string], // temperature and date it was measured at
}

class DetailedView extends React.Component<IDetailedViewProps, IDetailedViewState> {
    constructor(props: IDetailedViewProps) {
        super(props);
        this.getTodaysTemp();

    }

    public render() {
        
        if(!this.state) {
            return(<div></div>);
        }

        return (
            <div>
                <img src={this.props.cityURL} height="150px" width="auto" />
                <h3>{this.props.city} ({this.props.country})</h3>
                <h3>{this.state.tempInC[0]}° C</h3>
                <h3>{this.state.tempInC[1]}</h3>
            </div>
        );
    }

    private getTodaysTemp(): void {
        weather(this.props.city, "c").then((data: any) => {
            let forecast = data.item.forecast[0]; 
            this.setState({
                tempInC: [forecast.high, forecast.date]
            });
        });
    }

}

export default DetailedView;