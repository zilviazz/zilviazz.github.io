<script>
import Mainheader from '@/components/main/HeaderComp.vue'
import Mainfooter from '@/components/main/FooterComp.vue'

export default {
  name : 'DefaultView',
  components : {
    Mainheader,
    Mainfooter
  }
}
</script>


<template>
    <Mainheader />
    <main>
        <slot />
    </main>
    <Mainfooter />
</template>