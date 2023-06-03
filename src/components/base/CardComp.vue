<script>
export default{
    name: 'CardComp',
    props:{
        data: Object,
    },
};
</script>

<template>
    <figure class="grid-item">
        <div class="img-container">
            <img class="grid-img" :src="data.img" alt=""/>
        </div>
        <figcaption>{{data.title}}</figcaption>
    </figure>
</template>

<style>
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 0.5fr);
    gap: 1rem;
}

.img-container{
    object-fit: cover;
    height: 300px;
}

.grid-item {
    width: 100%;
    overflow: hidden;
    border: 1px solid grey;
    border-radius: .5rem;
}

.grid-container :hover {
    border: 3px solid #312e2e;
}

.grid-img {
    width: 100%;
}

figcaption {
    /* padding: .25rem 1 rem; */
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: large;
}

</style>