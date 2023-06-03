<script>
import BaseInput from '@/components/BaseInput.vue';

export default {
    name: 'ContactView',
    components: {
        BaseInput,
    },
    data: () => ({
        title: 'Contact',
        input: {
            name:'',
            email:'',
            telepon:'',
            pesan:''
        }

    }),
    methods: {
        submit(){
            console.log(this.input);
        }
    }
}
</script>

<template> 
    <div class="contact">
        <h2>Contact me</h2>
        <p>Send message via Contact Form below.</p>
        <br>
        <form @submit.prevent="submit">
        <BaseInput v-model="input.name" name="Name" label="Zilvi Azus Sriyanti" type="text"/>
        <BaseInput v-model="input.email" name="Email" label="zilviya@gmail.com" type="email" />
        <BaseInput v-model="input.telepon" name="Phone" label="08987654131" type="text" />
        <label for="pesan">
            <p>Message</p>
            <textarea v-model= "input.pesan" name="pesan" id="pesan" placeholder="Type here...">
            </textarea>
        </label>
        <br />
        <button type="submit" class="button">Send</button>
        </form>
        <br>
        <h2>Social Media</h2>
        <div class="sosmed">
            <a href="https://www.instagram.com/zilviazz_/"><i><font-awesome-icon icon="fa-brands fa-instagram"></font-awesome-icon></i></a>
            <a href="https://github.com/zilviazz"><i><font-awesome-icon icon="fa-brands fa-github"></font-awesome-icon></i></a>
            <a href="https://www.linkedin.com/in/zilvi-azus-sriyanti-478312250/"><i ><font-awesome-icon icon="fa-brands fa-linkedin"></font-awesome-icon></i></a>
        </div>
    </div> 
</template>

<style>

input[type=text], select {
  width: 50%;
  padding: 7px 18px;
  margin: 7px 0;
  display: inline-block;
  box-sizing: border-box;
  background-color: #312e2e;
  color:white;
  border-radius: .3rem;
}
input[type=email], select {
  width: 50%;
  padding: 7px 18px;
  margin: 7px 0;
  display: inline-block;
  box-sizing: border-box;
  background-color: #312e2e;
  color:white;
  border-radius: .3rem;
}
#pesan{
    width: 50%;
  padding: 10px 18px;
  margin: 10px 0;
  display: inline-block;
  box-sizing: border-box;
  background-color: #312e2e;
  color:white;
  border-radius: .3rem;
}
button {
  width: 10%;
  padding: 7px 18px;
  margin: 7px 0;
  display: inline-block;
  box-sizing: border-box;
  background-color: hsl(0, 100%, 90%);
  border-radius: .3rem;
  font-size: medium;
  font-weight: bold;
}

button:hover{
  background-color:  hsl(0, 20%, 50%);
  color: white;
}


@media (max-width: 900px){
    button[type=submit], select {
        width: 18%;
    }
}

@media (max-width: 555px){
    button[type=submit], select {
        width: 25%;
    }
}

i {
  display: inline-block;
  margin-right: 2%;
  font-size: 250%;
}

</style>