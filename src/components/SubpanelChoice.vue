<template>
    <div role="button" @click="openPanel"
        class="border-l-2 border-sky-500 pl-4 text-sky-700 dark:text-sky-300 hover:text-sky-800 dark:hover:text-sky-200 font-semibold cursor-pointer flex flex-row justify-between items-center gap-2 hover:bg-sky-100 dark:hover:bg-gray-800 select-none">
        {{ strings[panel.title] }}

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>



    </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'

import Store from '../stores/store.js'
import Panel from '../Panel.js';

const { strings, currentPanel } = storeToRefs(Store());
const store = Store()
const props = defineProps({
    panel: Panel
})

const openPanel = () => {
    store.pushToStack(props.panel);
}

</script>