<template>
  <div id="app">
    <v-container>
      <v-row v-if="resultadoCalculado != 0"> 
        <h2> Resultado: 
        {{ resultadoCalculado }}
        </h2>
        </hr>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field v-model="resultado">
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="resultado += 9">9</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="resultado += 8">8</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="resultado += 7">7</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="resultado += '/'">/</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="resultado = resultado.slice(0,-1)"><-</v-btn>
        </v-col>
        <v-col>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="resultado += 4">4</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="resultado += 5">5</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="resultado += 6">6</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="resultado += '*'">*</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="resultado = ''">C</v-btn>
        </v-col>
        <v-col>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="resultado += 1">1</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="resultado += 2">2</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="resultado += 3">3</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="resultado += '-'">-</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="resultado += '²'">x²</v-btn>
        </v-col>
            <v-col>
          <v-btn @click="resultado += '//'">sqrt</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="resultado += 0">0</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="resultado += ','">,</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="resultado += '%'">%</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="resultado += '+'">+</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="calcular(resultado)">=</v-btn>
        </v-col>
        <v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
    components: {
        
    },
    data: function() {
        return {
            resultado: '',
            resultadoCalculado: 0, 
            lastCommand: ' '
        }
    },
    methods: {
      calcular(resultado) {
        let auxiliar = 0

        for (let number in resultado) {
          if (resultado[number] == '*') {
            this.resultado
            this.resultadoCalculado = auxiliar
            auxiliar = 0
            console.log('*')
          }
          else if (resultado[number] == '/') {
            console.log('/')
          }
          else if (resultado[number] == '+') {
            console.log('+')
          }
          else if (resultado[number] == '-') {
            console.log('-')
          }
          else if (resultado[number]) {
            console.log(resultado[number])
            //resultadoCalculado = resultadoCalculado*10 + resultado[number]
            auxiliar = auxiliar*10 + resultado[number]*1
          }
        }
        this.resultadoCalculado = auxiliar
      }

    }
}
</script>

<style>
    #app {

    }
    .grid-container {
    display: grid;
  }
</style>
