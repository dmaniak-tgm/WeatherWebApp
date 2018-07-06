import * as React from 'react';
import './WeeklyView.css';
import weather from "yahoo-weather";

export interface IWeeklyViewProps {
    city: string,

}

interface IWeeklyViewState {
    days:[string],
    celsius:[string]
}

export default class WeeklyView extends React.Component<IWeeklyViewProps, IWeeklyViewState>{
    constructor(props: IWeeklyViewProps) {
        super(props);
        this.state = {
            days:[""],
            celsius: [""],
        }
        this.getForecast();
        
    }

    render(){
        console.log(this.state);
        if(!this.state.days||!this.state.celsius||!this.state) return(<div></div>)
        return(
            <div className="col-sm-12">
                <h1>{this.state.days[0]}+{this.state.celsius[0]}</h1>
            </div>
        );
    }

    private getForecast(): void {
        weather(this.props.city, "c").then((data: any) => {
            let forecast = data.item.forecast; 
            this.setState({
                days: forecast.date,
                celsius: forecast.high
            });
        });
    }
}