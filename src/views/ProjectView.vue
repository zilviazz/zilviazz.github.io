<script>
// import { RouterLink, RouterView } from 'vue-router'
import BaseCard from '@/components/base/CardComp.vue';
import { mapState } from 'pinia';
import imageStore from '../stores/image';

export default{
    name: 'ProjectPage',
    components:{
        BaseCard
    },
    computed:{
        ...mapState(imageStore,['g$list']),
    }
}

</script>

<template>
    <section>
        <h1> My Projects </h1>
        <p>Projects I've been worked on.</p>
        <br>
        <div class="grid-container">
            <template v-for="(img, index) in g$list" :key="index">
                <RouterLink :to = "{name: 'detail', params:{id: img.slug}}">
                    <BaseCard :data="img"/>
                </RouterLink>
            </template>
        </div>
    </section>
  <RouterView />
</template>



