<template>
    <div class="row">
        <div class="col s6 offset-s3">
            <div class="card-panel teal">
                <span class="white-text"> {{comment}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Comment",
        props: ['comment']
    }
</script>

<style scoped>

</style>