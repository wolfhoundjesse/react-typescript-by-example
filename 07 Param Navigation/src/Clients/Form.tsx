import * as React from 'react';
import { Client } from '../models';
import { Input, Button } from '../common';

interface Props {
  client: Client;
  onChange: (fieldName: string, value: string) => void;
  onSave: () => void;
}

export const ClientsForm: React.FunctionComponent<Props> = (props) => {
  
  return (
    <form className="wrapper">
      <h1 className="header">Manage Client</h1>
      <div className="content">
        <Input
          name="firstName"
          label="First Name"
          value={props.client.firstName}
          onChange={props.onChange}
          />

        <Input
          name="lastName"
          label="Last Name"
          value={props.client.lastName}
          onChange={props.onChange}
          />

        <Button
          label="Save"
          className="btn btn-default"
          onClick={props.onSave}
          />
        </div>
    </form>
  );
};