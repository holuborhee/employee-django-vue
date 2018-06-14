import Vue from 'vue';
import employees from './employee.js';
import '../css/styles.css';


Vue.component('employee-card', require('./components/EmployeeCard.vue').default);


const app = new Vue({
    delimiters: ["{","}"],
    el: '#app',
    data: {
      employees,
      limit: 8
    }
});
