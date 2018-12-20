import * as React from 'react';
import { Client } from '../models';

interface Props {
  client: Client;
}

export const ClientsRow: React.FunctionComponent<Props> = ({ client }) => {
  return (
    <tr key={client.id.toString()}>
      <td>
        <span>{client.id.toString()}</span>
      </td>
      <td>
        <span>{client.lastName}, {client.firstName}</span>
      </td>
    </tr>
  );
};