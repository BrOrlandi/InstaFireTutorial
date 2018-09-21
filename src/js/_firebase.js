import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

import config from './config';

firebase.initializeApp(config);

const database = firebase.database();

export const rebase = Rebase.createClass(database);

export default firebase;
