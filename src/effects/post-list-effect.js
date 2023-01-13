import { postLoadSuccessAction } from '../actions/posts';
import { getShoppingListItems } from '../services/shopping-list-items';

export const getPostEffect = async (dispatch) => {
  const posts = await getShoppingListItems();
  dispatch(postLoadSuccessAction(posts));
};
