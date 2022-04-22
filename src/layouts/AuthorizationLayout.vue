<template>
  <div class="flex flex-center q-pt-xl">
  <q-card class="my-card">
    <q-card-section id="titleAuth">
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
        :disable="disable"
      />
      <q-btn
        label="Отправить код"
        type="submit"
        v-if="accessBtnCode"
        @click="accessCode()"
      />
      <q-input
        type="password"
        v-model="code"
        label="Код"
        class="input"
        v-if="!accessBtnCode"
        :disable="disableCode"
      />
      <a
        id="currentTime"
        class="q-mt-sm"
        href="#"
        v-if="!accessBtnCode"
        @click="linkCodeAgain()"
      >
        Отправить код еще раз через {{currentTime}}</a>
        <q-btn
          label="Войти"
          type="submit"
          v-if="!accessBtnCode"
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
      user: [],
      accessBtnCode: true,
      disable: false,
      disableCode: false,
      currentTime: 30,
      timer: null
    }
  },
  methods: {
    accessCode () {
      this.accessBtnCode = false
      this.disable = true
      this.startTimer()
    },
    startTimer () {
      this.timer = setInterval(() => {
        this.currentTime--
      }, 1000)
    },
    stopTimer () {
      clearTimeout(this.timer)
      this.disableCode = true
      this.disable = false
    },
    linkCodeAgain () {
      this.disableCode = false
      this.disable = true
      this.currentTime = 30
      this.startTimer()
      this.login()
    },
    login () {
      api.post('/login', { phone_number: this.phone })
      this.sinIn()
    },
    async sinIn () {
      try {
        (api.post('/login/code', { phone_number: this.phone, code: this.code })
          .then(response => {
            Cookies.set('token', response.data.result.token)
            if (Cookies.get('token') != null) {
              this.$router.push({ path: '/' })
            }
          }))
      } catch (error) {
        console.log(error.response.data.result.error.message)
      }
    }
  },
  watch: {
    currentTime (time) {
      if (time === 0) {
        this.stopTimer()
      }
    }
  }
}
</script >
<style scoped>
#titleAuth{
  background-color: #212b34;
  color: white;
}
.input{
  width: 25vw
}
button{
  background-color: #aa2310;
  color: white;
}
.my-card{
  width: 30vw;
}
#currentTime{
  color: #5b6062;
}
</style>
