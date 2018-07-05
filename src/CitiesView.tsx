import * as React from 'react';
import City from 'src/City';
import './CitiesView.css';

interface ICitiesViewProps {
    activateDetails: (city: string, country: string, cityURL: string) => void
}
class CitiesView extends React.Component<ICitiesViewProps> {
    private cities = [
        ["Moskau", "Russland", "./Bilder/Moskau.jpg"],
        ["Wien", "Österreich", "./Bilder/Wien.jpg"],
        ["New York", "USA", "./Bilder/NewYork.jpg"],
    ];
    public render() {
        return <>
            <City 
                activateDetails={this.props.activateDetails.bind(this)} 
                name={this.cities[0][0]} 
                country={this.cities[0][1]} 
                src={this.cities[0][2]} 
            />
            <City 
                activateDetails={this.props.activateDetails.bind(this)} 
                name={this.cities[1][0]} 
                country={this.cities[1][1]} 
                src={this.cities[1][2]} 
            />
            <City 
                activateDetails={this.props.activateDetails.bind(this)}
                name={this.cities[2][0]} 
                country={this.cities[2][1]} 
                src={this.cities[2][2]}
            />
        </>
    }
}

export default CitiesView;