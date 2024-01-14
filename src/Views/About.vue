<template>
  <div class="row">
    <div class="container">
      <div class="box">
        <div class="box-body">
          <button class="btn btn-primary btn-sm" @click="getUsers" style="margin: 10px">
            <i class="fa fa-user"></i>
          </button>
          <table class="table table-bordered table-hover">
            <tbody>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>#</th>
            </tr>
            <tr v-for="(user, index) in users" :key="user.id">
              <td>{{index + 1 }}</td>
              <td>{{user.name}}</td>
              <td>{{user.email}}</td>
              <td>
                <button class="btn btn-info btn-sm bg-purple" style="margin-right: 3px" @click="showModal(user)"><i class="fa fa-pencil"></i></button>
                <button class="btn btn-sm btn-danger" @click="delUser(user.id)"><i class="fa fa-trash-o"></i></button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- modal -->
    <div class="modal fade" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Default Modal</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Pilih Nama</label>
              <input type="text" class="form-control" :value="user.name">
            </div>
            <div class="form-group">
              <label>Password Baru</label>
              <input type="text" class="form-control" v-model="password">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="update(user.id)">Save changes</button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>


    <div class="modal fade" id="notif">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Default Modal</h4>
          </div>
          <div class="modal-body">
            <p>{{ user.name }} berhasil di hapus</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";
import api from "../api/index.js";
import {useAuthUser} from "../stores/auth.js";

const store = useAuthUser()

const users = ref([]);

const user = ref('')

const password = ref('')

function showModal(item) {
  user.value = item
  $('#myModal').modal('show');
}

function notif(item) {
  user.value = item
  $('#notif').modal('show');
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

const delUser = async (id) => {
  await api.delete('delUser/'+id, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer `+store.token,
    }
  })
      .then(res => {
        getUsers()
      })
}

const update = async (id) => {
  await api.patch('user/'+id , {
    "password" : password.value
  },{
    headers: {
      accept: "application/json",
      Authorization: `Bearer `+store.token,
    }
  })
      .then(res => {
        $('#myModal').modal('hide');
      })
}
</script>
<style scoped>
table {
  font-size: 14px;
  text-align: center;
}
th {
  text-align: center;
  background-color: #a8caea;
}
</style>