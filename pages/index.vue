<template>
  <main>
    Hello {{ time }}
  </main>
</template>

<script>
export default {
  data: () => ({
    time: null
  }),
  async mounted () {
    this.time = await fetch('/api/time').then(res => res.json())
  }
}
</script>
