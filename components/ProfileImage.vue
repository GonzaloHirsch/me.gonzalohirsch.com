<template>
  <div class="relative rounded-full overflow-hidden">
    <nuxt-img
      class="rounded-full border-4 shadow-md border-indigo-600 profile-image overflow-hidden z-1"
      src="/gh.jpg"
      alt="Gonzalo Hirsch"
      sizes="xs:175px sm:200px md:250px lg:300px xl:350px xxl:400px"
      width="400"
      height="400"
    />
    <div class="bg-purple-700 opacity-10 w-full h-full z-10 absolute top-0 right-0" />
  </div>
</template>

<style scoped>
img {
  display: inline-block;
  width: 100%;
  height: auto;
}
</style>