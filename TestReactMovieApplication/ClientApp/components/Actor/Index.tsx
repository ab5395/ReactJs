import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as models from '../../models'

interface ActorState {
    actor: models.Actor[]
    loading: boolean
}

export class Actors extends React.Component<RouteComponentProps<{}>, ActorState> {
    constructor(props) {
        super(props);
        this.state = {
            actor: [],
            loading: true
        };
        fetch('api/Actors/Index')
            .then(response => response.json() as Promise<models.Actor[]>)
            .then(data => {
                this.setState({
                    actor: data,
                    loading: false,
                });
            });
    }
    public render() {
        let Contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderTable(this.state.actor);
        return <div>
            <h1>Actor</h1>
            {Contents}
        </div>;
    }

    private renderTable(actor: models.Actor[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th></th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Picture</th>
                </tr>
            </thead>
            <tbody>
                {actor.map(item =>
                    <tr key={item.Id}>
                        <td></td>
                        <td>{item.Id}</td>
                        <td>{item.Name}</td>
                        <td>{item.Gender}</td>
                        <td>{item.Age}</td>
                        <td>{item.Picture}</td>
                    </tr>
                    )}
            </tbody>
        </table>
    }
}

