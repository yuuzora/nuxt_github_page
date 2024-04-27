<template>
    <div class="stack">
        <div class="stack__title">
            <h2>Technical stack</h2>
            <span class="line" />
        </div>

        <div class="stack__container">
            <div class="list">
                <span class="list__name">Languages</span>
                <ul class="stack__list">
                    <li>PHP</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                </ul>
            </div>
            <div class="list">
                <span class="list__name">Frameworks</span>
                <ul class="stack__list">
                    <li>Symfony</li>
                    <li>Vue</li>
                    <li>Nuxt</li>
                </ul>
            </div>
            <div class="list">
                <span class="list__name">Infrastructure</span>
                <ul class="stack__list">
                    <li>Docker</li>
                    <li>RabbitMQ</li>
                </ul>
            </div>
            <div class="list">
                <span class="list__name">Other tools</span>
                <ul class="stack__list">
                    <li>Pinia</li>
                    <li>TypeScript</li>
                    <li>Cypress</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.stack {
    padding: 2rem;
}
.stack__title {
    font-family: 'Beon';
    h2 {
        margin: 0;
        font-size: 3rem;
    }

    .line {
        background: linear-gradient(130deg, var(--palette-teal-300), #fff);
        width: 75%;
        height: 1px;
        display: block;
        margin-bottom: 2rem;
    }
}

.stack__container {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
}

.list__name {
    font-size: 1.5rem;
}
.stack__list {
    padding-left: 2rem;
    list-style: none;
    border-left: 4px solid var(--palette-teal-800);
    li {
        padding: 0.125rem 0;
    }
}
</style>
