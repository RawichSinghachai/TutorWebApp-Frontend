import { configureStore } from "@reduxjs/toolkit";
import SubjectCardStore from "./SubjectCardStore";
import TopicCardStore from "./TopicCardStore";
import LoginStore from "./LoginStore";

export const store = configureStore({
  reducer: {
    SubjectCardStore: SubjectCardStore,
    TopicCardStore:TopicCardStore,
    LoginStore:LoginStore,
  },
});