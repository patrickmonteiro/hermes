<template>
<div>
    <div class="card" :class="classCard" @dblclick="hideCard()">
      <div class="card-content">
        <img :src="imgFront" style="width:220px; position: absolute;" class="img-front" alt="">
        <img :src="imgBack" style="width:220px; position: absolute;" class="img-back" alt="" :class="classCardBack">
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'card',
  props: {
    // cards: {
    //   type: Array,
    //   required: true,
    // },
    classCardBoolean:{
      type: Boolean,
      default: false,
    },
    classCardBackBoolean: {
      type: Boolean,
      default: false,
    },
    imgFront: {
      type: String,
      required: true,
    },
    imgBack: {
      type: String,
      required: true,
    }
  },
  data () {
    return {
      // classCardMutable: this.classCard,
      // classCardBackMutable: this.classCardBack
      classCard: 'card-not-active',
      classCardBack: '.img-back-not-active',
      // cards:[{
      //   name: 'mago-negro',
      //   classCard: 'card-not-active',
      //   classCardBack: '.img-back-not-active',
      //   imgFront: "/static/mago-negro.jpg" ,
      //   imgBack: "/static/card_back.png" ,
      // },{
      //   name: 'dragao-branco',
      //   classCard: 'card-not-active',
      //   classCardBack: '.img-back-not-active',
      //   imgFront: "/static/dragao-branco.jpg" ,
      //   imgBack: "/static/card_back.png" ,
      // }],
    }
  },
  watch: {
  classCardBoolean () {
    if (this.classCardBoolean) {
      this.showCard()
    } else {
      this.hideCard()
    }
  },
},
  methods: {
    showCard(){
      this.classCard = 'card-active';
      this.classCardBack = 'img-back-active';
    },
    hideCard(){
      this.classCard = 'card-not-active';
      this.classCardBack = 'img-back-not-active';
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
  z-index: 3;
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

