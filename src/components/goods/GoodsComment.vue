<template>
   <div>
       <h3>商品评论</h3>
        <comment :id="$route.params.id"></comment>
   </div>
</template>
 
<script>
import Comment from "../../subcomponents/Comment.vue";
export default {
    components:{
        Comment
    }
}
</script>
 
<style scoped lang = "scss">
 
</style>