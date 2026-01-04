import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'pawbay',
  location: 'us-east4'
};

export const createNewUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewUser', inputVars);
}
createNewUserRef.operationName = 'CreateNewUser';

export function createNewUser(dcOrVars, vars) {
  return executeMutation(createNewUserRef(dcOrVars, vars));
}

export const getMyListsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyLists');
}
getMyListsRef.operationName = 'GetMyLists';

export function getMyLists(dc) {
  return executeQuery(getMyListsRef(dc));
}

export const createNewWatchRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewWatch', inputVars);
}
createNewWatchRef.operationName = 'CreateNewWatch';

export function createNewWatch(dcOrVars, vars) {
  return executeMutation(createNewWatchRef(dcOrVars, vars));
}

export const getPublicMoviesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetPublicMovies');
}
getPublicMoviesRef.operationName = 'GetPublicMovies';

export function getPublicMovies(dc) {
  return executeQuery(getPublicMoviesRef(dc));
}

