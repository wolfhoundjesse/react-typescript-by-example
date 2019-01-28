import * as React from 'react';

import { Client } from '../models';
import { clientAPI } from '../api';

interface State {
 clients: Client[]
}

interface Props { }

export class ClientsPage extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { clients: [] };
  }

  public componentDidMount() {
    clientAPI.fetchClients()
      .then((clients) => {
        this.setState({ clients });
      });
  };

  public render() {
    return (
      <div className="wrapper">
          <h2 className="header">Client's Page</h2>
          <table className="table content">
            <thead>{ClientHeader()}</thead>
            <tbody>{this.state.clients.map(ClientRow)}</tbody>
          </table>
        </div>
    );
  }
};

const ClientHeader = () => {
  return (
    <tr>
      <th>Id</th>
      <th>Name</th>
    </tr>
  )
};

const ClientRow = (client: Client) => {
  return (
    <tr key={client.id.toString()}>
      <td>
        <span>{client.id.toString()}</span>
      </td>
      <td>
        <span>{client.lastName}, {client.firstName}</span>
      </td>
    </tr>
  )
}