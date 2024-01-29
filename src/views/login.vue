  <template>
    <div style="background: linear-gradient(180deg, rgba(211, 231, 255, 1), white);">

      <div class="q-page" >
        <div class="q-page-container">
          <form >
            <div class="tengah">
              <img src="../assets/wahidin.png" alt="" style="width: 27vw; height: 30vh; margin-top: -40px;">
              <h5 style="font-weight: bold; color: red; margin-top: -20px;">Selamat Datang di SIPA</h5>
            </div>
            <div class="input">

              <div class="username">
    
                <label for="nama" style="color: #443E3E ;">No. Anggota Koperasi : </label>
                <q-input outlined  v-model="username" style="margin-top: -1px;"/>
              </div>
              <div class="pw">
                <label for="password" style="color: #443E3E;">Kata Sandi :</label>
                <q-input outlined v-model="password" type="password" style="margin-top: -1px;" />
              </div>
      
              <!-- Tambahkan checkbox di bawah input password -->
              <div class="q-checkbox">
                <q-checkbox v-model="rememberMe" label="Ingat Kata Sandi" />
              </div>
              <div class="samping">

                <q-btn
                  label="MASUK"
                  to="/beranda"
                  color="red"
                  size="md"
                  class="login"
                  background-color="red"
                  style="margin-right: 20px;"
                />
               
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    </template>
    

  <style>
  .login {
    margin-left: 30px;
  }
  label {
    margin-left: 37px;
  }
  .tengah {
    text-align: center;
  }
  h4 {
    color: red;
  }
  .q-page {
    margin-bottom: 100px;
    display: flex;
    margin: auto;
    width: 50vw; /* Ubah lebar agar mengisi seluruh lebar tampilan */
    height: 90vh; /* Ubah tinggi agar mengisi seluruh tinggi tampilan */
  }

  .q-checkbox {
    margin-left: 11px;
    text-align: left;
  }
  .samping {
    display: flex;
  }

  .q-page-container {
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 0px 10px  black;
    width: 500px;
    height: 80vh;
    margin: 0 auto;
    margin-top: 50px;
  }

  .daftar {
      display: flex;
      margin-top: 10px;
      justify-content: center;
  }

  div {
    text-decoration: none;
  }

  .q-input {
    margin: 30px;
  }

  .login-button {
    margin-left: 0; /* Menghilangkan margin dari kanan */
    text-decoration: none;
    color: white;

  }



  </style>
    
    <script>
    import { ref } from 'vue'

    export default {
    data() {
      return {
        username: '',
        password: '',
        rememberMe: false, // Tambahkan ini
      }
    },
    methods: {
      login() {
        // Implementasi logika login di sini
      }
    }
  }
    </script>
    