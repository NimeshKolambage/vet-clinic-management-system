const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'pawbay',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createNewUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewUser', inputVars);
}
createNewUserRef.operationName = 'CreateNewUser';
exports.createNewUserRef = createNewUserRef;

exports.createNewUser = function createNewUser(dcOrVars, vars) {
  return executeMutation(createNewUserRef(dcOrVars, vars));
};

const getMyListsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyLists');
}
getMyListsRef.operationName = 'GetMyLists';
exports.getMyListsRef = getMyListsRef;

exports.getMyLists = function getMyLists(dc) {
  return executeQuery(getMyListsRef(dc));
};

const createNewWatchRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewWatch', inputVars);
}
createNewWatchRef.operationName = 'CreateNewWatch';
exports.createNewWatchRef = createNewWatchRef;

exports.createNewWatch = function createNewWatch(dcOrVars, vars) {
  return executeMutation(createNewWatchRef(dcOrVars, vars));
};

const getPublicMoviesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetPublicMovies');
}
getPublicMoviesRef.operationName = 'GetPublicMovies';
exports.getPublicMoviesRef = getPublicMoviesRef;

exports.getPublicMovies = function getPublicMovies(dc) {
  return executeQuery(getPublicMoviesRef(dc));
};
