<template>
  <main>
    UTC Time: {{ time }}
  </main>
</template>

<script>
export default {
  data: () => ({
    time: null
  }),
  async mounted () {
    this.time = await fetch('/api/time/UTC').then(res => res.json())
  }
}
</script>
