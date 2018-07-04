import * as React from 'react';
import './City.css';

export interface ICityProps {
    name: string;
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
            <div className='col-md-4'>
                <div className="card">
                    <div className="card-body cds" onClick={this.detailsCity}>
                        <h5 className="card-title">title</h5>
                        <p className="card-text">{this.state.citystate}</p>

                    </div>
                </div>
            </div>
        );
    }
}