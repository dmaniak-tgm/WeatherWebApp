import * as React from 'react';
import './DetailedView.css';
import weather from "yahoo-weather";

interface IDetailedViewProps {
    city: string,
    cityURL: string,
    activateListView:() => void
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
        if (!this.state) return (<div></div>);

        return (
            <div>
                <button id="back" className="btn btn-outline-warning" onClick={()=>{this.props.activateListView()}}>Back</button>
                <div className="col-sm-12">
                    <div id="details">
                        <img className="imgDetails" src={this.props.cityURL} alt="" />
                        <div id="innerdetails">
                            <h3 className="hDetails">{this.props.city}</h3>
                            <h3 className="hDetails">{this.state.tempInC[0]}° C</h3>
                            <h3 className="hDetails">{this.state.tempInC[1]}</h3>
                        </div>

                    </div>
                </div>
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