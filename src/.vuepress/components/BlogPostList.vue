<script>
export default {
    name: 'BlogPostList',
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        filteredList() {
            const props = this.$options.propsData;
            if (props) {
                if (props.list && props.list.length > 0) {
                    return props.list.filter(item => {
                        const isBlogPost = item.path.includes('/blog/');
                        const isReadyToPublish = new Date(item.frontmatter.date) <= new Date();

                        const shouldPublish = isBlogPost && isReadyToPublish;
                        if (shouldPublish) {
                            return item;
                        }
                    })
                }
            }
        }
    }
}
</script>

<template>
    <div>
        {{ filteredList }}
    </div>
</template>