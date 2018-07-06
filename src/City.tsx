import * as React from 'react';
import './City.css';

export interface ICityProps {
    name: string;
    src: string;
    activateDetails: (city: string, cityURL: string) => void;
}
interface ICityState {}

export default class City extends React.Component<ICityProps, ICityState> {
    constructor(props: ICityProps) {
        super(props);
    }

    public render() {
        return(
            <div className="col-sm-4" 
                 onClick={() => this.props.activateDetails(this.props.name, this.props.src)}>
                <div className="card">
                    <img className="card-img-top" src={this.props.src} alt={this.props.src} />
                    <div className="card-body cBody">
                        <h3 className="card-title display-4">{this.props.name}</h3>
                    </div>
                </div>
            </div>
        );
    }
}