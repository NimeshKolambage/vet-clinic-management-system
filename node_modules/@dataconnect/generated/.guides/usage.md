# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createNewUser, getMyLists, createNewWatch, getPublicMovies } from '@dataconnect/generated';


// Operation CreateNewUser:  For variables, look at type CreateNewUserVars in ../index.d.ts
const { data } = await CreateNewUser(dataConnect, createNewUserVars);

// Operation GetMyLists: 
const { data } = await GetMyLists(dataConnect);

// Operation CreateNewWatch:  For variables, look at type CreateNewWatchVars in ../index.d.ts
const { data } = await CreateNewWatch(dataConnect, createNewWatchVars);

// Operation GetPublicMovies: 
const { data } = await GetPublicMovies(dataConnect);


```