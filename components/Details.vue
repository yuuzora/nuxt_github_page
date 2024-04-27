<template>
    <div class="details">
        <div
            class="details__image"
            :class="{ 'details__image--inversed': inversed }"
        >
            <slot name="image" />
        </div>

        <div
            class="details__content"
            :class="{ 'details__content--inversed': inversed }"
        >
            <div class="details__title">
                <slot name="title" />
            </div>
            <p>
                <slot name="text" />
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps({
    inversed: { type: Boolean, default: false },
})
</script>
<style scoped lang="scss">
.details {
    padding: 2rem 0;
    gap: 1rem;
    display: grid;
    grid-template-columns: 1fr;

    .details__image {
        &--inversed {
            order: 1;
        }
        :deep(img) {
            width: 100%;
            border-radius: 0.75rem;
        }
    }

    .details__content {
        display: grid;
        justify-content: center;

        font-size: 1.3rem;
        line-height: 1.5;
        align-self: center;
        justify-self: flex-end;
        max-width: 100%;
        height: 100%;

        padding: 2rem;
        box-sizing: border-box;
        background-color: var(--palette-teal-950);
        border-radius: 0.75rem;
        .details__title {
            color: var(--palette-teal-500);
            justify-self: flex-start;
            align-self: flex-start;
        }

        &--inversed {
            order: 0;
            justify-self: flex-start;
        }
    }
}

@media (min-width: 480px) {
    .details {
        padding: 2rem;
    }
}

@media (min-width: 1025px) {
    .details {
        margin-top: 5rem;
    }

    .details {
        grid-template-columns: 1fr 1fr;

        .details__content {
            max-width: 80%;
        }
    }
}
</style>
