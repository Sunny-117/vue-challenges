<template>
  <Container>
    <Plane :plane="plane"></Plane>
    <template v-for="(bulletItem, key) in bullets" :key="key">
      <Bullet :bullet="bulletItem"></Bullet>
    </template>

    <!-- <template v-for="(enemy, key) in enemyPlanes" :key="key">
      <EnemyPlane :enemyPlane="enemy"></EnemyPlane>
    </template> -->
  </Container>
</template>

<script setup lang="ts">
import Plane from "./Plane.vue";
import Bullet from "./Bullet.vue";
import EnemyPlane from "./EnemyPlane.vue";
import { reactive } from "vue";
import { initGame } from "../game";

const { plane, bullets, enemyPlanes } = initGame({
  plane: reactive({}),
  bullets: reactive([]),
  enemyPlanes: reactive([]),
});

</script>

<style scoped></style>
