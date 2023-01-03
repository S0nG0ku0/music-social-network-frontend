import { createRouter, createWebHistory } from "vue-router";
import {
  HomeView,
  RegisterView,
  LoginView,
  AccountView,
  ProfileSection,
  EditProfile,
  AddSong,
  DeleteSong,
  AddYoutubeVideo,
  DeleteYoutubeVideo,
  CreatePost,
  EditPost,
  PostsSection,
  PostById,
} from "../views";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "regiter",
    component: RegisterView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/account",
    component: AccountView,
    children: [
      {
        path: "profile",
        name: "ProfileSection",
        component: ProfileSection,
      },
      {
        path: "edit-profile",
        name: "EditProfile",
        component: EditProfile,
      },
      {
        path: "add-song",
        name: "AddSong",
        component: AddSong,
      },
      {
        path: "delete-song",
        name: "DeleteSong",
        component: DeleteSong,
      },
      {
        path: "add-youtube-video",
        name: "AddYoutubeVideo",
        component: AddYoutubeVideo,
      },
      {
        path: "delete-youtube-video",
        name: "DeleteYoutubeVideo",
        component: DeleteYoutubeVideo,
      },
      {
        path: "create-post",
        name: "CreatePost",
        component: CreatePost,
      },
      {
        path: "edit-post",
        name: "EditPost",
        component: EditPost,
      },
      {
        path: "posts",
        name: "PostsSection",
        component: PostsSection,
      },
      {
        path: "post-by-id",
        name: "PostById",
        component: PostById,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
