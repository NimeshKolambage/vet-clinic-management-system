# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetMyLists*](#getmylists)
  - [*GetPublicMovies*](#getpublicmovies)
- [**Mutations**](#mutations)
  - [*CreateNewUser*](#createnewuser)
  - [*CreateNewWatch*](#createnewwatch)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetMyLists
You can execute the `GetMyLists` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyLists(): QueryPromise<GetMyListsData, undefined>;

interface GetMyListsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyListsData, undefined>;
}
export const getMyListsRef: GetMyListsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyLists(dc: DataConnect): QueryPromise<GetMyListsData, undefined>;

interface GetMyListsRef {
  ...
  (dc: DataConnect): QueryRef<GetMyListsData, undefined>;
}
export const getMyListsRef: GetMyListsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyListsRef:
```typescript
const name = getMyListsRef.operationName;
console.log(name);
```

### Variables
The `GetMyLists` query has no variables.
### Return Type
Recall that executing the `GetMyLists` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyListsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMyListsData {
  lists: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    public: boolean;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & List_Key)[];
}
```
### Using `GetMyLists`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyLists } from '@dataconnect/generated';


// Call the `getMyLists()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyLists();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyLists(dataConnect);

console.log(data.lists);

// Or, you can use the `Promise` API.
getMyLists().then((response) => {
  const data = response.data;
  console.log(data.lists);
});
```

### Using `GetMyLists`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyListsRef } from '@dataconnect/generated';


// Call the `getMyListsRef()` function to get a reference to the query.
const ref = getMyListsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyListsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.lists);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.lists);
});
```

## GetPublicMovies
You can execute the `GetPublicMovies` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getPublicMovies(): QueryPromise<GetPublicMoviesData, undefined>;

interface GetPublicMoviesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetPublicMoviesData, undefined>;
}
export const getPublicMoviesRef: GetPublicMoviesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getPublicMovies(dc: DataConnect): QueryPromise<GetPublicMoviesData, undefined>;

interface GetPublicMoviesRef {
  ...
  (dc: DataConnect): QueryRef<GetPublicMoviesData, undefined>;
}
export const getPublicMoviesRef: GetPublicMoviesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getPublicMoviesRef:
```typescript
const name = getPublicMoviesRef.operationName;
console.log(name);
```

### Variables
The `GetPublicMovies` query has no variables.
### Return Type
Recall that executing the `GetPublicMovies` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetPublicMoviesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetPublicMoviesData {
  movies: ({
    id: UUIDString;
    title: string;
    year: number;
    summary?: string | null;
    genres?: string[] | null;
    runtime?: number | null;
  } & Movie_Key)[];
}
```
### Using `GetPublicMovies`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getPublicMovies } from '@dataconnect/generated';


// Call the `getPublicMovies()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getPublicMovies();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getPublicMovies(dataConnect);

console.log(data.movies);

// Or, you can use the `Promise` API.
getPublicMovies().then((response) => {
  const data = response.data;
  console.log(data.movies);
});
```

### Using `GetPublicMovies`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getPublicMoviesRef } from '@dataconnect/generated';


// Call the `getPublicMoviesRef()` function to get a reference to the query.
const ref = getPublicMoviesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getPublicMoviesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.movies);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.movies);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateNewUser
You can execute the `CreateNewUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNewUser(vars: CreateNewUserVariables): MutationPromise<CreateNewUserData, CreateNewUserVariables>;

interface CreateNewUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewUserVariables): MutationRef<CreateNewUserData, CreateNewUserVariables>;
}
export const createNewUserRef: CreateNewUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNewUser(dc: DataConnect, vars: CreateNewUserVariables): MutationPromise<CreateNewUserData, CreateNewUserVariables>;

interface CreateNewUserRef {
  ...
  (dc: DataConnect, vars: CreateNewUserVariables): MutationRef<CreateNewUserData, CreateNewUserVariables>;
}
export const createNewUserRef: CreateNewUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNewUserRef:
```typescript
const name = createNewUserRef.operationName;
console.log(name);
```

### Variables
The `CreateNewUser` mutation requires an argument of type `CreateNewUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateNewUserVariables {
  displayName: string;
  email?: string | null;
}
```
### Return Type
Recall that executing the `CreateNewUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNewUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNewUserData {
  user_insert: User_Key;
}
```
### Using `CreateNewUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNewUser, CreateNewUserVariables } from '@dataconnect/generated';

// The `CreateNewUser` mutation requires an argument of type `CreateNewUserVariables`:
const createNewUserVars: CreateNewUserVariables = {
  displayName: ..., 
  email: ..., // optional
};

// Call the `createNewUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNewUser(createNewUserVars);
// Variables can be defined inline as well.
const { data } = await createNewUser({ displayName: ..., email: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNewUser(dataConnect, createNewUserVars);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createNewUser(createNewUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateNewUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNewUserRef, CreateNewUserVariables } from '@dataconnect/generated';

// The `CreateNewUser` mutation requires an argument of type `CreateNewUserVariables`:
const createNewUserVars: CreateNewUserVariables = {
  displayName: ..., 
  email: ..., // optional
};

// Call the `createNewUserRef()` function to get a reference to the mutation.
const ref = createNewUserRef(createNewUserVars);
// Variables can be defined inline as well.
const ref = createNewUserRef({ displayName: ..., email: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNewUserRef(dataConnect, createNewUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## CreateNewWatch
You can execute the `CreateNewWatch` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNewWatch(vars: CreateNewWatchVariables): MutationPromise<CreateNewWatchData, CreateNewWatchVariables>;

interface CreateNewWatchRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewWatchVariables): MutationRef<CreateNewWatchData, CreateNewWatchVariables>;
}
export const createNewWatchRef: CreateNewWatchRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNewWatch(dc: DataConnect, vars: CreateNewWatchVariables): MutationPromise<CreateNewWatchData, CreateNewWatchVariables>;

interface CreateNewWatchRef {
  ...
  (dc: DataConnect, vars: CreateNewWatchVariables): MutationRef<CreateNewWatchData, CreateNewWatchVariables>;
}
export const createNewWatchRef: CreateNewWatchRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNewWatchRef:
```typescript
const name = createNewWatchRef.operationName;
console.log(name);
```

### Variables
The `CreateNewWatch` mutation requires an argument of type `CreateNewWatchVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateNewWatchVariables {
  movieId: UUIDString;
  watchDate: DateString;
  location?: string | null;
}
```
### Return Type
Recall that executing the `CreateNewWatch` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNewWatchData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNewWatchData {
  watch_insert: Watch_Key;
}
```
### Using `CreateNewWatch`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNewWatch, CreateNewWatchVariables } from '@dataconnect/generated';

// The `CreateNewWatch` mutation requires an argument of type `CreateNewWatchVariables`:
const createNewWatchVars: CreateNewWatchVariables = {
  movieId: ..., 
  watchDate: ..., 
  location: ..., // optional
};

// Call the `createNewWatch()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNewWatch(createNewWatchVars);
// Variables can be defined inline as well.
const { data } = await createNewWatch({ movieId: ..., watchDate: ..., location: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNewWatch(dataConnect, createNewWatchVars);

console.log(data.watch_insert);

// Or, you can use the `Promise` API.
createNewWatch(createNewWatchVars).then((response) => {
  const data = response.data;
  console.log(data.watch_insert);
});
```

### Using `CreateNewWatch`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNewWatchRef, CreateNewWatchVariables } from '@dataconnect/generated';

// The `CreateNewWatch` mutation requires an argument of type `CreateNewWatchVariables`:
const createNewWatchVars: CreateNewWatchVariables = {
  movieId: ..., 
  watchDate: ..., 
  location: ..., // optional
};

// Call the `createNewWatchRef()` function to get a reference to the mutation.
const ref = createNewWatchRef(createNewWatchVars);
// Variables can be defined inline as well.
const ref = createNewWatchRef({ movieId: ..., watchDate: ..., location: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNewWatchRef(dataConnect, createNewWatchVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.watch_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.watch_insert);
});
```

