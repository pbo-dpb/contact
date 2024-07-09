<template>

    <div v-html="html" class="prose dark:prose-invert max-w-none"
        :class="{ 'prose-p:font-semibold prose-p:text-sky-800': content.presentation === 'choice' }">
    </div>

</template>
<script setup>
import Content from '../../Content';
import { storeToRefs } from 'pinia'
import { marked } from 'marked';
import { computed } from 'vue'

import Store from '../../stores/store.js'
const props = defineProps({
    content: Content
})

const { strings } = storeToRefs(Store());


const html = computed(() => {
    return strings.value[props.content?.value] ? marked(strings.value[props.content.value]) : '';
})

</script>