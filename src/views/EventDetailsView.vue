<script setup>
import { ref, onMounted } from 'vue'
import EventService from '@/services/EventService'

const props = defineProps({
  id: { required: true}
})

const event = ref(null)

onMounted(() => {
  EventService.getEvent(props.id)
  .then((response) => {
    event.value = response
  })
});

</script>

<template>
  <div v-if="event">
    <h2>{{  event.title  }}</h2>
    <p>{{ event.time }} on {{ event.date }} @{{ event.location }}</p>
    <i>"{{ event.description }}"</i>
    <p><label>Run by: <span>{{ event.organiser }}</span></label></p>
  </div>
</template>
