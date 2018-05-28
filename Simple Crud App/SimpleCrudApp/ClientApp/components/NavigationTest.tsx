import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';


export class NavigationTest extends React.Component<RouteComponentProps<{}>> {
    constructor(props) {
        super(props);
    }

    public render() {
        return <div>
            <h1>Navigate to this Page.</h1>
            <h3>Test Navigation</h3>
        </div>;
    }
}  