<template>

    <div :class="{ 'flex flex-row gap-2 items-center  -ml-2 border-t-2 border-sky-500 pt-4': content.presentation }">
        <StringContent v-if="content.type === 'string'" :content="content"></StringContent>
    </div>
</template>
<script setup>
import Content from '../../Content';
import StringContent from './StringContent.vue';

const props = defineProps({
    content: Content
})
</script>