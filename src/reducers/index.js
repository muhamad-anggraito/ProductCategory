import {combineReducers} from 'redux';
import activeCategory from './activeCategory';

import categoryList from './categoryList';

export default combineReducers({
  category: categoryList,
  activeCategory: activeCategory,
});
