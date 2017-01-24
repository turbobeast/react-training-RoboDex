
import { SET_SEARCH_TERM } from './constants';

export const setSearchTerm = (term) => ({ 
  type: SET_SEARCH_TERM,
  payload: term,
});

