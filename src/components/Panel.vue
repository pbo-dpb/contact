<template>

    <div class="w-full">
        <BackButton></BackButton>
        <div class="flex flex-col gap-4">
            <Content v-for="content in currentPanel.contents" :content="content">
            </Content>

        </div>
        <div class="flex flex-col gap-2 w-full">
            <SubpanelChoice v-for="subpanel in currentPanel.panels" :panel="subpanel"></SubpanelChoice>
        </div>
    </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import SubpanelChoice from './SubpanelChoice.vue';
import BackButton from './BackButton.vue';
import Store from '../stores/store.js'
import Content from './Contents/Content.vue';

const store = Store();
const { strings, currentPanel } = storeToRefs(store);



</script>