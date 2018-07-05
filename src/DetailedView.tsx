import * as React from 'react';
import './DetailedView.css';
import * as moment from 'moment-timezone';
import weather from "yahoo-weather";

interface IDetailedViewProps {
    city: string,
    country: string,
    cityURL: string,
}

interface IDetailedViewState {
    tempInC: number,
}

class DetailedView extends React.Component<IDetailedViewProps, IDetailedViewState> {
    constructor(props: IDetailedViewProps) {
        super(props);
        this.state = {
            tempInC: this.getTodaysTemp(),
        }
    }

    public render() {
        this.getTodaysDate();

        return (
            <div>
                hallo
                <img src={this.props.cityURL} height="150px" width="auto" />
                <h3>{this.props.city} ({this.props.country})</h3>
                <h3>{this.state.tempInC}° C</h3>
                <h3>{this.getTodaysDate()}</h3>
            </div>
        );
    }

    private getTodaysDate(): string {
        return moment()
            .tz(this.props.country + "/" + this.props.city)
            .format("DD.MM.YYYY HH:mm");
    }

    private getTodaysTemp(): number {
        weather(this.props.city, "c").then((data: any) => {
            this.setState({
                tempInC: data.item.forecast[0].high,
            });
        });

        return -1;
    }

}

export default DetailedView;