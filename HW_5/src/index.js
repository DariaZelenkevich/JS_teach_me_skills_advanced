'use strict'

import getDataFromAPI from './services/fetch';
import createPage from './components/pageContent';

getDataFromAPI.then(data => data.json()).then(data => createPage(data)).catch(error => console.log(error));
