<template>
  <!-- Konten aplikasi  -->
  <div class="warna" style="background-image:linear-gradient(180deg, #597298, white);">

  </div>
  
  <footer>
    <div class="footer">
        <div class="left-footer">
          <div class="text">

            <img src="../assets/logo-wahidin-putih-1@2x.png" alt="" class="gambar">
            <h6>Koperasi RSUP DR. Wahidin Sudirohusodo Makassar</h6>
          </div>
          <p class="ngikut">Jl. Perintis Kemerdekaan Km. 11, Tamalanrea, Makassar  </p>
           
        </div>
        <div class="right-footer">
          <div class="text-kanan">

            <h5>Kontak Kami</h5>
            <p>Wa</p>
          </div>
        </div>
    </div>
  </footer>
  
</template>

<style scoped>

/* 
img {
  height: 160px;
  width: 1500px;
} */
.footer {
  color: #fff;
  height: 400px;
  display: flex;
  align-items: flex-end;
  white-space: nowrap;
  overflow-wrap: break-word;
}

.left-footer {
    position: absolute;
    background-color: #124B9F;
    width: 60vw;
    height: 155px;
}

.right-footer {
    border-radius: 80px 0px 0px 0px;
    position: absolute;
    right: 10px;
    display: flex;
    flex-direction: column;
    background-color: #FF2121;
    height: 180px;
    width:45vw;
}

.gambar{
  width: 70px;
  height: 70px;
}
.text {
  margin-left: 30px;
  display: flex;
  align-items: center;
}

.text-kanan {
  margin-left: 20px;
}
.ngikut {
  margin-left: 30px;
}

.wa {
  width: 70px;
  height: 70px;
}



</style>

<script>

</script>

