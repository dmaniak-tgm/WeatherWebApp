import * as React from 'react';
import './WeeklyView.css';
import weather from "yahoo-weather";

export interface IWeeklyViewProps {
    city: string,
}

interface IWeeklyViewState {
    days: Array<string>,
    celsius: Array<string>,
}

export default class WeeklyView extends React.Component<IWeeklyViewProps, IWeeklyViewState>{
    constructor(props: IWeeklyViewProps) {
        super(props);
        this.state = {
            days: [],
            celsius: [],
        }
        this.getForecast();

    }

    render() {
        if (!this.state.days || !this.state.celsius || !this.state) return (<div></div>);

        let show = [];

        for (let i = 0; i < 5; i++) {
            if (i == 0) {
                show.push(
                    <div className="col-sm-2 offset-sm-1">
                        <h1>{this.state.celsius[i] + '°C'}</h1>
                        <br />
                        <p>{this.state.days[i]}</p>
                    </div>
                );
            }
            else {
                show.push(
                    <div className="col-sm-2">
                        <h1>{this.state.celsius[i] + '°C'}</h1>
                        <br />
                        <p>{this.state.days[i]}</p>
                    </div>
                );
            }
        }

        return (
            <div id="weekRow" className="row">{show}</div>
        )
    }

    private getForecast(): void {
        weather(this.props.city, "c").then((data: any) => {
            let forecast = data.item.forecast;
            let arrDay: Array<string> = [];
            let arrHigh: Array<string> = [];

            for (let i = 1; i < 6; i++) {
                arrDay.push(forecast[i].date); console.log(forecast[i].date);
                arrHigh.push(forecast[i].high);
            };

            this.setState({
                days: arrDay,
                celsius: arrHigh,
            });
        });
    }
}