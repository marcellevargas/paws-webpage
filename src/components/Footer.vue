<template>
  <footer class="relative bg-gray-300 pt-8 pb-6">
    <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style="height: 80px;">
      <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
        version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <h5 class="text-lg mt-0 mb-2 text-gray-700">
            More about the developer
          </h5>
          <div class="mt-6">
            <a href="https://github.com/seu-usuario" target="_blank">
              <button
                class="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button">
                <i class="flex fab fa-github"></i>
              </button>
            </a>

          </div>
        </div>
      </div>
      
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterComponent',
}
</script>
