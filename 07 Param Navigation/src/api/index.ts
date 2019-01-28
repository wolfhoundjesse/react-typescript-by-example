import { Guid } from 'guid-typescript';

import { Client } from '../models';
import { clients } from './mock-data';

let mockClients = clients;

const fetchClients = (): Promise<Client[]> => {
  return Promise.resolve(mockClients);
};

const fetchClientById = (id: Guid): Promise<Client> => {
  const client = mockClients.find(client => client.id.equals(id));

  return Promise.resolve(client);
}

const saveClient = (client: Client): Promise<boolean> => {
  const index = mockClients.findIndex(c => c.id === client.id);

  index >= 0 ?
    updateClient(client, index) :
    insertClient(client);

  return Promise.resolve(true);
};

const updateClient = (client: Client, index: number) => {
  mockClients = [
    ...mockClients.slice(0, index),
    client,
    ...mockClients.slice(index + 1)
  ];
};

const insertClient = (client: Client) => {
  client.id = Guid.create();

  mockClients = [
    ...mockClients,
    client,
  ];
};

export const clientAPI = {
  fetchClients,
  fetchClientById,
  saveClient
};