<template>
  <div class="MyProfile">

    <div class="prof_content_image">
      <div class="prof_image">
        <img class="img-user" :src="'http://localhost:5000/public/images/' + dataUser.nameImage" v-if="dataUser.nameImage!=null"/>
        <font-awesome-icon icon="user-circle" class="image" v-else/>
        <label class="btn_image shadow-sm" title="Imagen de perfil" for="img_profile"><font-awesome-icon icon="camera" size="lg" /></label>
        <input id="img_profile" class="hidde" type="file" ref="file" @change="image()" />
      </div>
    </div>

    <div class="prof_content_user">
      <form class="form" enctype="multipart/form-data">
       <editInput @data="getUserName" :label="'Nombre y apellidos'" :name="'username'" :value="{data: dataUser.name}" :icon="'user'" />
      </form>
    </div>

  </div>
</template>

<script>
import editInput from "@/components/editInput";
import requests from "@/helpers/axios";

export default {
  name: "MyProfile",
  components: {
    editInput
  },
  data() {
    return {
      dataUser: {},
      file: null
    }
  },
  methods: {
    getUserName(username){
      const data = {
        field: 'name',
        newData: username
      };
      this.edit(data);
    },
    edit(data) {
      console.log(data);
      requests
        .editUser(data)
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    image() {
      this.file = this.$refs.file.files[0];
      this.sendImage();
    },
    sendImage() {
      requests
        .imageProfile(this.file)
        .then(res => {
          this.dataUser.nameImage = res.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    profile() {
      requests
      .myProfile()
      .then(res => {
        this.dataUser = res.data;
        console.log(this.dataUser);
      })
      .catch(error => {
        console.log(error);
      });
    }
  },
  created(){
    this.profile();
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

.img-user {
  width: 160px;
  border-radius: 50%;
}

</style>