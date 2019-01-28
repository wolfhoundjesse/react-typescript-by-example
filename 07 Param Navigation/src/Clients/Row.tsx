import * as React from 'react';
import { Link } from 'react-router-dom';
import { Client } from '../models';

interface Props {
  client: Client;
}

export const ClientsRow: React.FunctionComponent<Props> = ({ client }) => {
  return (
    <tr key={client.id.toString()}>
      <td>
        <Link to={`/clients/${client.id.toString()}`}>{client.id.toString()}</Link>
      </td>
      <td>
        <span>{client.lastName}, {client.firstName}</span>
      </td>
    </tr>
  );
};