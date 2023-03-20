<script setup>
import EventCard from "@/components/EventCard.vue"
import { ref } from 'vue'

const events = ref([
  {
    id: Number(901001001),
    category: 'animal welfare',
    title: 'Cat Adoption Day',
    description: 'Get a free cat!',
    location: 'Meow Town',
    date: 'January 28, 2023',
    time: '12:00',
    petsAllowed: true,
    organiser: 'Cat Lady'
  },
  {
    id: Number(9101101101),
    category: 'workshop',
    title: 'Cybernetics 101',
    description: 'Come cut your hand off!',
    location: 'Down Town',
    date: 'March 01, 2023',
    time: '12:00',
    petsAllowed: true,
    organiser: 'Robot Lady',
  },
  {
    id: Number(9010111011),
    category: 'workshop',
    title: 'Carpentry 101',
    description: 'Come cut your hand off!',
    location: 'Chainsaw Academy',
    date: 'June 18, 2023',
    time: '12:00',
    petsAllowed: true,
    organiser: 'Wood Guy'
  },
  {
    id: Number(9110101101),
    category: 'workshop',
    title: 'Machining 101',
    description: 'Come cut your hand off!',
    location: 'Low Town',
    date: 'August 11, 2023',
    time: '12:00',
    petsAllowed: false,
    organiser: 'Joey Eight-Fingers'
  },
])

</script>

<template>
  <h1>Events for Real</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>