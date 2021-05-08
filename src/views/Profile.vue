<template>
  <div class="profiles">
    <ProfileData class="profile profile_first" :user_1="user_1" />
    <ProfileData class="profile profile_second" :user_2="user_2" />
  </div>
</template>

<script>
import ProfileData from "@/components/ProfileData";
import { mapActions } from "vuex";

export default {
  components: {
    ProfileData,
  },
  data() {
    return {
      user_1: {
        avatar: null,
        name: "",
      },
      user_2: {
        avatar: null,
        name: "",
      },
    };
  },
  methods: {
    ...mapActions(["updateUserName", "loadUserAvatar"]),
    async updateName(userId, userName) {
      const formData = {
        user: userId,
        name: userName,
      };
      try {
        await this.updateUserName(formData);
      } catch (e) {
        console.log("reg e -", e);
      }
    },
    async loadAvatar(userId, userAvatar) {
      const formData = {
        user: userId,
        avatar: userAvatar,
      };
      try {
        await this.loadUserAvatar(formData);
      } catch (e) {
        console.log("reg e -", e);
      }
    },
  },
  watch: {
    "user_1.avatar": function() {
      this.$root.user_1.avatar = this.user_1.avatar;
      localStorage.avatar_1 = this.user_1.avatar;
      setTimeout(() => {
        this.loadAvatar("user_1", this.user_1.avatar);
      }, 1000);
    },
    "user_2.avatar": function() {
      this.$root.user_2.avatar = this.user_2.avatar;
      localStorage.avatar_2 = this.user_2.avatar;
      this.loadAvatar("user_2", this.user_2.avatar);
    },
    "user_1.name": function() {
      this.$root.user_1.name = this.user_1.name;
      this.updateName("user_1", this.user_1.name);
    },
    "user_2.name": function() {
      this.$root.user_2.name = this.user_2.name;
      this.updateName("user_2", this.user_2.name);
    },
  },
};
</script>

<style scoped>
.profiles {
  display: grid;
  grid-template-columns: 1fr minmax(350px, 1fr) minmax(350px, 1fr) 1fr;
  grid-template-rows: auto;
  width: 100%;
  height: 100%;
  padding: 30px 0;
  column-gap: 40px;
  justify-items: center;
}
@media all and (max-width: 768px) {
  .profiles {
    grid-template-columns: 1fr;
    place-items: center;
  }
}
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media all and (max-width: 768px) {
  .profile {
    margin-bottom: 20px;
  }
}
.profile_first {
  grid-column: 2/3;
}
.profile_second {
  grid-column: 3/4;
}
@media all and (max-width: 768px) {
  .profile_first {
    grid-column: span 1;
  }
  .profile_second {
    grid-column: span 1;
  }
}
@media all and (max-width: 768px) {
  .profiles {
    grid-template-columns: 1fr;
  }
}
</style>
