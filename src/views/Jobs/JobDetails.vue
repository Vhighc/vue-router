<template>
  <h1>Job Details Page</h1>
  <p>The job id is {{ id }}</p>
  <!-- <p>The job id is {{ $route.params.slug }}</p> -->
</template>

<script>
export default {
    props: ['id'],
    // data () {
    //     return {
    //         id: this.$route.params.slug
    //         id: this.$route.params.id
    //     }
    // }

}
</script>

<style>

</style>