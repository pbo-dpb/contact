<template>

    <div :class="{ 'flex flex-row gap-2 items-center border-t-2 border-sky-500 pt-4 pb-2': content.presentation }">
        <StringContent v-if="content.type === 'string'" :content="content"></StringContent>
    </div>

    <div v-if="content.panels && content.panels.length" class="flex flex-col gap-2 w-full -mt-2">
        <SubpanelChoice v-for="subpanel in content.panels" :panel="subpanel"></SubpanelChoice>
    </div>

</template>
<script setup>
import SubpanelChoice from '../SubpanelChoice.vue';
import Content from '../../Content';
import StringContent from './StringContent.vue';

const props = defineProps({
    content: Content
})
</script>