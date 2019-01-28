import * as React from 'react';

import { Client } from '../models';
import { ClientsHeader } from './Header';
import { ClientsRow } from './Row';
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
        <h2 className="header">Client's Page</h2>
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