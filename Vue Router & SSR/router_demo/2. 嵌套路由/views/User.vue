<template>
  <div class="user">
    <h2>User {{ $route.params.username }}</h2>
    <router-view></router-view>
  </div>
</template>