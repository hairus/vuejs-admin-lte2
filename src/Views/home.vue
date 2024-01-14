<template>
  <div class="row">
    <div class="col-md-6">
      <div class="box box-primary">
        <div class="box-header">
          <div class="box-title">
            SHOW USER
          </div>
        </div>
        <div class="box-body">
          <div class="form-group">
            <label>Input</label>
            <input type="text" class="form-control" v-model="user">
          </div>
          <div class="form-group">
            <label>Pilih Tanggal</label>
            <VueDatePicker id="tgl" v-model="date" :format="format" auto-apply></VueDatePicker>
          </div>

          <div class="form-group">
            <label>Pilih Users</label>
            <v-select :options="users" label="name" :reduce="users => users.id" v-model="user_id" multiple></v-select>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="box box-primary">
        <div class="box-header">
          <div class="box-title">
            SHOW USER
          </div>
        </div>
        <div class="box-body">
          {{ user_id }}
          <code>{{user}} {{ date }}</code>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {onMounted, ref} from "vue";

import api from "../api/index.js"

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

import router from "../route/index.js";
import {useAuthUser} from "../stores/auth.js";

const store = useAuthUser()

const user = ref('');
const date = ref(new Date());
const users = ref([]);

const user_id = ref('')

const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}/${month}/${day}`;
}
const getUsers = async () => {
  await api.post('getUser', {
    "name" : "name"
  },{
    headers: {
      accept: "application/json",
      Authorization: `Bearer `+store.token,
    }
  })
      .then(res => {
        users.value = res.data
      })
}
onMounted(() => {
  getUsers()
})

</script>
<style>
.dp__input{
  font-size: 14px;
}
.dp__icon{
  font-size: 14px;
}
.dp__menu{
  font-family: 'Source Sans Pro','Helvetica Neue',serif;
  font-size: 14px;
}
.v-select{
  font-size: 14px;
}
.vs__search{
  margin: 6px;
  font-size: 10px;
}

:root {
  --vs-colors--lightest: rgba(60, 60, 60, 0.26);
  --vs-colors--light: rgba(60, 60, 60, 0.5);
  --vs-colors--dark: #333;
  --vs-colors--darkest: rgba(0, 0, 0, 0.15);

  /* Search Input */
  --vs-search-input-color: inherit;
  --vs-search-input-bg: rgb(255, 255, 255);
  --vs-search-input-placeholder-color: inherit;

  /* Font */
  --vs-font-size: 1rem;
  --vs-line-height: 1.4;

  /* Disabled State */
  --vs-state-disabled-bg: rgb(248, 248, 248);
  --vs-state-disabled-color: var(--vs-colors--light);
  --vs-state-disabled-controls-color: var(--vs-colors--light);
  --vs-state-disabled-cursor: not-allowed;

  /* Borders */
  --vs-border-color: var(--vs-colors--lightest);
  --vs-border-width: 1px;
  --vs-border-style: solid;
  --vs-border-radius: 4px;

  /* Actions: house the component controls */
  --vs-actions-padding: 4px 6px 0 3px;

  /* Component Controls: Clear, Open Indicator */
  --vs-controls-color: var(--vs-colors--light);
  --vs-controls-size: 1;
  --vs-controls--deselect-text-shadow: 0 1px 0 #fff;

  /* Selected */
  --vs-selected-bg: #3c8dbc;;
  --vs-selected-color: #0c0808;
  --vs-selected-border-color: var(--vs-border-color);
  --vs-selected-border-style: var(--vs-border-style);
  --vs-selected-border-width: var(--vs-border-width);

  /* Dropdown */
  --vs-dropdown-bg: #fff;
  --vs-dropdown-color: inherit;
  --vs-dropdown-z-index: 1000;
  --vs-dropdown-min-width: 160px;
  --vs-dropdown-max-height: 350px;
  --vs-dropdown-box-shadow: 0px 3px 6px 0px var(--vs-colors--darkest);

  /* Options */
  --vs-dropdown-option-bg: #000;
  --vs-dropdown-option-color: var(--vs-dropdown-color);
  --vs-dropdown-option-padding: 3px 20px;

  /* Active State */
  --vs-dropdown-option--active-bg: #5897fb;
  --vs-dropdown-option--active-color: #fff;

  /* Deselect State */
  --vs-dropdown-option--deselect-bg: #fb5858;
  --vs-dropdown-option--deselect-color: #fff;

  /* Transitions */
  --vs-transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);
  --vs-transition-duration: 150ms;
}

</style>
