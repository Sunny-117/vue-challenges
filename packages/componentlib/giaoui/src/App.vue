<template>
  <div id="app">
    <div id="nav">
      <keep-alive include="home">
        <router-link to="/">Home</router-link>
      </keep-alive>

      |

      <router-link to="/tabs">Tabs</router-link>
      |
      <router-link to="/collapses">Collapses</router-link>
      |
      <router-link to="/buttons">Buttons</router-link>
      |
      <router-link to="/messages">Messages</router-link>
      |
      <router-link to="/tooltip">Tooltip</router-link>
      |
      <router-link to="/dialog">Dialog</router-link>
      |
      <keep-alive>
        <router-link to="/carousel">Carousel</router-link>
      </keep-alive>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
