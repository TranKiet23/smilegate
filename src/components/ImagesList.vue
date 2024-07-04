<template>
  <div class="page-wapper">
    <div class="header">
      <nav aria-label="Breadcrumb" class="breadcrumb">
        <div class="left-group">
          <img src="../assets/images/my-logo.png" alt="logo" class="img-logo">
          <span>Tran Kiet</span>
        </div>
        <div class="right-group">
          <div class="group-button">
            <div class="custom-button" v-for="item, index of buttonList" :key="index">
              <span>{{ item }}</span>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- content -->
    <div class="content">
      <div class="title-content">
        <h2> Photo Cards:</h2>
      </div>
      <div class="list-item">
        <div class="card" v-for="item of contents" :key="item.stt">
          <div class="card-image-container" >
            <img :src="item.url" :alt="item.url" class="img-content" :style="item.className">
          </div>
          <div class="card-content">
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import content from "../services/content"
import { ref } from 'vue'
export default {
  setup() {
    const buttonList = ref(['Indie Game', 'Entry Game', 'Community'])
    const contents = ref(content.getList)
    return {
      buttonList,
      contents
    }
  },
  mounted() {
  }
}
</script>

