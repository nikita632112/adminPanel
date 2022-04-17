<template>
  <q-list bordered separator>
    <q-item
      clickable v-ripple
      @click="selectedLink"
      :to="link"
    >
      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    link: {
      type: String,
      default: '#'
    }
  },
  methods:
    {
      selectedLink () {
        this.$emit('selectedLink', this.title)
      }
    }
})
</script>
