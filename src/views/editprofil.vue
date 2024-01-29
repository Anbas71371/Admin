<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300&family=Roboto+Flex:opsz,wght@8..144,700&display=swap" rel="stylesheet">
  <div class="app">

    <div class="d-flex">
      <span class="text text-weight-medium" style="color: #002F76;font-family: 'Roboto Flex';">Pengaturan Profile </span>
    </div>

    <div class="border">
      <div class="profil">
        <q-avatar size="250px" text-color="white" style="border:5px solid silver;padding: 10px; margin-left: 70px;">
          <img src="data:image/png;base64,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"
          style="padding: 15px;margin-top: -10px;margin-left: -25px;">
        </q-avatar>
        <img src="../assets/kamera.png" style="height: 50px; width: 50px; display: flex;margin-left: 170px;margin-top: -40px;z-index: 1000; background-color: white; border-radius: 20px;padding: 10px;" alt="">
        <br>
        <p style="color: #FFB067;">Profil hanya boleh menggunakan foto wajah</p>
        <q-input outlined label="Nama" v-model="nama" />
        <q-input outlined label="Password" v-model="password" type="password" />
        <p style="color: #FFB067; font-size: 10px;margin-left: 150px;">Data tidak bisa diubah</p>


      </div>
      <div class="form-container">
        <q-form>
          <div class="input-column">
            <div class="atas-kanan">
              <div class="input-label">

                <q-input outlined label="Nama" v-model="username" />
              </div>
              <div class="input-label">
                <q-input outlined label="NIP" v-model="nip" />
              </div>
            </div>
            <div class="atas-kanan">
              <div class="input-label">
                <q-input outlined label="No.Telepon" v-model="telepon" />
              </div>
              <div class="input-label">
                <q-input outlined label="No.Rekening" v-model="rekening" />
              </div>
            </div>
            <div class="input-label">
              <q-input :style="{width : '24vw'}" outlined label="Alamat" v-model="alamat" />
            </div>

          </div>
          <q-btn  label="SIMPAN" to="/beranda" color="primary" size="md" class="login" />
        </q-form>
      </div>
    </div>
  </div>
  <!-- Konten aplikasi  -->
</template>

<style scoped>
.app {
  position: relative;
}

.login {
  margin-left: 30px;
  border-radius: 10px;
}

.border {
  display: flex;
  justify-content: center;
  align-items: center;

}

.profil {
  text-align: center;
  flex-direction: column;
  background-color: white;
  border-radius: 50px;
  height: 80vh;
  width: 25vw;
  border-width: 5px 3px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

}

.d-flex {
  position: absolute;
  /*Menggunakan posisi absolute untuk mengatur elemen d-flex*/
  top: 20px;
  /* Sesuaikan dengan jarak dari atas yang diinginkan */
  right: 20px;
  /* Sesuaikan dengan jarak dari kanan yang diinginkan */
  margin-right: 50px;
}

/* Header */
.text {
  margin-top: 20px;
  margin-left: 500px;
  font-size: 25px;
}

/* .daftar {
  /* justify-content: bottom; 
} */
.form-container {
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  width: 60vw;
  /* Sesuaikan lebar border sesuai kebutuhan Anda */
  /* Untuk membuatnya berada di tengah halaman*/
  margin-left: 100px;
}

/* CSS untuk kolom input */
.input-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 550px;
}

a {
  margin-top: 10px;
  margin-left: 15px;
  text-decoration: none;
  font-size: 20px;
}

.atas-kanan {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* Dua kolom dengan lebar yang sama */
  grid-gap: 10px;
  width: 57vw;
}

.atas-kiri {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* Dua kolom dengan lebar yang sama */
  grid-gap: 10px;
}

/* .input-label {
   
  } */
.app {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
}
</style>

<script>
import { ref } from 'vue'
export default {
  methods: {
    goBack() {
      this.$router.go(-1); // Mengarahkan kembali ke halaman sebelumnya
      return {
        name: ref('')
      };
    },
  },
  data() {
    return {
      username: '',
      nip: '',
      telepon: '',
      rekening: '',
      alamat: '',
      nama: '',
      password: ''
    }
  },
};
</script>