import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateNewUserData {
  user_insert: User_Key;
}

export interface CreateNewUserVariables {
  displayName: string;
  email?: string | null;
}

export interface CreateNewWatchData {
  watch_insert: Watch_Key;
}

export interface CreateNewWatchVariables {
  movieId: UUIDString;
  watchDate: DateString;
  location?: string | null;
}

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

export interface ListMovie_Key {
  listId: UUIDString;
  movieId: UUIDString;
  __typename?: 'ListMovie_Key';
}

export interface List_Key {
  id: UUIDString;
  __typename?: 'List_Key';
}

export interface Movie_Key {
  id: UUIDString;
  __typename?: 'Movie_Key';
}

export interface Review_Key {
  id: UUIDString;
  __typename?: 'Review_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

export interface Watch_Key {
  id: UUIDString;
  __typename?: 'Watch_Key';
}

interface CreateNewUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewUserVariables): MutationRef<CreateNewUserData, CreateNewUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateNewUserVariables): MutationRef<CreateNewUserData, CreateNewUserVariables>;
  operationName: string;
}
export const createNewUserRef: CreateNewUserRef;

export function createNewUser(vars: CreateNewUserVariables): MutationPromise<CreateNewUserData, CreateNewUserVariables>;
export function createNewUser(dc: DataConnect, vars: CreateNewUserVariables): MutationPromise<CreateNewUserData, CreateNewUserVariables>;

interface GetMyListsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyListsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyListsData, undefined>;
  operationName: string;
}
export const getMyListsRef: GetMyListsRef;

export function getMyLists(): QueryPromise<GetMyListsData, undefined>;
export function getMyLists(dc: DataConnect): QueryPromise<GetMyListsData, undefined>;

interface CreateNewWatchRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewWatchVariables): MutationRef<CreateNewWatchData, CreateNewWatchVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateNewWatchVariables): MutationRef<CreateNewWatchData, CreateNewWatchVariables>;
  operationName: string;
}
export const createNewWatchRef: CreateNewWatchRef;

export function createNewWatch(vars: CreateNewWatchVariables): MutationPromise<CreateNewWatchData, CreateNewWatchVariables>;
export function createNewWatch(dc: DataConnect, vars: CreateNewWatchVariables): MutationPromise<CreateNewWatchData, CreateNewWatchVariables>;

interface GetPublicMoviesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetPublicMoviesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetPublicMoviesData, undefined>;
  operationName: string;
}
export const getPublicMoviesRef: GetPublicMoviesRef;

export function getPublicMovies(): QueryPromise<GetPublicMoviesData, undefined>;
export function getPublicMovies(dc: DataConnect): QueryPromise<GetPublicMoviesData, undefined>;

