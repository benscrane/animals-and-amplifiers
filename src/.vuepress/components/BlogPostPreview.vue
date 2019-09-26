<script>
export default {
    name: 'BlogPostPreview',
    props: {
        publishDate: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        path: {
            type: String,
            required: true
        },
        excerpt: {
            type: String,
            required: false
        }
    },
    computed: {
        formatPublishDate() {
            const dateFormat = new Date(this.$options.propsData.publishDate);
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            return dateFormat.toLocaleDateString('en-US', options);
        }
    }
}
</script>

<template>
    <section>
        <time>{{ formatPublishDate }}</time>
        <h2>
            <a :href="path">{{ title }}</a>
        </h2>
        <p v-if="excerpt" {{ excerpt }}</p>
        <a :href="path">Read More</a>
    </section>
</template>