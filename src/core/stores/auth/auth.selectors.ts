import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectCurrentUser = createSelector(selectAuthState, (state: AuthState) => state.token);

export const selectUsername = createSelector(selectAuthState, (state: AuthState) => state.username);
