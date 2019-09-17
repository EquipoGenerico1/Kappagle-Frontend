<template>
  <div id="container-master">
    <div id="search-bar">
        <button id="seach-button"> 
            <font-awesome-icon icon="search" />
        </button>  
        <input type="search" id="mySearch" placeholder="Buscar empleado...">
        <div id="space-for-add-button"> 
            <button id="add-button">
                <font-awesome-icon icon="user-plus" />
            </button>
        </div>
    </div>
    <div id="employers-cards">
       <NCard v-for="card in 20"></NCard>
    </div>
  </div>
</template>

<script>

import NCard from "../components/NamesCards";


export default {
  name: 'EmployersList',
  components: {
    NCard
  }
}
</script>

<style scoped>
#container-master{
    font-size: 36px;
}
#search-bar{
display: flex;
height: 100px;
width: 100vh;
background-color:  #1e344b;
margin-bottom: 22px;
box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
}
#seach-button{
    border-width: none;
    border-style: none;
    border-color: none;
    border-image: none;
    color:#1e344b;
    background-color:#1e344b;
    color: white;
    padding: 2px 20px;
}
#mySearch{
    background-color: transparent;
    width: 70%;
    border-width: none;
    border-style: none;
    border-color: none;
    border-image: none;
    color: white;
    padding: 1px 10px;
}
#space-for-add-button{
    display: flex;
    width: 20%;
    justify-content: center;
    align-items: center;
}
#add-button{
    border-width: none;
    border-style: none;
    border-color: none;
    border-image: none;
    color:#1e344b;
    background-color: white;
    color:  #14283d;
    padding: 20px 20px;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;
    margin-top: 50px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
}
#employers-cards{
    display: flex;
    width: 100vh;
    background-color: white;
    flex-direction: column;
    padding: 5px;
}

</style>