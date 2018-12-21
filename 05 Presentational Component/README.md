# 05 Presentational Component

In this sample we will refactor the client component into three separate components: header, table and row components, and the client rows will be passed via props.

We will take a startup point sample _04 Display Data_.

## Summary

- Extract `ClientsHeader` as presentational component.
- Extract `ClientsRow` as presentational component.
- Update `ClientsPage` and rename it to `ClientsList`.


## Steps to build it

- Copy the content of the `04 DisplayData` folder to an empty folder for the sample.

- Install the npm packages described in the `package.json` and verify that it works:

 ```bash
 $ npm i
 ```

- Extract `ClientsHeader` as presentational component

### *[src/clients/header.tsx](./src/clients/header.tsx)*
```javascript
import * as React from 'react';

export const ClientsHeader: React.FunctionComponent<{}> = () => {
	return (
		<tr>
			<th>Id</th>
			<th>Name</th>
		</tr>
	)
}
```

- Extract `ClientsRow` as presentational component

### *[/src/clients/row.tsx](./src/clients/row.tsx)*
```javascript
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
```

- Update `ClientsPage`
- Rename to `ClientsList`.

### *[src/clients/list.tsx](./src/clients/list.tsx)*
```diff
import * as React from 'react';

import { Client } from '../models';
+ import { ClientsHeader } from './header';
+ import { ClientsRow } from './row';
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
-            <thead>{ClientHeader()}</thead>
+            <thead><ClientsHeader /></thead>
-           <tbody>{this.state.clients.map(ClientRow)}</tbody>
+           <tbody>{
+              this.state.clients.map(client =>
+                <ClientsRow
+                  key={client.id.toString()}
+                  client={client}
+                />
+              )
+            }
+            </tbody>
          </table>
        </div>
    );
  }
};

- const ClientHeader = () => {
-   return (
-     <tr>
-       <th>Id</th>
-       <th>Name</th>
-     </tr>
-   )
- };
- 
- const ClientRow = (client: Client) => {
-   return (
-     <tr key={client.id.toString()}>
-       <td>
-         <span>{client.id.toString()}</span>
-       </td>
-       <td>
-         <span>{client.lastName}, {client.firstName}</span>
-       </td>
-     </tr>
-   )
- }
```

- Execute the example

 ```bash
 $ npm start
 ```