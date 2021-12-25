<template>
  <main class="main">
    <div
      class="flex flex-col w-full h-full items-center justify-center lg:flex-row z-10"
    >
      <div
        class="flex flex-col pb-4 lg:pb-0 items-center justify-center w-full lg:w-4/12"
      >
        <ProfileImage />
      </div>
      <div
        class="flex flex-col items-center justify-center lg:pt-0 w-full lg:w-8/12 xl:w-7/12"
      >
        <a
          href="https://gonzalohirsch.com"
          rel="noopener noreferer"
          aria-label="Got to my personal website"
          ><h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl mb-4 hover:underline decoration-indigo-600 underline-offset-2">
            <strong>Gonzalo Hirsch</strong>
          </h1></a
        >
        <h2 class="text-lg md:text-xl xl:text-2xl">
          Full Stack Developer & Freelancer
        </h2>

        <!-- ICONS FROM https://simpleicons.org/?q=instagram -->
        <div class="flex flex-col md:flex-row md:flex-wrap mt-4 md:mt-8">
          <div
            class="w-full flex flex-col md:flex-row items-center justify-center"
          >
            <a
              href="https://gonzalohirsch.com"
              target="_blank"
              rel="noopener noreferer"
              aria-label="Go to my personal website"
              class="icon--highlight group"
            >
              <svg
                role="img"
                class="icon--highlight-svg group-hover:text-white mr-4"
                viewBox="0 0 24 24"
                style="fill: currentColor"
                xmlns="http://www.w3.org/2000/svg"
                alt="About me logo"
                aria-label="About me logo"
              >
                <title>About.me</title>
                <path
                  d="M19.536 9.146c-1.373 0-2.133 1.014-2.294 2.116h4.608c-.125-1.05-.867-2.115-2.314-2.115m-2.26 3.617c.235 1.156 1.193 1.97 2.532 1.97.725 0 1.77-.27 2.384-.914l1.175 1.35c-1.064 1.11-2.653 1.426-3.74 1.426-2.64 0-4.697-1.906-4.697-4.606 0-2.535 1.894-4.62 4.57-4.62 2.585 0 4.5 1.98 4.5 4.604v.766h-6.723v.023zm-6.487 3.83v-5.69c0-.976-.435-1.536-1.338-1.536-.814 0-1.355.585-1.717 1.007v6.24h-2.35v-5.7c0-.976-.415-1.532-1.318-1.532-.813 0-1.375.586-1.717 1.006v6.24H0V7.505h2.35v1.15c.4-.463 1.302-1.26 2.71-1.26 1.247 0 2.096.526 2.477 1.59.524-.761 1.5-1.59 2.91-1.59 1.7 0 2.69 1.01 2.69 2.963v6.24h-2.353l.005-.007z"
                />
              </svg>
              <span class="icon--highlight-text group-hover:text-white"
                >gonzalohirsch.com</span
              >
            </a>
            <a
              href="https://www.linkedin.com/in/gonzalo-hirsch/"
              target="_blank"
              rel="noopener noreferer"
              aria-label="Go to my LinkedIn page"
              class="icon--highlight group"
            >
              <svg
                role="img"
                class="icon--highlight-svg group-hover:text-white mr-4"
                style="fill: currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                alt="LinkedIn logo"
                aria-label="LinkedIn logo"
              >
                <title>LinkedIn</title>
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
              <span class="icon--highlight-text group-hover:text-white"
                >gonzalo-hirsch</span
              >
            </a>
          </div>
          <div
            class="w-full flex flex-col md:flex-row items-center justify-center"
          >
            <a
              href="https://github.com/GonzaloHirsch"
              target="_blank"
              rel="noopener noreferer"
              aria-label="Go to my Github account"
              class="icon--highlight group"
            >
              <svg
                role="img"
                class="icon--highlight-svg group-hover:text-white mr-4"
                style="fill: currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                alt="Github logo"
                aria-label="Github logo"
              >
                <title>GitHub</title>
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
              <span class="icon--highlight-text group-hover:text-white"
                >GonzaloHirsch</span
              >
            </a>
          </div>
        </div>

        <div class="flex flex-row mt-8">
          <a
            href="https://github.com/GonzaloHirschToptal"
            target="_blank"
            rel="noopener noreferer"
            aria-label="Go to my Github work account"
          >
            <svg
              role="img"
              class="icon--svg mr-4"
              style="fill: currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              alt="Github logo"
              aria-label="Github logo"
            >
              <title>GitHub</title>
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </a>
          <a
            href="https://www.toptal.com/resume/gonzalo-hirsch"
            target="_blank"
            rel="noopener noreferer"
            aria-label="Go to my Toptal profile page"
          >
            <svg
              role="img"
              class="icon--svg mr-4"
              style="fill: currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              alt="Toptal logo"
              aria-label="Toptal logo"
            >
              <title>Toptal</title>
              <path
                d="M20.227 10.038L10.188 0l-2.04 2.04 3.773 3.769-8.155 8.153L13.807 24l2.039-2.039-3.772-3.771 8.16-8.152h-.007zM8.301 14.269l6.066-6.063 1.223 1.223-6.064 6.113-1.223-1.26-.002-.013z"
              />
            </svg>
          </a>
          <a
            href="mailto:hirschgonzalo@gmail.com?subject=Hi Gonza, I saw your digital card!&body=My name is XXXX and I'm interested in YYYY."
            aria-label="Send me an email"
          >
            <svg
              role="img"
              class="icon--svg mr-4"
              style="fill: currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              alt="Gmail logo"
              aria-label="Gmail logo"
            >
              <title>Gmail</title>
              <path
                d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
              />
            </svg>
          </a>
        </div>

        <div class="flex flex-row text-white mt-8">
          <a href="https://calendly.com/gonzalohirsch/30min" target="_blank" rel="noopener noreferer" class="text-base sm:text-xl hover:underline decoration-indigo-600 underline-offset-2" aria-label="Schedule a 30 minute meeting">
            <h3>Schedule a Meeting</h3>
          </a>
        </div>
      </div>
    </div>
    <nuxt-img
      class="z-0 absolute top-0 left-0 page-bg"
      src="/bg.svg"
      alt="Background image"
      aria-label="Background image"
    />
  </main>
</template>

<script>
export default {
  name: "IndexPage",
  head() {
    return {
      link: [
        {
          rel: "canonical",
          href: "https://me.gonzalohirsch.com",
        },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  @apply bg-gray-900 flex flex-row items-center justify-center text-white relative bg-no-repeat bg-cover;
  height: 100vh;
  width: 100vw;
}
.page-bg {
  @apply opacity-30;
  height: 100vh;
  width: 100vw;
}
.icon--highlight {
  @apply flex flex-row items-center justify-center w-full my-2;
}
.icon--highlight-svg {
  @apply w-8 h-8 text-indigo-600 transition duration-300;
}
.icon--highlight-text {
  @apply text-lg;
}
.icon--svg {
  @apply w-8 h-8 text-indigo-600 transition duration-300;
}
.icon--svg:hover {
  @apply text-white;
}

@screen md {
  .icon--highlight {
    @apply w-6/12;
  }
  .icon--highlight-svg {
    @apply w-12 h-12;
  }
  .icon--svg {
    @apply w-12 h-12;
  }
  .icon--highlight-text {
    @apply text-2xl;
  }
}

@screen lg {
  .icon--highlight {
    @apply w-8/12;
  }
}

@screen xl {
  .icon--highlight {
    @apply w-6/12;
  }
}
</style>
