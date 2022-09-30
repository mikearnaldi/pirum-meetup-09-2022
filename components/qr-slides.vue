<template>
  <vue-qrcode
    value="https://mikearnaldi.github.io/pirum-meetup-09-2022"
    @change="onDataUrlChange"
  />
</template>
<script>
import VueQrcode from "vue-qrcode";

export default {
  data() {
    return {
      dataUrl: null,
    };
  },
  components: {
    VueQrcode,
  },
  methods: {
    onDataUrlChange(dataUrl) {
      this.dataUrl = dataUrl;
    },
  },
};
</script>
