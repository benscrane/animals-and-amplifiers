module.exports = {
    title: 'Built by Ben',
    description: 'A portfolio site for Ben Crane',
    dest: 'public/',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/'},
            { text: 'Blog', link: '/blog/'},
            { text: 'Projects', link: '/projects/'},
            { text: 'About', link: '/about/'},
            { text: 'Contact', link: '/contact/'}
        ]
    },
    markdown: {
        lineNumbers: true
    }
}