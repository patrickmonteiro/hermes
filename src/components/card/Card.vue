<template>
<div>

  <h2 class="text-center">Card Vue</h2>
  <div class="card-group">
    <div class="card" v-for="card in 10" :key="card">
      <div class="card-content">
        <img src="/static/mago-negro.jpg" style="width:220px; position: absolute;" class="img-front" alt="">
        <img src="/static/card_back.png" style="width:220px; position: absolute;" class="img-back" alt="">
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
      cards: 10,
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

.card:hover{
  transform: rotateY(180deg);
  transition-duration: 1.5s;
}

.card:not(hover){
  transform: rotateY(0deg);
  transition-duration: 1.5s;
}

.card-content{
  /* border: solid 1px; */
  position: relative;
  /* margin: 0 auto; */
}

.img-back:hover{
  opacity: 0;
  transition-duration: 1.5s;
}

.img-back:not(hover){
  opacity: 1;
  transition-duration: 1.5s;
}

.img-front{
  transform: rotateY(180deg);
}

</style>

