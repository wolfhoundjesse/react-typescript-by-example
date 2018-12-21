import * as React from 'react';
import * as toastr from 'toastr';
import { History } from 'history';

import { clientAPI } from '../api';

import { Client } from '../models';
import { ClientsDetails } from './details';

interface State {
  client: Client;
}

interface Props { 
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
