<template>
  <div class="footer">
    <div class="text">
      <!-- <div class="text_1">
        <span>
          Сделано
          <a
            href="https://github.com/AndreyKudinov63"
            target="_blank"
            rel="noopener noreferrer"
            >Андреем Кудиновым</a
          >
        </span>
      </div> -->
      <div class="text_2">
        <span>Сделано для меня и Нюты </span>
        <div class="img">
          <img :src="require('@/assets/img/heart.png')" alt="" />
        </div>
      </div>
    </div>

    <div class="social">
      <a
        href="https://github.com/AndreyKudinov63"
        target="_blank"
        rel="noopener noreferrer"
        class="github"
      >
        <div class="img">
          <img :src="require('@/assets/img/GitHub-Mark-64px.png')" alt="" />
        </div>
      </a>

      <a
        href="https://twitter.com/andrey__kudinov"
        target="_blank"
        rel="noopener noreferrer"
        class="twitter"
      >
        <div class="img">
          <img :src="require('@/assets/img/twitter.svg')" alt="" />
        </div>
      </a>
      <a
        href="https://gitlab.com/andreykudinov"
        target="_blank"
        rel="noopener noreferrer"
        class="gitlab"
      >
        <div class="img">
          <img :src="require('@/assets/img/gitlab.svg')" alt="" />
        </div>
      </a>
      <a
        href="https://instagram.com/andrey__kudinov"
        target="_blank"
        rel="noopener noreferrer"
        class="instagram"
      >
        <div class="img">
          <img :src="require('@/assets/img/instagram.png')" alt="" />
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background: rgb(238, 174, 202);
  background: linear-gradient(
    90deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  /* background-color: #1690c3; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
}
.text {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #0a467e;
  font-weight: bold;
  line-height: 18px;
}
.img {
  width: 30px;
  height: 30px;
  margin-left: 5px;
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.text_1 {
  margin-bottom: 5px;
}
.text_2 {
  display: flex;
  align-items: center;
  justify-content: center;
}
a {
  text-decoration: none;
  color: #0a467e;
}
.social {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  position: absolute;
  right: 20px;
  row-gap: 8px;
  column-gap: 3px;
}
@media (max-width: 767px) {
  .social {
    right: 50%;
    bottom: 5px;
    transform: translateX(50%);
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr;
    width: 100%;
    padding: 0 5px;
  }
  .githab {
    order: 1;
  }
  .gitlab {
    order: 2;
  }
  .twitter {
    order: 3;
    grid-column: -2/-3;

  }
  .instagram {
    order: 4;
    grid-column: -1/-2;
  }
}
.social .img {
  width: 20px;
  height: 20px;
  transition: 0.3s ease;
}
.social .img:hover {
  transform: scale(1.2);
}
</style>
