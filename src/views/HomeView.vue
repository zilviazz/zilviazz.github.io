<script>
export default {
  name : 'HomePage',
};
</script>

<template>
  <div class="home">
    <table>
      <tr>
        <td>
          <h1>Zilvi Azus Sriyanti</h1>
          <br>
          <h2>About</h2>
          <span class="hi"> Hello... </span>
          <p> My name is Zilvi, I am from Bojonegoro, Indonesia </p>
          <p class="info"> Love in drawing and design grafis </p>
          <p class="text"> Student at UPN "Veteran" Jawa Timur </p>
          <br>
          <h2>Quotes</h2>
          <p class="quote">"We must believe that hard work can beat talent even though it takes a long time"</p>
        </td>
        <td><img src="@/assets/home-img2.png" alt=""></td>
      </tr>
    </table>
  </div>
</template>

<style>
img{
  padding-left: 30px;
  width: 25rem;
}

.quote{
  font-style: italic;
}

@media (max-width: 350px) {
  body {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
