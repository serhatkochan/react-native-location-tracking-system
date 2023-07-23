import { createSelector } from 'reselect';

const selectAuth= state => state.auth;

export const selectCurrentUser = createSelector(
    [selectAuth],
    (auth) => auth.data
);

export const selectAuthLoading = createSelector(
    [selectAuth],
    (auth) => auth.loading
);
