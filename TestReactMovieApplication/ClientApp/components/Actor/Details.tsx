import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as models from '../../models';

interface DetailsState {
    actor: models.Actor;
    loading: boolean;
}

interface DetailsProps {
    id: number
}

export class Details extends React.Component<DetailsProps, DetailsState> {
    constructor(props) {
        debugger;
        super(props);
        this.state = {
            actor: null,
            loading: true
        };
        debugger;
        fetch('api/Actors/' + this.props.id)
            .then(response => response.json() as Promise<models.Actor>)
            .then(data => {
                this.setState({
                    actor: data,
                    loading: false,
                });
            });
    }

    public render() {
        debugger;
        let Contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Details.renderDetails(this.state.actor);
        return <div>
            <h1>Actor Details</h1>
            {Contents}
        </div>;
    }

    private static renderDetails(item: models.Actor) {
        return <div className="details">
            <label>Id</label>
            <div>{item.Id}</div>
            <label>Name</label>
            <div>{item.Name}</div>
            <label>Gender</label>
            <div>{item.Gender}</div>
            <label>Age</label>
            <div>{item.Age}</div>
            <label>Picture</label>
            <div>{item.Picture}</div>
        </div>;
    }
}