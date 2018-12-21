import * as React from 'react';
import { Client } from '../models';
import { ClientsForm } from './form';

interface Props {
  client: Client;
  onChange: (fieldName: string, value: string) => void;
  onSave: () => void;
}

export const ClientsDetails: React.FunctionComponent<Props> = (props) => {
  return (
    <ClientsForm
      client={props.client}
      onChange={props.onChange}
      onSave={props.onSave}
    />
  );
}