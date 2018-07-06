import * as React from 'react';
import City from 'src/City';
import './CitiesView.css';

interface ICitiesViewProps {
    activateDetails: (city: string, cityURL: string) => void;
}
class CitiesView extends React.Component<ICitiesViewProps> {
    private cities = [
        ["Moskau", "./Bilder/Moskau.jpg"],
        ["Wien", "./Bilder/Wien.jpg"],
        ["New York", "./Bilder/NewYork.jpg"],
    ];

    public render() {
        let comps = [];
        
        for(let i = 0; i < this.cities.length; i++) {
            comps.push(
                <City
                    activateDetails={this.props.activateDetails.bind(this)}
                    name={this.cities[i][0]}
                    src={this.cities[i][1]}
                />
            );
        }

        return(
            <>{comps}</>
        );
    }
}

export default CitiesView;