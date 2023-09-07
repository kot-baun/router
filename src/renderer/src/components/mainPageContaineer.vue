<template>
  <div>
    <p class="date-value">
      {{ dateValue }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateValue: 'Дата: ' + new Date().toLocaleString()
    }
  }
}
</script>
