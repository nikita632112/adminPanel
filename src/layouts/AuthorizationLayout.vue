<template>
  <div class="flex flex-center q-pt-xl">
  <q-card class="my-card">
    <q-card-section class="q-my-sm">
      <div class="text-h3 text-center">
        Авторизация
      </div>
    </q-card-section>

    <q-separator />

    <q-card-actions vertical>
    <q-form
      class="q-gutter-xl q-py-lg column items-center"
      @submit.prevent
    >
      <q-input
        v-model="phone"
        type="tel"
        mask = "+7 (###) ###-##-##"
        label="Номер телефона"
        class="input"
      />

      <q-input
        type="password"
        v-model="code"
        label="Код"
        class="input"
      />

        <q-btn
          id="btn"
          label="Войти"
          type="submit"
          color="primary"
          @click="login()"
        />
    </q-form>
    </q-card-actions>
  </q-card>
    </div>
</template>
<script>
import { api } from 'boot/axios'
import { Cookies } from 'quasar'
export default {
  name: 'LoginUser',
  data () {
    return {
      phone: null,
      code: null,
      user: []
    }
  },
  methods: {
    login () {
      api.post('/login', { phone_number: this.phone })
      this.sinIn()
    },
    async sinIn () {
      try {
        (api.post('/login/code', { phone_number: this.phone, code: this.code })
          .then(response => {
            Cookies.set('token', response.data.result.token, 60 * 60 * 12)
            Cookies.set('user_role_id', response.data.result.user.user_role_id, 60 * 60 * 12)
            if (Cookies.get('token') != null) {
              this.$router.push({ path: '/' })
            }
          }))
      } catch (error) {
        console.log(error.response.data.result.error.message)
      }
    }
  }
}
</script >
<style scoped>
.input{
  width: 25vw
}
#btn{
  width: 8vw;
}
.my-card{
  width: 30vw;
}
</style>
