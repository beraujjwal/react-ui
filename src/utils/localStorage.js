const avatarImg = process.env.REACT_APP_ASSETS_BUCKET + '/avatars/avatar5.webp';

export const persistToken = (token) => {
  localStorage.setItem('accessToken', JSON.stringify(token));
};

export const readToken = () => {
  let accessToken = localStorage.getItem('accessToken');
  if(accessToken) accessToken =  JSON.parse(accessToken);
  return accessToken?.accessToken;
};

export const persistUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const readUser = () => {
  let user = localStorage.getItem('user');
  if(user) user =  JSON.parse(user);
  return user;
};

export const deleteToken = () => localStorage.removeItem('accessToken');
export const deleteUser = () => localStorage.removeItem('user');
