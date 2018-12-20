# 04 DisplayData

In this sample we will create a read only list component that receives a list of clients from a fake API.

We will take a startup point sample _03 Navigation_.

## Summary

- Create `Client model`.
- Create an `API` to work with some `mock-data`.
- Update `ClientsPage`.

## Steps to Build It

- Copy the content of the `03 Navigation` folder to an empty folder for the sample.

- Install the npm packages described in the `package.json` and verify that it works:

 ```bash
 $ npm i
 ```

- Create a `Client model`

Before we create our model, let's install `guid-typescript` to use as the type for `id`.

```bash
npm i -D guid-typescript
```

### *[src/model/client.model.ts](./src/model/client.model.ts)*
```javascript
import { Guid } from 'guid-typescript';

export interface Client {
  id: Guid;
  lastName: string;
  firstName: string;
}
```

- And its `index.ts`:

### *[src/models/index.ts](./src/models/index.ts)*
```javascript
export * from './client.model';
```

- Create `mock data`:

### *[src/api/mock-data.ts](./src/api/mock-data.ts)*
```javascript
import { Guid } from 'guid-typescript';

import { Client } from '../models';


export const members: Client[] =
  [
    {
      id: Guid.create(),
      lastName: 'Lovelace',
      firstName: 'Ada'
    },
    {
      id: Guid.create(),
      lastName: 'Turing',
      firstName: 'Alan'
    }
  ];
```
- Create an `API`:

### *[src/api/index.ts](./src/api/index.ts)*
```javascript
import { Client } from '../models';
import { clients } from './mock-data';

const fetchClients = (): Promise<Client[]> => {
  return Promise.resolve(clients);
};

export const clientAPI = {
  fetchClients,
};
```

- Update `ClientsPage`:

### *[src/clients/clients.tsx](./src/clients/clients.tsx)*
```diff
import * as React from 'react';
+ import { Client } from '../models';
+ import { clientAPI } from '../api/member';
+
+ interface State {
+   clients: Client[];
+ }
+
+ interface Props { }
- export const ClientsPage: React.FunctionComponent<{}> = () => {
-  return (
-    <div className="wrapper">
-      <h1 className="header jumbotron text-center mb-2">
-          Clients
-      </h1>
-      <div className="content">
-        <h3 className="text-justify">
-          <small>
-            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique laborum obcaecati facilis adipisci consectetur aperiam. Repudiandae, modi ducimus quae, non nam minima expedita alias corporis unde in vero ut minus!
-            Dolorem quia dicta temporibus facere reiciendis, totam, consectetur quo debitis autem assumenda ipsa nam commodi error atque dolore explicabo repellendus voluptate? Doloremque ducimus eius at molestiae soluta veritatis debitis unde!
-            Dicta asperiores soluta odit, quae, dolore libero, accusantium rem voluptatem beatae expedita dolor. Labore eos suscipit et aliquam sit saepe eligendi necessitatibus illum! Doloremque veritatis minus sunt facere explicabo magni.
-            Sunt veniam, ea harum numquam totam explicabo perferendis unde libero! Molestias assumenda voluptate doloribus sapiente, rem dolores labore magnam incidunt accusantium dignissimos tempore tenetur perspiciatis aspernatur eius cum mollitia placeat.
-           </small>
-         </h3>
-       </div>
-     </div>
-   );
- }

+ export class ClientsPage extends React.Component<Props, State> {
+  constructor(props) {
+    super(props);
+    this.state = { clients: [] };
+  }
+
+  public componentDidMount() {
+    clientAPI.fetchClients()
+      .then((clients) => {
+        this.setState({ clients });
+      });
+  };
+
+  public render() {
+    return (
+      <div className="container-fluid">
+          <h2>Client's Page</h2>
+          <table className="table">
+            <thead>{ClientHeader()}</thead>
+            <tbody>{this.state.clients.map(ClientRow)}</tbody>
+          </table>
+        </div>
+     );
+   }
+ };
+
+ const ClientHeader = () => {
+   return (
+     <tr>
+       <th>Id</th>
+       <th>Name</th>
+     </tr>
+   )
+ };
+
+ const ClientRow = (client: Client) => {
+   return (
+     <tr key={client.id.toString()}>
+       <td>
+         <span>{client.id}</span>
+       </td>
+       <td>
+         <span>{client.lastName}, {client.firstName}</span>
+       </td>
+     </tr>
+   )
+ }
```
- Execute the example:

 ```bash
 $ npm start
 ```