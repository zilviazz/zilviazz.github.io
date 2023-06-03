<template>
    <header class="head">
        <h1>zilviazz_</h1>
            <nav class="nav">
                <RouterLink :to="{ name : 'home'}">Home</RouterLink>
                <RouterLink :to="{ name : 'project'}">Project</RouterLink>
                <RouterLink :to="{ name : 'contact'}">Contact</RouterLink>
            </nav>
    </header>
</template>

<style>

.head{
  padding: 0px 0px 20px 0px;
}


nav {
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>