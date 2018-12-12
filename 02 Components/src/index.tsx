import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/dist/pulse/bootstrap.css';
import './styles/site.scss';

import { App } from './app';

ReactDOM.render(
	<App />,
	document.getElementById('root')
);