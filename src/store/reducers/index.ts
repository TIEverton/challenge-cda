import { combineReducers } from 'redux';

import { penal } from './penalcode';
import { authenticated } from './authenticated';

export default combineReducers({
  penal,
  authenticated
})