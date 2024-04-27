// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    site: {
        // production URL
        url: 'https://hugocapezzone.me',
    },
    app: {
        baseURL: '/Zack-Strife.github.io/',
        buildAssetsDir: 'assets',
        head: {
            title: 'Hugo Capezzone | Front End Developer',
            meta: [
                {
                    name: 'description',
                    content: "Hugo Capezzone's portfolio",
                },
            ],
        },
    },
    css: ['~/assets/css/main.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "./assets/css/_colors.scss";',
                },
            },
        },
    },
    modules: ['@nuxtjs/seo'],
})
