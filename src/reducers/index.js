import { combineReducers } from 'redux';
import { item, itemHasErrored, itemIsLoading } from './items';

export default combineReducers({
  item,
  itemHasErrored,
  itemIsLoading
});