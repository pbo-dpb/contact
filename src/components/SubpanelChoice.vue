<template>
    <div role="button" @click="openPanel"
        class="border-l-2 border-sky-500 pl-4 text-sky-700 dark:text-sky-300 hover:text-sky-800 dark:hover:text-sky-200 font-semibold cursor-pointer flex flex-row justify-between items-center gap-2 hover:bg-sky-100 dark:hover:bg-gray-800 select-none">
        {{ strings[panel.title] }}

        <svg v-if="panel.redirects" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>


        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>



    </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'

import Store from '../stores/store.js'
import Panel from '../Panel.js';

const { strings, currentPanel, language } = storeToRefs(Store());
const store = Store()
const props = defineProps({
    panel: Panel
})

const openPanel = () => {
    if (props.panel.redirects) {
        window.location.href = props.panel.redirects[language.value];
    } else {
        store.pushToStack(props.panel);
    }

}

</script>