<template>
  <div>
    <button @click="log($event)">Log Messageeeeeeeeee</button>
  </div>
</template>

<script>
export default {
  methods: {
    log: function (e) {
      console.log(e.currentTarget)
      console.log(e)
    }
  }
}
</script>
