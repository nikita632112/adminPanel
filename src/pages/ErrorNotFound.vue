<template>
  <div id="body" class="fullscreen text-center q-pa-md flex flex-center">
    <div>
      <div id="errorcode">
        404
      </div>

      <div id="errormassege" class="text-h2">
        Oops. Nothing here...
      </div>

      <q-btn
        id="button"
        class="q-mt-xl"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script>
<style scoped>
#body{
  background-color: #212b34;
  color: white;
}
#errorcode{
  font-size: 30vh;
}
#errormassege{
  opacity:.4;
}
#button{
  background-color: #aa2310;
}
</style>
