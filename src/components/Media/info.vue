<template>
    <div class="main__sums">

        <div class="main__sums_item" v-for="sum in sums" :key="sum.name">
            <span class="main__sums_item-name">{{ sum.name }}</span>
            <span class="main__sums_item-text">{{ sum.text }}</span>
        </div>

    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    item: Object
})

const sums = computed(() => {
    return [
        { name: 'Бюджет', text: props.item.budget ? `$ ${props.item.budget.toLocaleString()}` : 'Нет данных' },
        { name: 'Сборы', text: props.item.revenue ? `$ ${props.item.revenue.toLocaleString()}` : 'Нет данных' },
        { name: 'Статус', text: props.item.status ? `$ ${props.item.status}` : 'Нет данных' },
        { name: 'Исходное название', text: props.item.original_title || props.item.original_name },
    ]
})


</script>
