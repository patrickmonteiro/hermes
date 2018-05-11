<template>
<div>

  <h2 class="text-center">Card Vue</h2>
  <div class="card-group">
    <div class="card" v-for="card in cards" :key="card.name" @click="exibeCard(card)" :class="card.classCard" @dblclick="ocultaCard(card)">
      <div class="card-content">
        <img :src="card.imgFront" style="width:220px; position: absolute;" class="img-front" alt="">
        <img :src="card.imgBack" style="width:220px; position: absolute;" class="img-back" alt="" :class="card.classCardBack">
      </div>
    </div>
    <!-- <div class="card" v-for="card in 12" :key="card">
      <div class="card-content">
        <img src="/static/hermes_icon.png" style="width:50px" alt="">
      </div>
    </div> -->
  </div>
</div>
</template>

<script>
export default {
  name: 'card',
  data () {
    return {
      cards:[{
        name: 'mago-negro',
        classCard: 'card-not-active',
        classCardBack: '.img-back-not-active',
        imgFront: "/static/mago-negro.jpg" ,
        imgBack: "/static/card_back.png" ,
      },{
        name: 'dragao-branco',
        classCard: 'card-not-active',
        classCardBack: '.img-back-not-active',
        imgFront: "/static/dragao-branco.jpg" ,
        imgBack: "/static/card_back.png" ,
      }],
    }
  },
  methods: {
    exibeCard(card){
      card.classCard = 'card-active';
      card.classCardBack = 'img-back-active';
    },
    ocultaCard(card){
      card.classCard = 'card-not-active';
      card.classCardBack = 'img-back-not-active';
    }
  }
}
</script>

<style scoped>
.card-group{
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
}

.card{
  width: 220px;
  height: 310px;
  border: solid 1px;
  display: flex;
  /* align-items: center; */
  margin-left: 5px;
}

.card-active{
  transform: rotateY(180deg);
  transition-duration: 1.5s;
}

.card-not-active{
  transform: rotateY(0deg);
  transition-duration: 1.5s;
}

.card-content{
  /* border: solid 1px; */
  position: relative;
  /* margin: 0 auto; */
}

.img-back-active{
  opacity: 0;
  transition-duration: 1.5s;
}

.img-back-not-active{
  opacity: 1;
  transition-duration: 1.5s;
}

.img-front{
  transform: rotateY(180deg);
}

</style>

