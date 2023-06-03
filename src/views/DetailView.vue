<template>
    <div>
      <template v-if="productId === 'figma'">
        <div class="project1">
        <h1>Desain Antarmuka Pemesanan Tiket</h1>
        <br>
        <img src="@/assets/fp-1.png" alt="" > 
        <h2>Detail Project</h2>
        <p>Pembuatan tampilan antarmuka untuk pemesanan tiket taman bermain Gofun di Bojonegoro dengan menggunakan Figma</p>
        <ul>
            <li>Login</li>
            <li>Register</li>
            <li>Pemesanan Tiket</li>
            <li>Pembayaran</li>
        </ul>
        <h2>Teams</h2>
        <ul>
            <li>Zilvi Azus Sriyanti</li>
            <li>Syahrani Ratnaswari</li>
            <li>Nilam Kumallah Anggreani</li>
        </ul>
        <h2>Link Project</h2>
        <a href="https://www.figma.com/file/HbNcltt1yc6Y9gF6yljUaa/E-BISNIS?type=design&node-id=16-5&t=gC9hKXOrm6e1nXnj-0">Link Figma</a>
        <p>Dibuat tahun 2022</p>
        </div>
      </template>

      <template v-else-if="productId === 'game'">
        <div class="project2">
        <h1>Game Flappy Fish</h1>
        <br>
        <img src="@/assets/fp-2.png" alt="">
        <h2>Detail Project</h2>
        <p>Pembuatan game flappy fish sederhana yang bisa dimainkan di web browser</p>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
        <h2>Teams</h2>
        <ul>
            <li>Zilvi Azus Sriyanti</li>
            <li>M. Sahlan Amin</li>
            <li>Hafizh Abiyyu Firdaus</li>
        </ul>
        <h2>Link Project</h2>
        <a href="https://github.com/zilviazz/flappy">Link Github</a>
        <p>Dibuat tahun 2022</p>
        </div>
      </template>

      <template v-else>
        <div class="project3">
        <h1>Analisis Credit Scoring</h1>
        <br>
        <img src="@/assets/fp-3.png" alt="" >
        <h2>Detail Project</h2>
        <p>Analisis data untuk memprediksi Bad Credit dan Good Credit calon nasabah</p>
        <ul>
            <li>Pemrosesan data menggunakan google colab</li>
            <li>Pembuatan dashboard menggunakan google data studio</li>
            <li>Pembuatan presentasi analisis data di google slides</li>
        </ul>
        <h2>Teams</h2>
        <ul>
            <li>Zilvi Azus Sriyanti</li>
            <li>Puput Aryanti</li>
            <li>Amanda Hasna C.</li>
            <li>Said H.A.</li>
            <li>Seraf Adonai</li>
        </ul>
        <h2>Link Project</h2>
        <ul>
            <li><a href="https://colab.research.google.com/drive/1_gp0ay1DxWe05ChrDoiAUkK8e_CofsLV?usp=sharing">Link Google Colab</a></li>
            <li><a href="https://datastudio.google.com/reporting/483a65e4-79cf-4b8a-bb68-c3ea6665b700">Link Dashboard</a></li>
            <li><a href="https://docs.google.com/presentation/d/1_q3hSPPEi3ZO4BcAl-LMTtYxKhfFKBMxg5XVczZeoSw/edit?usp=sharing">Link Presentasi</a></li>
        </ul>
        <p>Dibuat tahun 2022</p>
        </div>
      </template>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productId: ''
      };
    },
    created() {
      this.productId = this.$route.params.id;
    }
  };
  </script>

<style>
.project1 img {
  width: 50rem;
  border-radius: 1rem;
  border:1rem solid #312e2e;
}

@media (max-width: 700px) {
  .project1 {
    min-height: 50vh;
  }

  .project1 img{
    width: 13rem;
    border:.5rem solid #312e2e;
  }

}

.project2 img {
  width: 50rem;
  border-radius: 1rem;
  border:1rem solid #312e2e;
}

@media (max-width: 700px) {
  .project2 {
    min-height: 50vh;
  }

  .project2 img{
    width: 13rem;
    border:.5rem solid #312e2e;
  }

}

.project3 img {
  width: 50rem;
  border-radius: 1rem;
  border:1rem solid #312e2e;
}

@media (max-width: 700px) {
  .project3 {
    min-height: 50vh;
  }

  .project3 img{
    width: 13rem;
    border:.5rem solid #312e2e;
  }

}
</style>