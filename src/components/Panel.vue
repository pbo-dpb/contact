<template>

    <div class="flex flex-col gap-4" v-if="!invisible && deployed">

        <Content v-for="content in panel.contents" :content="content">
        </Content>

        <PanelComponent v-for="subpanel in panel.panels" :panel="subpanel"></PanelComponent>

    </div>
    <div v-if="!invisible && !deployed">
        <div
            class="border-l-2 border-sky-500 pl-4 text-sky-700 dark:text-sky-300 hover:text-sky-800 dark:hover:text-sky-200 font-semibold cursor-pointer flex flex-row justify-between items-center gap-2 hover:bg-sky-100 dark:hover:bg-gray-800 select-none">
            {{ strings[panel.title] }}

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>



        </div>
    </div>

</template>
<script setup>
import { defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import Content from './Contents/Content.vue';
import Store from '../stores/store.js'

import Panel from '../Panel';

const { strings } = storeToRefs(Store());
const props = defineProps({
    panel: Panel,
    deployed: Boolean,
    invisible: Boolean
})
const PanelComponent = defineAsyncComponent(() =>
    import('./Panel.vue')
)



</script>