import * as React from 'react';
import City from 'src/City';
import './CitiesView.css';

interface ICitiesViewProps {
    activateDetails: (name: string) => void
}
class CitiesView extends React.Component<ICitiesViewProps> {
    //private cities = [];
    public render() {
        return <>
            <City activateDetails={this.props.activateDetails.bind(this)} name="Moskau" src="./Bilder/Moskau.jpg" />
            <City activateDetails={this.props.activateDetails.bind(this)} name="Wien" src="./Bilder/Wien.jpg" />
            <City activateDetails={this.props.activateDetails.bind(this)} name="New York" src="./Bilder/NewYork.jpg" />
        </>
    }
}

export default CitiesView;