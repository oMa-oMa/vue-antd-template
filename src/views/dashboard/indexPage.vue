<template>
    <div>
        <h1>欢迎您：{{ name }}</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['name'])
    }
}
</script>