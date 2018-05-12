<template>
<div>

  <h2 class="text-center">Baralho</h2>
  <div class="card-group">
    <card v-for="card in cards" :key="card.name" 
      :imgFront="card.imgFront" :imgBack="card.imgBack" 
      @click.native="verifyCard(card)"
      :classCardBoolean="card.classCardBoolean" ></card>

     <!-- <card v-for="card in cardsClone" :key="card.name" 
      :imgFront="card.imgFront" :imgBack="card.imgBack" 
      @click.native="verifyCard(card)"
       :classCardBoolean="card.classCardBoolean" ></card> -->
  </div>
</div>
</template>

<script>
import Card from '@/card/Card';
export default {
  name: 'baralho',
  components: {
    Card
  },
  data () {
    return {
      cards:[
      {
        name: 'mago-negro',
        classCardBoolean: false,
        imgFront: "/static/mago-negro.jpg" ,
        imgBack: "/static/card_back.png" ,
      },
      {
        name: 'mago-negro',
        classCardBoolean: false,
        imgFront: "/static/mago-negro.jpg" ,
        imgBack: "/static/card_back.png" ,
      },
      {
        name: 'dragao-branco',
        classCardBoolean: false,
        imgFront: "/static/dragao-branco.jpg" ,
        imgBack: "/static/card_back.png" ,
      },
      {
        name: 'dragao-branco',
        classCardBoolean: false,
        imgFront: "/static/dragao-branco.jpg" ,
        imgBack: "/static/card_back.png" ,
      }],
      cardsTotal: 0,
      cardsClone: [],
      cardTemp1: {},
      cardTemp2: {},
      cardEvent1: {},
      cardEvent2: {},
    }
  },
  created() {
    // this.cardsClone = Object.assign({}, this.cards);
    this.cardsTotal = this.cards.length / 2; 
    this.shuffle(this.cards);
  },
  methods: {
  shuffle(array) {
    let m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    this.cards = array;
  },
    verifyCard(card) {
      if(!this.cardTemp1.name)  {
        this.cardTemp1 = card;
        this.cardTemp1.classCardBoolean = true;
        return
      }
      if(this.cardTemp1.name && !this.cardTemp2.name)  {
        this.cardTemp2 = card;
        this.cardTemp2.classCardBoolean = true;
        this.compareCards();
      }
    },
    compareCards(){
      if(this.cardTemp1.name === this.cardTemp2.name){
        this.countCardsShow();
        this.clearCardsTemp();
      }else{
        console.log('entrou no false')
        this.hideCardsTemp();
      }
    },
    countCardsShow(){
      this.cardsTotal -= 1;
      this.checkFinalGame();
    },
    clearCardsTemp(){
      this.cardTemp1 = {};
      this.cardTemp2 = {};
    },
    hideCardsTemp(){
      setTimeout(() => {
        this.cardTemp1.classCardBoolean = false;
        this.cardTemp2.classCardBoolean = false;
        this.clearCardsTemp();
      }, 1500);
    },
    checkFinalGame(){
      console.log(this.cardsTotal);
      if(this.cardsTotal == 0){
        setTimeout(() => {
          alert('GANHOUUUUUUUUUU! YUGIOHHHHHHHHHHHHHH !');
        }, 1000);
      }
    }
    // exibeCard(card){
    //   card.classCard = 'card-active';
    //   card.classCardBack = 'img-back-active';
    // },
    // ocultaCard(card){
    //   card.classCard = 'card-not-active';
    //   card.classCardBack = 'img-back-not-active';
    // }
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
/*
.card{
  width: 220px;
  height: 310px;
  border: solid 1px;
  display: flex;
  /* align-items: center; 
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
  /* border: solid 1px; 
  position: relative;
  /* margin: 0 auto; 
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
} */

</style>

