<template>
    <div v-for="(item, index) in upComing" :key="index">
        <div class="q-pl-md">
            <q-separator color="primary" size="0.1" class=""></q-separator>
        </div>
        <div class="q-py-md row q-pl-md text-white">
            <div class="col-8 text-body1 text-weight-medium">
                {{ item.subjectName }}
            </div>
            <div class="col-4 text-body1 text-weight-medium">
                {{ item.startTime }} -{{ item.endTime }}
            </div>
        </div>
        <div class="q-pl-md">
            <q-separator color="primary" size="0.1" class=""></q-separator>
        </div>
        <div class="q-pl-md">
            <q-separator color="primary" size="0.1" class=""></q-separator>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        upComing: {
            type: Object
        }
    }
}
</script>

<style>

</style>