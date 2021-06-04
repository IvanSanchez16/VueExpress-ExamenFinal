<template>
  <div class="about">
    <h1>Registro</h1>
    <b-form @submit.prevent="guardarCarro()">
        <Input
            v-model="carro.modelo"
            id="modelo"
            titulo="Modelo"
            placeholder="Ingrese el modelo"
            :maxlength="50"
            :error= "erroresValidacion && !validacionModelo"
            mensajeError= "Es necesario ingresar el modelo"
        />
        <Input
            v-model="carro.marca"
            id="marca"
            titulo="Marca"
            placeholder="Ingrese la marca"
            :maxlength="60"
            :error= "erroresValidacion && !validacionMarca"
            mensajeError= "Es necesario ingresar la marca"
        />
        <Input
            v-model="carro.año"
            id="año"
            titulo="Año"
            placeholder="Ingrese el año"
            :maxlength="4"
            :error= "erroresValidacion && !validacionAño"
            mensajeError= "Es necesario ingresar el año"
        />
        <Input
            v-model="carro.color"
            id="color"
            titulo="Color"
            placeholder="Ingrese el color"
            :maxlength="20"
            :error= "erroresValidacion && !validacionColor"
            mensajeError= ""
        />
        <b-button type="submit" class="mt-2" variant="primary">Guardar</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Input from "../components/Input";

export default {
  name: "Agregar",
  components: {
    Input,
  },
  data() {
    return {
      carro: {
        marca: "",
        modelo: "",
        año: "",
        color: ""
      },
      erroresValidacion: false,
    };
  },
  computed: {
    validacionModelo() {
      return (
        this.carro.modelo !== undefined && this.carro.modelo.trim() !== "" && this.carro.modelo.length <= 50
      );
    },
    validacionMarca() {
      return (
        this.carro.marca !== undefined && this.carro.marca.trim() !== "" && this.carro.marca.length <= 60
      );
    },
    validacionAño() {
      return (
        this.carro.año !== undefined &&
        this.carro.año.trim() !== "" && 
        this.carro.año.length == 4
      );
    },
    validacionColor() {
      return (
        (this.carro.modelo !== undefined && this.carro.modelo.trim() !== "" && this.carro.color.length <= 20) || this.carro.año == undefined
      );
    },
  },
  methods: {
    ...mapActions(["crearCarros"]),
    guardarCarro() {
      if (this.validacionMarca && this.validacionAño && this.validacionModelo && this.validacionColor) {
        this.erroresValidacion = false;
        //Guardar
        this.crearCarros({
          params: this.carro,
          onComplete: (response) => {
             
            this.$notify({
              type: 'success', 
              title: response.data.mensaje,
            });
            
            this.$router.push({
                name: 'Home'
            })
          },
          onError: (error) => {
              console.log(error);
              
            this.$notify({
              type: 'error', 
              title: error.response.data.mensaje,
            });
            
          },
        });
      } else {
        this.erroresValidacion = true;
      }
    },
  },
};
</script>
