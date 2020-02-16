import {UPDATE_USERNAME} from './types';

export const updateName = (nameUser) => ({
  type: UPDATE_USERNAME,
  nameUser
});
