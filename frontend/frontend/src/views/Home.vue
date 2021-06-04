<template>
  <div class="home">
    <h1>Autos</h1>
    <b-button variant="primary" to="/registrar">Registrar</b-button>
    <Table :items="carros" :fields="campos"></Table>
  </div>
</template>

<script>
// @ is an alias to /src
import Table from '../components/Table.vue'
import { mapState, mapActions } from "vuex";

export default {
  name: 'Home',
  components: {
    Table
  },
  data(){
    return {
      campos: [
        { key: "id", label: "ID" },
        { key: "modelo", label: "Modelo" },
        { key: "marca", label: "Marca" },
        { key: "año", label: "Año" },
        { key: "color", label: "Color",
        formatter: (value) =>{
          return value || "Sin color"
        }},
      ]
    }
  },
  computed: {
    ...mapState(['carros'])
  },
  methods: {
    ...mapActions(['setCarros'])
  },
  mounted(){
    this.setCarros();
  }
}
</script>
