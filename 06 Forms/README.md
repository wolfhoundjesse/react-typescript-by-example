# 06 Form

In this sample we will add a link to the `ClientsList` component that will navigate to a "new client page". This new page will display a form where you enter the first and last name of a new client.

We will take a startup point sample *05 Presentational Component*.

## Summary

- Install `toastr` and typings
- Create `ClientsDetails` components
- Add new route to `ClientsDetails`
- Add link for navigation.
- Create common `form components`.
- Create `MemberForm component`.
- Update `Member Page`.
- Create `Member Page container`.
- Add save method in `member API`.

## Steps to build it

- Copy the content of the `06 Forms` folder to an empty folder for the sample.

- Install the npm packages described in the `package.json` and verify that it works:

 ```bash
 $ npm i
 ```

- Install `toastr` and typings to show toast when save form changes:

```bash
npm i toastr
npm i -D @types/toastr
```

- Import `toastr` styles into `index.tsx`

### *[src/index.tsx](./src/index.tsx)*

```diff
   import * as React from 'react';
   import * as ReactDOM from 'react-dom';
   
   import 'bootstrap/dist/css/bootstrap.css';
   import 'bootswatch/dist/pulse/bootstrap.css';
+  import 'toastr/build/toastr.css';
   import './styles/site.scss';
   
   import { AppRouter } from './router';
   
       ReactDOM.render(
           <AppRouter />,
           document.getElementById('root')
       );
```

- Create `ClientsDetails` component:

### *[src/clients/details.tsx](./src/clients/details.tsx)*
```javascript
import * as React from 'react';

export const ClientsDetails: React.FunctionComponent<{}> = () => {
  return (
    <div className="row">
      <h2>Client Details</h2>
    </div>
  );
}
```

- Update `index.ts`

### *[src/clients/index.ts](./src/clients/index.ts)*
```diff
  export * from './list';
+ export * from './details';
```

- Add new route to `ClientsDetails`

### *[src/router.tsx](./src/router.tsx)*
```diff
   import * as React from 'react';
   import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
   import { App } from './app';
   import { AboutPage } from './about';
-  import { ClientsList } from './clients';
+  import { ClientsList, ClientsDetails } from './clients';
   
   export const AppRouter: React.FunctionComponent<{}> = () => {
     return (
       <Router>
         <React.Fragment>
           <Route component={App} />
           <Switch>
             <Route exact path="/" component={AboutPage} />
             <Route path="/about" component={AboutPage} />
-            <Route path="/clients" component={ClientsList} />
+            <Route exact path="/clients" component={ClientsList} />
+            <Route exact path="/clients/details" component={ClientsDetails} />
           </Switch>
         </React.Fragment>
       </Router>
     );
   }
```

- Add a link for navigation:

### *[src/clients/list.tsx](./src/clients/list.tsx)*
```diff
  import * as React from 'react';
+ import { Link } from 'react-router-dom';
+ 
  import { Client } from '../models';
  import { ClientsHeader } from './header';
  import { ClientsRow } from './row';
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
+         <div className="header">
            <h2>Client's Page</h2>
+           <Link to="clients/details">New Client</Link>
+         </div>
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
```

- It's time to build a form that will contain the data to be edited, we will define it using some special Id's to  make it easier to get the properties updated. Let's start by creating a common input component.

### *[src/common/input.tsx](./src/common/input.tsx)*

```javascript
import * as React from "react";

interface Props {
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (fieldName: string, value: string) => void;
  error?: string;
}

export const Input: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={formatWrapperClass(props)}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className="field">
        <input type="text"
          name={props.name}
          className="form-control"
          placeholder={props.placeholder}
          value={props.value}
          onChange={onChangeInput(props)}
        />
      </div>
      <div className="help-block">{props.error}</div>
    </div>
  )
};

const formatWrapperClass = (props: Props) => {
  const wrapperClass = 'form-group';

  return props.error ?
    `${wrapperClass} has-error` :
    wrapperClass;
};

const onChangeInput = (props: Props) => (e: React.ChangeEvent<HTMLInputElement>) => {
  props.onChange(e.target.name, e.target.value);
};

```

### *[src/common/button.tsx](./src/common/button.tsx)*

```javascript
import * as React from 'react';

interface Props {
  label: string;
  className: string;
  onClick: () => void;
}

export const Button: React.FunctionComponent<Props> = (props) => {

  return (
    <button type="button"
      className={props.className}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

```

- Update `index.ts`

### ./src/common/index.ts
```diff
+  export * from './button';
   export * from './header';
+  export * from './input';
```

- Create `ClientsForm component`

### *[src/clients/form.tsx](./src/clients/form.tsx)*
```javascript
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
```

- Update `ClientsList`:

### *[src/clients/list.tsx](./src/clients/list.tsx)*
```diff
   import * as React from 'react';
+  import { Client } from '../models';
+  import { ClientsForm } from './form';
   
+  interface Props {
+    client: Client;
+    onChange: (fieldName: string, value: string) => void;
+    onSave: () => void;
+  }
-  export const ClientsDetails: React.FunctionComponent<{}> = () => {
+  export const ClientsDetails: React.FunctionComponent<Props> = (props) => {
     return (
-      <div className="row">
-        <h2>Client Details</h2>
-      </div>
+      <ClientsForm
+        client={props.client}
+        onChange={props.onChange}
+        onSave={props.onSave}
+      />
     );
   }
```

- Create `ClientsContainer` component

### *[src/clients/container.tsx](./src/clients/container.tsx)*
```javascript
import * as React from 'react';
import { Client } from '../models';
import { ClientsDetails } from './details';

interface State {
  client: Client;
}

interface Props { }

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

  private onSave() {
    console.log('save');
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
```
- Update `index.ts`

### *[src/clients/index.ts](./src/clients/index.ts)*
```diff
+  export * from './container';
   export * from './details';
   export * from './list';
```

- And `router.tsx`

### *[src/router.tsx](./src/router.tsx)*
```diff
   import * as React from 'react';
   import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
   import { App } from './app';
   import { AboutPage } from './about';
-  import { ClientsList, ClientsDetails } from './clients';
+  import { ClientsContainer, ClientsList } from './clients';
   
   export const AppRouter: React.FunctionComponent<{}> = () => {
     return (
       <Router>
         <React.Fragment>
           <Route component={App} />
           <Switch>
             <Route exact path="/" component={AboutPage} />
             <Route path="/about" component={AboutPage} />
             <Route exact path="/clients" component={ClientsList} />
-            <Route exact path="/clients/details" component={ClientsDetails} />
+            <Route exact path="/clients/details" component={ClientsContainer} />
           </Switch>
         </React.Fragment>
       </Router>
     );
   }
```

- Add `save method` in `API`

### *[src/api/index.ts](./src/api/index.ts)*
```diff
   import { Client } from '../models'; 
   import { clients } from './mock-data';

+  let mockClients = clients;

   const fetchClients = (): Promise<Client[]> => {
-    return Promise.resolve(clients);
+    return Promise.resolve(mockClients);
   };

   export const clientAPI = {
     fetchClients,
   };

+  const saveClient = (client: Client): Promise<boolean> => {
+    const index = mockClients.findIndex(c => c.id === client.id);
+
+    index >= 0 ?
+      updateClient(client, index) :
+      insertClient(client);
+
+     return Promise.resolve(true);
+   };
+
+  const updateClient = (client: Client, index: number) => {
+    mockClients = [
+     ...mockClients.slice(0, index),
+     client,
+     ...mockClients.slice(index + 1),
+    ];
+  };
+
+  const insertClient = (client: Client) => {
+    client.id = Guid.create();

+    mockClients = [
+      ...mockClients,
+      client,
+    ];
+  };


   export const memberAPI = {
     fetchMembers,
+    saveMember,
   };
```

- Update `ClientContainer` component

### *[src/clients/container.tsx](./src/clients/container.tsx)*
```diff
import * as React from 'react';
+ import * as toastr from 'toastr';
+ import { memberAPI } from '../../api/member';
+ import { History } from 'history';
import { MemberEntity } from '../../model';
import { MemberPage } from './page';

...

+ interface Props {
+   history: History;
+ }


- export class MemberPageContainer extends React.Component<{}, State> {
+ export class MemberPageContainer extends React.Component<Props, State> {


+  private onSave = () => {
-   console.log('save');
+   memberAPI.saveMember(this.state.member)
+     .then(() => {
+       toastr.success('Member saved.');
+       this.props.history.goBack();
+     });
  }

  ...

  render() {
    return (
      <MemberPage
        member={this.state.member}
        onChange={this.onFieldValueChange}
        onSave={this.onSave}
      />
    );
  }
}

```

- Execute the example:

 ```bash
 $ npm start
 ```