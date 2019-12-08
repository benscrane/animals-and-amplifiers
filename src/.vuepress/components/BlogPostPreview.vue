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
        },
        author: {
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
        <p>{{ this.$options.propsData.publishDate }}</p>
        <h2>
            <a :href="path">{{ title }}</a>
        </h2>
        <p id="author" v-if="author">{{ author }}</p>
        <p v-if="excerpt">{{ excerpt }}</p>
        <a class="button" :href="path">Read More ></a>
    </section>
</template>

<style lang="stylus" scoped>
section {
    margin-bottom: 2.5rem;
}
section p {
    margin-top: 0;
    font-size: 1.2rem;
}
time {
    font-weight: 500;
}
h2 {
    margin-top: 0.5rem;
    margin-bottom: 0.75rem;
}
h2 a {
    font-weight: 700;
}
h2 a:hover {
    text-decoration: underline;
}
.button {
    font-weight: 600;
    border: 1px solid $greenColor;
    color: $greenColor;
    border-radius: 4px;
    font-size: 0.9rem;
    padding: 0.3rem 0.6rem;
    text-transform: uppercase;
    box-shadow: 0 0;
    text-decoration: none;
    transition: background-color 0.2s ease-in, color 0.2s ease-in;
}
.button:hover {
    background-color: $greenColor;
    color: #fff;
    text-decoration: none !important;
}
#author {
    font-style: italic; 
}
</style>