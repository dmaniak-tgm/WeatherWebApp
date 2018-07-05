import * as React from 'react';
import './City.css';

export interface IWeeklyViewProps {
    celsius: number,
    day: string
}

interface IWeeklyViewState {
    state: any;
}

export default class WeeklyView extends React.Component<IWeeklyViewProps, IWeeklyViewState>{
    constructor(props: IWeeklyViewProps) {
        super(props);
        this.state = {
            state: "",
        }
    }
}