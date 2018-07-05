import * as React from 'react';
import './City.css';

export interface ICityProps {
    name: string;
    src: string;
    activateDetails: (name: string) => void
}

interface ICityState {
    citystate: string;
}

export default class City extends React.Component<ICityProps, ICityState> {
    constructor(props: ICityProps) {
        super(props);
        this.state = {
            citystate: props.name
        }
    }

    public detailsCity = () => {
        // this.setState({
        //     citystate: this.props.name + (new Date).toUTCString(),
        // })
        alert('Click works');
    }

    public render() {
        return (
            <div className='col-sm-4 ' onClick={() => { this.props.activateDetails(this.state.citystate) }}>
                <div className="card ">
                    <img className='card-img-top' src={this.props.src} alt={this.props.src} />
                    <div className="card-body cBody" onClick={this.detailsCity}>
                        <h3 className="card-title display-4">{this.state.citystate}</h3>
                    </div>
                </div>
            </div>
        );
    }
}