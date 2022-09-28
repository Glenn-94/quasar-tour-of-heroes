<template>
  <div class="layout-container">
    <div class="title">Tour of Heroes</div>
    <div class="button-container">
      <button @click="navigate('Dashboard')">Dashboard</button>
      <button @click="navigate('HeroList')">Heroes</button>
    </div>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    setup() {
      const router = useRouter();

      const navigate = (path: string) => {
        // void router.push({ name: 'Dashboard' }); Navigate to Dashboard
        // void router.push({ name: 'HeroList' }); Navigate to HeroList
        void router.push({ name: path });
      };

      return {
        navigate,
      };
    },
  });
</script>

<!-- ... -->
