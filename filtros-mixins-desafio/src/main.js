import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contagem', function (value) {
	
	let aux = ''

	value = value.split(' ')
	
	for (let prop in value)
	{
		aux += value[prop] + ' (' + value[prop].length + ') '
	}

	return aux
  })

new Vue({
	render: h => h(App),
}).$mount('#app')
