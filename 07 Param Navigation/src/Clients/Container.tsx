import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as toastr from 'toastr';
import { History } from 'history';
import { Guid } from 'guid-typescript';

import { clientAPI } from '../api';

import { Client } from '../models';
import { ClientsDetails } from './details';

interface State {
  client: Client;
}

interface Params {
  id: string;
}

interface Props extends RouteComponentProps<Params> { 
  history: History;
}

export class ClientsContainer extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      client: {
        id: null,
        firstName: '',
        lastName: ''
      }
    };
  }

  private onFieldValueChange = (fieldName: string, value: string) => {
    const nextState = {
      ...this.state,
      client: {
        ...this.state.client,
        [fieldName]: value,
      }
    };

    this.setState(nextState);
  }

  public componentDidMount() {
    if(this.props.match.url !== '/clients/add-client') {
      const clientId = Guid.parse(this.props.match.params.id);
        clientAPI.fetchClientById(clientId)
        .then(client => {
          this.setState({
            ...this.state,
            client
          })
        })
      }
  }

  private onSave = () => {
    clientAPI.saveClient(this.state.client)
      .then(() => {
        toastr.success('Client Saved');
        this.props.history.goBack();
      });
  }

  render() {
    return (
      <ClientsDetails
        client={this.state.client}
        onChange={this.onFieldValueChange}
        onSave={this.onSave}
      />
    );
  }
}
