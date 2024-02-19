<template>
  <div style="background: linear-gradient(180deg, rgba(211, 231, 255, 1), white);">
    <div style="display: flex;">
      <a href="/beranda" style="text-decoration: none; color: #192531;">
        <div style="font-size: 17px; font-weight: bold; margin: 30px;display: flex;">
          <i class="fa-solid fa-chevron-left" style="color: #000000;padding-top: 4px;padding-right: 5px;"></i>
          <p >  Kembali </p>
        </div>
      </a>
      <p style="font-size: 20px; font-weight: bold; margin: 30px; margin-left: 1100px; color: #002F76;">Konfirmasi Anggota</p>
    </div>
    <div class="table">
      <table class="content-table"> 
        <thead>
          <tr style="background-color: #192531; color: white; border-radius: 10px 10px 0 0;">
            <th style="width: 150px;">Nama</th>
            <th style="width: 150px;">Nomor Anggota</th>
            <th style="width: 150px;"></th>
          </tr>
        </thead>
        <tbody>
          <tr style="background-color: #D8E7FF;font-size: 12px;font-weight: 500;">
            <td style="text-align: center;">Tono Hasranuddin</td>
            <td style="text-align: center;">2024</td>
            <td style="text-align: center; display: flex;">
              <div style="color: white; background-color: #5FC85B; border-radius: 20px; width: 120px; height: 40px; line-height: 40px;margin-right: 10px;">Verifikasi</div>
              <div style="color: white; background-color: #e83a3a; border-radius: 20px; width: 120px; height: 40px; line-height: 40px;">Tolak Verifikasi</div>
            </td>
          </tr>
          <tr style="background-color: #D8E7FF;font-size: 12px;font-weight: 500;">
            <td style="text-align: center;">Aletta Casuna Lestari</td>
            <td style="text-align: center;">2023</td>
            <td style="text-align: center; display: flex;">
              <div style="color: white; background-color: #5FC85B; border-radius: 20px; width: 120px; height: 40px; line-height: 40px;margin-right: 10px;">Verifikasi</div>
              <div style="color: white; background-color: #e83a3a; border-radius: 20px; width: 120px; height: 40px; line-height: 40px;">Tolak Verifikasi</div>
            </td>
          </tr>
          <tr style="background-color: #D8E7FF;font-size: 12px;font-weight: 500;">
            <td style="text-align: center;">Aletta Casuna Lestari</td>
            <td style="text-align: center;">2022</td>
            <td style="text-align: center; display: flex;">
              <div style="color: white; background-color: #5FC85B; border-radius: 20px; width: 120px; height: 40px; line-height: 40px;margin-right: 10px;">Verifikasi</div>
              <div style="color: white; background-color: #e83a3a; border-radius: 20px; width: 120px; height: 40px; line-height: 40px;">Tolak Verifikasi</div>
            </td>
          </tr>
          <tr style="background-color: #D8E7FF;font-size: 12px;font-weight: 500;">
            <td style="text-align: center;">Aletta Casuna Lestari</td>
            <td style="text-align: center;">2021</td>
            <td style="text-align: center; display: flex;">
              <div style="color: white; background-color: #5FC85B; border-radius: 20px; width: 120px; height: 40px; line-height: 40px;margin-right: 10px;">Verifikasi</div>
              <div style="color: white; background-color: #e83a3a; border-radius: 20px; width: 120px; height: 40px; line-height: 40px;">Tolak Verifikasi</div>
            </td>
          </tr>
          <tr style="background-color: #D8E7FF;font-size: 12px;font-weight: 500;">
            <td style="text-align: center;">Aletta Casuna Lestari</td>
            <td style="text-align: center;">2020</td>
            <td style="text-align: center; display: flex;">
              <div style="color: white; background-color: #5FC85B; border-radius: 20px; width: 120px; height: 40px; line-height: 40px;margin-right: 10px;">Verifikasi</div>
              <div style="color: white; background-color: #e83a3a; border-radius: 20px; width: 120px; height: 40px; line-height: 40px;">Tolak Verifikasi</div>
            </td>
          </tr>
          <!-- Add more rows as needed -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  // No changes to the JavaScript code
};
</script>

<style>
.table {
  display: flex;
  justify-content: center;
}

.content-table {
  align-items: center;
  margin: 25px 0;
  font-size: 0.9em;
  width: 50%;
  border-radius: 10px;
  overflow: hidden;
  border-collapse: collapse;
}


.content-table th,
.content-table td {
 padding: 10px 143px;

}

.content-table tbody tr {
  border-bottom: 1px solid #ddd;
}



</style>
