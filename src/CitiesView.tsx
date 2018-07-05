import * as React from 'react';
import City from 'src/City';
import './CitiesView.css';

interface ICitiesViewProps {
    activateDetails: (city: string, cityURL: string) => void
}
class CitiesView extends React.Component<ICitiesViewProps> {
    private cities = [
        ["Moskau", "./Bilder/Moskau.jpg"],
        ["Wien", "./Bilder/Wien.jpg"],
        ["New York", "./Bilder/NewYork.jpg"],
    ];
    public render() {
        return <>
            <City 
                activateDetails={this.props.activateDetails.bind(this)} 
                name={this.cities[0][0]} 
                src={this.cities[0][1]} 
            />
            <City 
                activateDetails={this.props.activateDetails.bind(this)} 
                name={this.cities[1][0]} 
                src={this.cities[1][1]} 
            />
            <City 
                activateDetails={this.props.activateDetails.bind(this)}
                name={this.cities[2][0]}
                src={this.cities[2][1]}
            />
        </>
    }
}

export default CitiesView;