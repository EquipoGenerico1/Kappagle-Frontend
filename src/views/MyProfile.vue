<template>
  <div class="MyProfile">
    
    <div class="prof_content_image">
      <div class="prof_image">
        <font-awesome-icon icon="user-circle" class="image" />
        <label class="btn_image shadow-sm" title="Imagen de perfil" for="img_profile"><font-awesome-icon icon="camera" size="lg" /></label>
        <input id="img_profile" class="hidde" type="file" />
      </div>
    </div>
    
    <div class="prof_content_user">
      <div class="form">
       <editInput @data="getUserName" :label="'Nombre y apellidos'" :name="'username'" :value="'Pepe'"/>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import editInput from "@/components/editInput";
import requests from "@/helpers/axios";

export default {
  name: "MyProfile",
  components: {
    editInput
  },
  data() {
    return {
      dataUser: []
    }
  },
  methods: {
    getUserName(username){
      this.edit(username);
    },
    edit(data) {
      requests
        .editUser(data)
        .then(res => {
          console.log('si');
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>

<style scoped>
.MyProfile{
  width: 100%;
  padding: 1rem .5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.prof_content_image{
  width: 100%;
  padding-bottom: 3rem;
  display: flex;
  justify-content: center;
}

.prof_image{
  position: relative;
}

.image{
  font-size: 10rem;
  color: rgb(112, 112, 112, 0.22);
}

.btn_image{
  padding: 1rem;
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  cursor: pointer;
  background-color: #729DFF;
  color: rgba(242, 242, 242,0.79);
}

.btn_image:hover, .btn_image:focus{
  background-color: rgb(102, 137, 219);
  transition: 0.2s;
  -moz-transition: 0.2s;
  -o-transition: 0.2s;
  -webkit-transition: 0.2s;
}

.prof_content_user{
  width: 100%;
}

.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>