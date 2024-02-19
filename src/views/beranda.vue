<template lang="">
  <div  style=" background: linear-gradient(to bottom, rgba(22, 65, 178, 1), rgba(22, 56, 178, 0));" >
    
  <div class="beranda" >
        <div class="kanan atas" style="display:flex;padding-top:30px">
          <i class="fa-solid fa-arrow-right-from-bracket fa-flip-horizontal" style="color: #000000;margin-right:10px;padding-top:3px"></i>
          <a href="/login" style="text-decoration:none;display">
            <p style="color:white;font-weight:bold;">Keluar</p>
          </a>
        </div>
       <div class="profil">
        
         <div class="edit">

           <div class="nama">
             <h3 style="color:white;font-weight:500;margin-top:120px">Hallo, Dini !</h3>
             <p style="font-family: 'Raleway', sans-serif;">Berikut adalah data terkini mengenai keterlibatan anda dengan koperasi. </p>
             
           </div>
           <div class="persutujuan">   

           </div>
           
         </div>
       </div>
       <div class="samping">  
         <div class="baru">

           <div class="harga">
             <p  style="font-size: 16px;font-family: 'Raleway', sans-serif;font-weight:bold;margin-top:10px">Banyaknya Anggota Terdaftar : 10</p>
             
           </div>
           </div>
            <div class="harga">
               <p  style="font-size: 15px;font-family: 'Raleway', sans-serif;font-weight:bold;margin-top:10px">Banyaknya Permintaan Meminjam : 10 </p>
             </div>
             <div class="inbox">
                <div class="text"  style="background-color:white;box-shadow: 0px 7px 8px 0px rgba(0,0,0,0.2);border-radius: 20px 20px 0px 0px;height:50px">
                  
                  <div style="padding-left:50px;font-size:20px;font-weight:bold;padding-top:10px;display:flex;">

                    <i class="fa-regular fa-bell" style="padding-right:20px;padding-top:6px;"></i>                   
                   <p >Pemberitahuan</p>
                   
                  </div>
                  <div class="pengajuan">
                    <a href="/HalamanHome" style="color:white;text-decoration:none;" >
                        <p  style="font-size: 17px;font-family: 'Raleway', sans-serif;font-weight:bold;margin-top:10px">Daftar  Anggota Yang Ingin Dikonfirmasi : 10</p>
                    </a>
             
             
                   </div>
                  <div class="pengajuan1">
                    <a href="/daftar" style="color:white;text-decoration:none;" >
                       <p  style="font-size: 17px;font-family: 'Raleway', sans-serif;font-weight:bold;margin-top:10px">Daftar  Anggota Yang Ingin Meminjam : 10 </p>
              
                    </a>
                  </div>
                </div>
             </div>
       </div>
       <div class="riwayat">
 <h5 style="font-weight: bold;font-family: 'Raleway'">Data Anggota dan Pinjaman </h5>

 <div class="search">
    <q-input outlined v-model="text" label="Mau Cari Apa ?" :border-radius="borderRadius">
    </q-input>
  </div>

 <table class="content-table">
   <thead>
     <tr style="background-color: #192531;color: white">
       <th>Profil</th>
       <th>Nama Anggota</th>
       <th>Nomor Anggota</th>
       <th>Total Pinjaman</th>
     </tr>
   </thead>
   <tbody>
    <tr style="background-color:#D8E7FF;font-family: 'Raleway', sans-serif;font-size:12px;font-weight:bold">
      <td><img src="../assets/images.jpeg" style="height:50px;width:50px;border-radius:30px; " alt=""></td>
      <td>Tono Hasranuddin</td>
      <td>2024</td>
      <td>Rp.200.000,00</td>
    </tr>
    <tr style="background-color:#D8E7FF;font-family: 'Raleway', sans-serif;font-size:12px;font-weight:bold">
      <td><img src="../assets/senyum.jpeg" style="height:50px;width:50px;border-radius:30px; " alt=""></td>
      <td>Basuki Cahaya</td>
      <td>2023</td>
      <td>Rp.250.000,00</td>
    </tr>
    <tr style="background-color:#D8E7FF;font-family: 'Raleway', sans-serif;font-size:12px;font-weight:bold">
      <td><img src="../assets/billy.jpeg" style="height:50px;width:50px;border-radius:30px; " alt=""></td>
      <td>Udin</td>
      <td>2022</td>
      <td>Rp.100.000,00</td>
    </tr>
  
   </tbody>

 
 </table>
</div>
</div>
</div>

</template>
<style >
.beranda {
  margin-left: 60px;


}

.profil {
  display: flex;

}

.nama {
  display: flex;
  flex-direction: column;
}




.samping {
  margin-right: 30px;
  /* Tambahkan margin ke kanan */
  flex-direction: column;

}

.baru {
  display: flex;
}

.testing {
  font-size: 30px;
  color: red;
  text-align: center;
}

.harga {
  display: flex;
  justify-content: center;
  text-align: center;
  box-shadow: 1px 4px 0px 0px rgba(0,0,0,0.2);  border-width: 3px;
  background-color: white;
  width: 50vh;
  height: 40px;
  border-radius: 10px;
  margin-right: 20px;
  margin-top: 10px;
  /* Tambahkan margin ke kanan */
}

.pengajuan {
  text-align: center;
  margin-top: 10px;
  padding-top: 1px;
  margin-left: 40px;
  width: 50vh;
  height: 45px;
  background-color: #124B9F;
  border-radius: 10px;
  color: white;
}
.pengajuan1 {
  text-align: center;
  margin-top: 10px;
  padding: 1px;
  margin-left: 40px;
  width: 50vh;
  height: 45px;
  background-color: #5aabf7 ;
  border-radius: 10px;
  color: white;
}
.jumlahanggota {
  text-align: center;
  margin-top: 10px;
  padding-top: 1px;
  width: 50vh;
  height: 40px;
  border-radius: 10px;
  color: white;
}

.inbox {
  position: absolute;
  top: 100px;
  right: 70px;
  width: 60vh;
  height: 340px;
  background-color: #ffffff;
  border-radius: 20px;
  margin: 20px;
  /* Tambahkan margin sesuai kebutuhan */
  background-color: white;
  box-shadow: 1px 4px 0px 0px rgba(0,0,0,0.2);

}




.search {
  width: 35vw;
  margin-left: -30px;
  border-radius: 10px;
}

.content-table {

  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.7em;
  min-width: 400px;
}

.content-table th,
.content-table td {
  padding: 15px 135px;
  /* mengatur panjang kepala table*/
}

.content-table tbody tr {
  border-bottom: 1px solid #ddd;

}

@import '~@fortawesome/fontawesome-free/css/all.css';
</style>
<script>
import { ref } from 'vue'


export default {
  setup() {
    return {
      search: ref(''),
      borderRadius: '20px'

    }
  }
}
</script>
