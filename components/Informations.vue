<template>
    <nav>
        <a href="https://www.linkedin.com/in/hugocapezzone"
            >Front End Developer</a
        >
        <span class="separator"> ー </span>
        <a href="https://www.instagram.com/yuuzora_photography"
            >Amateur Photographer</a
        >
    </nav>
    <Details>
        <template #image>
            <img
                src="https://yuuzora.github.io/nuxt_github_page/img/gundam.webp"
                alt="gundam"
            />
        </template>
        <template #title>
            Based near Paris. Working as a software engineer since 2017
        </template>
        <template #text>
            As a fullstack for more than 6 years, most of the fullstack
            engineers I met are back-end that can do a bit of HTML - CSS - JS.
            <br />
            This ends up creating a lot of frustration for designers and
            customers. <br />
            So, since the end of 2023, I went on an adventure, left my lead
            fullstack job and decided to go entirely front-end.
        </template>
    </Details>
    <Details inversed>
        <template #image>
            <img
                src="https://yuuzora.github.io/nuxt_github_page/img/kyoto.webp"
                alt="kiyomizu-dera"
            />
        </template>
        <template #text>
            I enjoy taking portrait and travel photography. <br />
            As a big fan of Japanese culture, I ended up taking dozens of
            thousands of photos over there. <br />
            I like to think that it fits well with the fact that I'm doing
            Front-end now. <br />
        </template>
    </Details>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
nav {
    font-family: 'Beon';
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    background-color: var(--palette-teal-950);
    padding: 1rem 2rem;
    border-radius: 999px;
    max-width: fit-content;
    margin: auto;
    color: var(--palette-teal-500);
    flex-wrap: wrap;
    .separator {
        display: none;
    }
    a {
        font-size: 1rem;
        text-decoration: none;
        margin: 0;
        color: var(--palette-teal-500);
        transition: color 0.5s;
        &:hover {
            color: var(--palette-teal-50);
        }
    }
}

@media (min-width: 480px) {
    nav {
        .separator {
            display: block;
        }
    }
}
</style>
