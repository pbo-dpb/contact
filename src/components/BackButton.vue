<template>

    <button
        class="border-b-2 border-sky-500 text-sm w-fit mb-4 font-semibold flex flex-row items-center gap-2 text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200 hover:bg-sky-100  dark:hover:bg-gray-800 select-none"
        @click="store.popLastFromStack()" v-if="previousPanel">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>

        {{ strings[previousPanel.title] }}
    </button>

</template>
<script setup>
import { storeToRefs } from 'pinia'
import Store from '../stores/store.js'

const store = Store();
const { strings, previousPanel } = storeToRefs(store);



</script>