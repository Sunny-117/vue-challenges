import { createRouter, createWebHistory } from 'vue-router'
import User from './views/User.vue'
import UserHome from './views/UserHome.vue'
import UserProfile from './views/UserProfile.vue'
import UserPosts from './views/UserPosts.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/users/:username',
      component: User,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /users/:username is matched
        { path: '', component: UserHome },

        // UserProfile will be rendered inside User's <router-view>
        // when /users/:username/profile is matched
        { path: 'profile', component: UserProfile },

        // UserPosts will be rendered inside User's <router-view>
        // when /users/:username/posts is matched
        { path: 'posts', component: UserPosts },
      ],
    },
  ],
})
