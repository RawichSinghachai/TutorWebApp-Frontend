import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import SubjectCardStore from "./SubjectCardStore";
import TopicCardStore from "./TopicCardStore";
import HideMenu from "./HideMenu";
import { FetchUserStatusPerson } from '../stores/user/FetchUserStatusPerson'
import UserStatusStore from './user/UserStatusStore'

export const store = configureStore({
  reducer: {
    SubjectCardStore: SubjectCardStore,
    TopicCardStore:TopicCardStore,
    HideMenu:HideMenu,
    UserStatusStore:UserStatusStore,

    [FetchUserStatusPerson.reducerPath]: FetchUserStatusPerson.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(FetchUserStatusPerson.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch