<script setup lang="ts">

const { data: categories } = await useWPAPI().getCategories()

useHead({
  title: "Categories",
  meta: [
    {
      name: "description",
      content: "Categories",
    },
  ],
})

</script>

<template>
    <section>
        <div class="container mx-auto">
            <div class="flex flex-wrap gap-5">
                
                <NuxtLink 
                    v-for="category in categories"
                    :key="category.id"
                    :to="`/categories/${category.slug}`"
                    class="flex items-center justify-center px-4 py-2 text-2xl text-white uppercase duration-200 rounded shadow-md hover:shadow-lg"
                    :style="{ backgroundColor: colorGenerator() }"
                    >
                    <span class="font-semibold">#{{ category.name }}</span>
                </NuxtLink>

            </div>
        </div>
    </section>
</template>

<style scoped>

</style>