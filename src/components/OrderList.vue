<template>
  <div class="root">
    <h2>My Orders</h2>
    <hr />
    <ul v-if="authStore.user">
      <li v-for="orderItem in authStore.user.orders" :key="orderItem.id">
        <img :src="orderItem.image" />
        <div class="item">
          <span class="item-name">{{ orderItem.item }}</span>
          <span class="item-from">{{ orderItem.from }}</span>
          <span class="item-date">{{ orderItem.date }}</span>
        </div>
        <div class="badge-wrapper">
          <span class="badge"> {{ orderItem.count }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.root {
  background-color: white;
  margin: 0 auto;
  color: black;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
h2 {
  font-weight: bold;
}
ul {
  list-style: none;
  padding: 0;
  margin: 10px auto;
  width: 100%;
}

ul li {
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;
}

li img {
  height: 120px;
  width: 150px;
  border-radius: 5px;
  margin: 5px 0;
  object-fit: cover;
}
.item {
  display: flex;
  width: 80%;
  margin-left: 10px;
  flex-direction: column;
}
.item-name {
  font-size: 24px;
  color: rgba(248, 140, 1);
  font-weight: bold;
}
.item-from {
  font-size: 20px;
}
.item-date {
  font-size: 20px;
  font-style: italic;
  color: grey;
}

.badge {
  position: absolute;
  right: 0;
  font-size: 22px;
  color: white;
  border-radius: 100%;
  background-color: yellowgreen;
  height: 50px;
  width: 50px;
  line-height: 50px;
  padding-left: 20px;
  margin-top: 10px
}
</style>

<script lang="ts">
import { useAuthStore } from "@/stores/auth";
export default {
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
};
</script>
