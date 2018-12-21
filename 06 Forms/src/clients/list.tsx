import * as React from 'react';
import { Link } from 'react-router-dom';

import { Client } from '../models';
import { ClientsHeader } from './header';
import { ClientsRow } from './row';
import { clientAPI } from '../api';

interface State {
  clients: Client[]
}

interface Props { }

export class ClientsList extends React.Component<Props, State> {
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
        <div className="header">
          <h2>Client's Page</h2>
          <Link to="clients/details">New Client</Link>
        </div>
        <table className="table content">
          <thead><ClientsHeader /></thead>
          <tbody>{
            this.state.clients.map(client =>
              <ClientsRow
                key={client.id.toString()}
                client={client}
              />
            )
          }
          </tbody>
        </table>
      </div>
    );
  }
};