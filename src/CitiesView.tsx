import * as React from 'react';
import City from 'src/City';
import './CitiesView.css';

class CitiesView extends React.Component {
    public render() {
        return <>
            <City name="Moskau " />
            <City name="Wien" />
            <City name="New York" />
        </>
    }
}

export default CitiesView;