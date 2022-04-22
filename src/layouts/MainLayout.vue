<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="q-ma-none">
      <q-toolbar>

        <q-toolbar-title id="titlestyle" class="col-3 text-center q-ml-xl">
          Админ-панель
        </q-toolbar-title>

        <div class="col-7 text-center text-h6">{{selectLink}}</div>

        <div class="col-2 row justify-center">
          <q-btn label="Выйти" @click="logout"/>
        </div>
      </q-toolbar>
    </q-header>

  <div class="row">
    <div class="col-3 q-ml-xl q-mt-xl q-mr-none">
      <q-page-container
        v-model="leftDrawerOpen"
        show-if-above
        bordered
      >
        <q-list>
          <div class="text-center">
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
            @selectedLink="selectedLink"
          />
          </div>
        </q-list>
      </q-page-container>
    </div>
    <div class="col-8 q-ml-xl">
      <q-page-container>
        <router-view />
      </q-page-container>
    </div>
  </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { Cookies } from 'quasar'
const linksList = [
  {
    title: 'Пользователи',
    link: '/users-list'
  },
  {
    title: 'Редактирование ставок',
    link: '/rates'
  },
  {
    title: 'Редактирование раздела "Вопросы - ответы"',
    link: '/answer-questions'
  },
  {
    title: 'Редактирование реферальной программы',
    link: '/referral-program'
  },
  {
    title: 'Баги и ошибки',
    link: '/bugs-errors'
  },
  {
    title: 'Создание объявлений',
    link: '/creating-ads'
  },
  {
    title: 'Табеля',
    link: '/report-cards'
  },
  {
    title: 'Документы',
    link: '/documents'
  }
]

export default defineComponent({
  name: 'MainLayout',
  data () {
    return {
      selectLink: 'Пользователи'
    }
  },
  components: {
    EssentialLink
  },
  methods: {
    selectedLink (title) {
      this.selectLink = title
    },
    logout () {
      Cookies.remove('token')
      Cookies.remove('user_role_id')
      this.$router.push('/login')
    }
  },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
<style scoped>
header{
  background-color: #212b34;
  color: white;
}
#titlestyle{
  border-right: solid white 2px;
}
button{
  background-color: #aa2310;
  color: white;
}
</style>
