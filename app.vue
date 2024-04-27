import InertiaScroll from './components/InertiaScroll.vue'; import Informations
from './components/Informations.vue';
<template>
    <main id="main">
        <div class="container">
            <Header />
            <Informations />
        </div>
        <PhotoTransition />
        <div class="container">
            <Stack />
        </div>
    </main>
</template>
<style lang="scss">
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
}

.container {
    width: 100%;
}
@media (min-width: 320px) {
}
@media (min-width: 480px) {
    /* smartphones, Android phones, landscape iPhone */
}
@media (min-width: 600px) {
    /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
}
@media (min-width: 801px) {
    /* tablet, landscape iPad, lo-res laptops ands desktops */
}
@media (min-width: 1025px) {
    main {
        margin: 6rem 0;
    }
    .container {
        max-width: 1300px;
    }
    /* big landscape tablets, laptops, and desktops */
}
@media (min-width: 1281px) {
    .container {
        max-width: 1600px;
    }
}
</style>
