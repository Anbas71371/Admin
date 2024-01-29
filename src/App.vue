<template>
  <!-- Konten aplikasi  -->
  <!-- style=" background: linear-gradient(to bottom, rgba(22, 56, 178, 1), rgba(22, 56, 178, 0));" -->
  <div class="warna" >
    <div id="app" >
      <router-view></router-view>
      
    </div>
  </div>

  <div class="foteer">
      <img src="./assets/wahidin.png" alt="" style="height: 80px;width: 150px;margin-right: -30px;">
      <div class="vertical-line"></div>
      <p style="font-size: 12px;margin-top: 15px;font-family: 'Raleway', sans-serif;">Koperasi RSUP DR. <br>Wahidin Sudirohusodo <br>Makassar</p>
  
    </div>
  <div>
  </div>
  

  
</template>

<style >
.vertical-line {
      border-left: 2px solid #000; /* Ganti #000 dengan warna garis yang diinginkan */
      height: 70px; /* Sesuaikan tinggi garis sesuai kebutuhan Anda */
      margin-right: 20px;
      margin-top: 10px;
    }
    .foteer {
  display: flex;
  justify-content: center; 
}



</style>

<script>
import KomponenBawah from '../src/components/KomponenBawah.vue';

  export default{
    components: {
      KomponenBawah
    },
  };
</script>

