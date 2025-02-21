<script setup lang="ts">
const { data: data1, refresh: refresh1 } = await useFetch<any>('/echo/get', {
  headers: {
    'Accept-Language': 'ja'
  }
})

const { data: data2, refresh: refresh2 } = await useFetch<any>('/echo/get', {
  headers: {
    'accept-language': 'ja'
  }
})

const data = computed(() => ({
  'with Accept-Language': data1.value?.headers['accept-language'],
  'with accept-language': data2.value?.headers['accept-language']
}))

function refresh() {
  refresh1()
  refresh2()
}
</script>

<template>
  <div>
    <pre>{{ JSON.stringify(data, null, 4) }}</pre>
    <br />
    <br />
    <button @click="refresh">Refresh data</button>
  </div>
</template>
