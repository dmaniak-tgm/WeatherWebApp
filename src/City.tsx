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
            <div className='col-sm-4 '>
                <div className="card ">
                    <img className='card-img-top' src='http://kidzfunparties.com/wp-content/uploads/2016/05/sun-clipart.png' alt='Card image cap'/>
                    <div className="card-body cBody" onClick={this.detailsCity}>
                        <h5 className="card-title">{this.state.citystate}</h5>
                    </div>
                </div>
            </div>
        );
    }
}