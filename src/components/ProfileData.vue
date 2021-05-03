<template>
  <div class="">
    <div
      class="avatar no_photo"
      v-if="!imageSelected"
      @click="showFileChooser()"
    >
      <img :src="require('@/assets/img/photo.svg')" alt="" />
    </div>

    <!-- <transition name="fade"> -->
    <div class="avatar" v-if="cropped && imageSelected">
      <img :src="cropped" class="result" />
    </div>
    <!-- </transition> -->

    <input type="file" @change="croppie" class="file" ref="input" />

    <!-- <transition name="fade"> -->
    <vue-croppie
      v-show="imageSelected && !cropped"
      :customClass="'croppie'"
      ref="croppieRef"
      :showZoomer="false"
      :enableResize="false"
      :boundary="{ width: 300, height: 300 }"
      :viewport="{
        width: 300,
        height: 300,
        type: 'square',
      }"
    >
    </vue-croppie>
    <!-- </transition> -->

    <div class="buttons">
      <button class="btn btn_white btn_open" @click="showFileChooser()">
        Открыть
      </button>

      <transition name="fade" mode="in-out">
        <button
          class="btn btn_white btn_crop"
          @click="crop()"
          v-show="imageSelected && !cropped"
        >
          Обрезать
        </button>
      </transition>

      <transition name="fade" mode="in-out">
        <button
          class="btn btn_white btn_rotate"
          @click="rotate(90)"
          v-show="imageSelected && !cropped"
        >
          Повернуть
        </button>
      </transition>
    </div>

    <div class="inputs">
      <input type="text" class="name" v-model="name" placeholder="Имя"/>
    </div>

    <button class="btn btn_white btn_save" @click="changeName">
      Сохранить
    </button>
  </div>
</template>

<script>
export default {
  props: {
    user_1: Object,
    user_2: Object,
  },
  data() {
    return {
      cropped: null,
      croppieImage: "",
      imageSelected: false,
      avatarBlob: "",
      options: {
        format: "jpeg",
        circle: true,
      },
      name: "",
    };
  },
  methods: {
    croppie(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.imageSelected = true;

      var reader = new FileReader();
      reader.onload = (e) => {
        this.$refs.croppieRef.bind({
          url: e.target.result,
        });
      };

      reader.readAsDataURL(files[0]);
    },
    crop() {
      let options = {
        type: "base64",
        size: "original",
        format: "jpeg",
      };
      this.$refs.croppieRef.result(options, (output) => {
        this.cropped = this.croppieImage = output;
        if (this.user_1) this.user_1.avatar = this.cropped || "";
        if (this.user_2) this.user_2.avatar = this.cropped || "";
      });
    },
    rotate(rotationAngle) {
      this.$refs.croppieRef.rotate(rotationAngle);
    },
    showFileChooser() {
      this.imageSelected = "";
      this.cropped = "";
      this.$refs.input.click();
    },
    changeName() {
      if (this.user_1) this.user_1.name = this.name || "";
      if (this.user_2) this.user_2.name = this.name || "";
    },
  },
};
</script>

<style scoped>
.avatar {
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.no_photo {
  background: radial-gradient(
    circle,
    rgba(148, 187, 233, 1) 0%,
    rgba(238, 174, 202, 1) 100%
  );
  cursor: pointer;
}
.no_photo img {
  object-fit: none;
  opacity: 0.6;
  transition: 0.4s ease-in;
}
.no_photo:hover img {
  opacity: 1;
}
.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
@media (max-width: 767px) {
  .buttons {
    width: 100%;
  }
}
.btn_crop {
  margin: 10px 0;
}
.inputs {
  margin-bottom: 20px;
  width: 100%;
}
input {
  border: 1px solid #b993d6;
  box-sizing: border-box;
  border-radius: 3px;
  width: 240px;
  height: 45px;
  padding-left: 15px;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #56565a;
  background: linear-gradient(to right, #8ca6db, #b993d6);
  color: #0a467e;
  font-weight: bold;
}
input::placeholder {
  color: #fff;
  letter-spacing: 1px;
  text-align: center;
}
@media (max-width: 767px) {
  input {
    width: 100%;
  }
}
.file {
  display: none;
}
</style>

<style>
.croppie .cr-viewport,
.croppie .cr-resizer {
  box-shadow: none !important;
}

.croppie .cr-viewport {
  width: 100%;
  height: 100%;
  background-size: contain;
}
.croppie {
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
}
</style>
