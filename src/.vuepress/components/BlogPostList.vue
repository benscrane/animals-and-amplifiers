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
                    }).sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
                }
            }
        }
    }
}
</script>

<template>
    <div>
        <h1>Blog Posts</h1>
        <h2>Most Recent</h2>
        <ul class="blog-list">
            <li v-for="(item, index) in filteredList"
                class="blog-list-item">
                <BlogPostPreview
                    :excerpt="item.frontmatter.excerpt"
                    :path="item.path"
                    :title="item.frontmatter.title"
                    :publishDate="item.frontmatter.date"
                    :author="item.frontmatter.author" />
            </li>
        </ul>
    </div>
</template>

<style scoped>
.blog-list {
    padding: 0;
    margin: 0;
}
.blog-list-item {
    list-style-type: none;
}
</style>