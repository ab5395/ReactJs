import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as models from '../../models'
import * as Modal from 'react-modal'
import { createElement } from 'react';
//import { CreateEdit } from './CreateEdit'
//import { Details } from './Details'

interface ActorState {
    actor: models.Actor[];
    loading: boolean,
    showCreate: boolean,
    showEdit: boolean,
    showDetails: boolean,
    activeId: number
}

export class Actors extends React.Component<RouteComponentProps<{}>, ActorState> {
    constructor(props) {
        super(props);
        this.state = {
            actor: [],
            loading: true,
            showCreate: false,
            showEdit: false,
            showDetails: false,
            activeId: 0
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
            <button className="action" onClick={this.handleCreate.bind(this)}>Create</button>
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
                        <td>
                            <button className="action" onClick={this.handleDelete(this)}>Delete</button>
                            <button className="action" onClick={this.handleEdit(this)}>Edit</button>
                            <button className="action" onClick={this.handleDetails(this)}>Details</button>
                        </td>
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

    public handleCreate() {
        this.setState({ showCreate: true, showDetails: false, showEdit: false })
    }

    public handleEdit(id: number) {
        this.setState({ showEdit: true, showDetails: false, showCreate: false, activeId: id })
    }

    public handleDetails(id: number) {
        this.setState({ showDetails: true, showCreate: false, showEdit: false, activeId: id })
    }

    public handleDelete(id: number) {
        if (!confirm('Are you sure you want to delete this?'))
            return
        fetch('api/Actors/delete/' + id, { method: 'delete' })
            .then(data => {
                this.setState(
                    {
                        actor: this.state.actor.filter((rec) => {
                            return (rec.Id != id);
                        })
                    });
            });
    }

    private renderPopup() {
        if (!this.state.showCreate && !this.state.showDetails && !this.state.showEdit) {
            return null;
        }
        return <Modal
            isOpen={true}
            ContentLabel="Crawl">
            <button onClick={this.closeModal.bind(this)} className="action" title="Close">X</button>
            {this.renderPopContent()}
        </Modal>
    }

    private renderPopContent() {
        if (this.state.showCreate) {
            //return <CreateEdit id={null} dbaction="create" onSave="{this.handlePopupSave.bind(this)}"></CreateEdit>
        }
        if (this.state.showEdit) {
            //return <CreateEdit id={this.state.activeId} dbaction="create" onSave="{this.handlePopupSave.bind(this)}"></CreateEdit>
        }
        if (this.state.showDetails) {
            //return <Details id={this.state.activeId}></Details>
        }
    }

    public closeModal() {
        this.setState({ showDetails: false, showCreate: false, showEdit: false });
    }

    public handlePopupSave(success: boolean) {
        if (success)
            this.setState({ showCreate: false, showEdit: false });
    }
}

