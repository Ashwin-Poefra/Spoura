<script>
    import "../app.css";
</script>

<style>
  /* #Mega Menu Styles
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  .mega-menu {
    display: none;
    left: 0;
    position: absolute;
    text-align: left;
    width: 100%;
  }
  /* #hoverable Class Styles
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  .hoverable {
    position: static;
  }
  .hoverable > a:after {
    content: "\25BC";
    font-size: 10px;
    padding-left: 6px;
    position: relative;
    top: -1px;
  }
  .hoverable:hover .mega-menu {
    display: block;
  }
</style>


<div class="navbar bg-base-100 sticky shadow-xl top-0 z-50">
    <div class="navbar-start">
      <div class="dropdown">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-96">
            <li class="hoverable hover:bg-blue-800 hover:text-white">
              <a href="#" class="relative block py-6 px-4 lg:p-6 text-sm lg:text-base hover:bg-gradient-to-r from-blue-500 to-blue-900 hover:text-white rounded-lg">Mens</a>
              <div class="p-6 mega-menu mb-16 mt-16 sm:mb-0 shadow-xl bg-blue-800 z-20">
                <div class="container w-full flex flex-wrap justify-between mx-2">
                  <div class="w-full text-white mb-8">
                    <h2 class="font-bold text-2xl">Main Hero Message for the menu section</h2>
                    <p>Sub-hero message, not too long and not too short. Make it just right!</p>
                  </div>
                  <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    <div class="flex items-center">
                      <svg class="h-8 mb-3 mr-3 fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"/>
                      </svg>
                      <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 1</h3>
                    </div>
                    <p class="text-gray-100 text-sm">Quarterly sales are at an all-time low create spaces to explore the accountable talk and blind vampires.</p>
                    <div class="flex items-center py-3">
                      <svg class="h-6 pr-3 fill-current text-blue-300"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                      </svg>
                      <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                    </div>
                  </ul>
                  <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    <div class="flex items-center">
                      <svg class="h-8 mb-3 mr-3 fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"/>
                      </svg>
                      <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 2</h3>
                    </div>
                    <p class="text-gray-100 text-sm">Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling.</p>
                    <div class="flex items-center py-3">
                      <svg class="h-6 pr-3 fill-current text-blue-300"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                      </svg>
                      <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                    </div>
                  </ul>
                  <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                    <div class="flex items-center">
                      <svg class="h-8 mb-3 mr-3 fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/>
                      </svg>
                      <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 3</h3>
                    </div>
                    <p class="text-gray-100 text-sm">This proposal is a win-win situation which will cause a stellar paradigm shift, let's touch base off-line before we fire the new ux experience.</p>
                    <div class="flex items-center py-3">
                      <svg class="h-6 pr-3 fill-current text-blue-300"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                      </svg>
                      <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                    </div>
                  </ul>
                  <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                    <div class="flex items-center">
                      <svg class="h-8 mb-3 mr-3 fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/>
                      </svg>
                      <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 4</h3>
                    </div>
                    <p class="text-gray-100 text-sm">This is a no-brainer to wash your face, or we need to future-proof this high performance keywords granularity.</p>
                    <div class="flex items-center py-3">
                      <svg class="h-6 pr-3 fill-current text-blue-300"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                      </svg>
                      <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                    </div>
                  </ul>
                </div>
              </div>
            </li>
            <li class="hoverable hover:bg-blue-800 hover:text-white">
              <a href="#" class="relative block py-6 px-4 lg:p-6 text-sm lg:text-base hover:bg-blue-800 hover:text-white">Womens</a>
              <div class="p-6 mega-menu mb-16 mt-16 sm:mb-0 shadow-xl bg-blue-800 z-20">
                <div class="container mx-auto w-full flex flex-wrap justify-between mx-2">
                  <div class="w-full text-white mb-8">
                    <h2 class="font-bold text-2xl">Main Hero Message for the menu section</h2>
                    <p>Sub-hero message, not too long and not too short. Make it just right!</p>
                  </div>
                  <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    <div class="flex items-center">
                      <svg class="h-8 mb-3 mr-3 fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"/>
                      </svg>
                      <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 1</h3>
                    </div>
                    <p class="text-gray-100 text-sm">Quarterly sales are at an all-time low create spaces to explore the accountable talk and blind vampires.</p>
                    <div class="flex items-center py-3">
                      <svg class="h-6 pr-3 fill-current text-blue-300"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                      </svg>
                      <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                    </div>
                  </ul>
                  <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    <div class="flex items-center">
                      <svg class="h-8 mb-3 mr-3 fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"/>
                      </svg>
                      <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 2</h3>
                    </div>
                    <p class="text-gray-100 text-sm">Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling.</p>
                    <div class="flex items-center py-3">
                      <svg class="h-6 pr-3 fill-current text-blue-300"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                      </svg>
                      <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                    </div>
                  </ul>
                  <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                    <div class="flex items-center">
                      <svg class="h-8 mb-3 mr-3 fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/>
                      </svg>
                      <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 3</h3>
                    </div>
                    <p class="text-gray-100 text-sm">This proposal is a win-win situation which will cause a stellar paradigm shift, let's touch base off-line before we fire the new ux experience.</p>
                    <div class="flex items-center py-3">
                      <svg class="h-6 pr-3 fill-current text-blue-300"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                      </svg>
                      <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                    </div>
                  </ul>
                  <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                    <div class="flex items-center">
                      <svg class="h-8 mb-3 mr-3 fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/>
                      </svg>
                      <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 4</h3>
                    </div>
                    <p class="text-gray-100 text-sm">This is a no-brainer to wash your face, or we need to future-proof this high performance keywords granularity.</p>
                    <div class="flex items-center py-3">
                      <svg class="h-6 pr-3 fill-current text-blue-300"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                      </svg>
                      <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                    </div>
                  </ul>
                </div>
              </div>
            </li>
            <li class="hoverable hover:bg-blue-800 hover:text-white">
              <a href="#" class="relative block py-6 px-4 lg:p-6 text-sm lg:text-base hover:bg-blue-800 hover:text-white">Kids</a>
              <div class="p-6 mega-menu mb-16 mt-16 sm:mb-0 shadow-xl bg-blue-800 z-20">
                <div class="container mx-auto w-full flex flex-wrap justify-between mx-2">
                  <div class="w-full text-white mb-8">
                    <h2 class="font-bold text-2xl">Main Hero Message for the menu section</h2>
                    <p>Sub-hero message, not too long and not too short. Make it just right!</p>
                  </div>
                  <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    <div class="flex items-center">
                      <svg class="h-8 mb-3 mr-3 fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"/>
                      </svg>
                      <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 1</h3>
                    </div>
                    <p class="text-gray-100 text-sm">Quarterly sales are at an all-time low create spaces to explore the accountable talk and blind vampires.</p>
                    <div class="flex items-center py-3">
                      <svg class="h-6 pr-3 fill-current text-blue-300"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                      </svg>
                      <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                    </div>
                  </ul>
                  <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    <div class="flex items-center">
                      <svg class="h-8 mb-3 mr-3 fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"/>
                      </svg>
                      <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 2</h3>
                    </div>
                    <p class="text-gray-100 text-sm">Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling.</p>
                    <div class="flex items-center py-3">
                      <svg class="h-6 pr-3 fill-current text-blue-300"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                      </svg>
                      <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                    </div>
                  </ul>
                  <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                    <div class="flex items-center">
                      <svg class="h-8 mb-3 mr-3 fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/>
                      </svg>
                      <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 3</h3>
                    </div>
                    <p class="text-gray-100 text-sm">This proposal is a win-win situation which will cause a stellar paradigm shift, let's touch base off-line before we fire the new ux experience.</p>
                    <div class="flex items-center py-3">
                      <svg class="h-6 pr-3 fill-current text-blue-300"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                      </svg>
                      <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                    </div>
                  </ul>
                  <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                    <div class="flex items-center">
                      <svg class="h-8 mb-3 mr-3 fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/>
                      </svg>
                      <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 4</h3>
                    </div>
                    <p class="text-gray-100 text-sm">This is a no-brainer to wash your face, or we need to future-proof this high performance keywords granularity.</p>
                    <div class="flex items-center py-3">
                      <svg class="h-6 pr-3 fill-current text-blue-300"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                      </svg>
                      <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                    </div>
                  </ul>
                </div>
              </div>
            </li>
            <li tabindex="0">
              <a class="justify-between py-6 px-4 lg:p-6 text-sm lg:text-base" href="/about">
              About
              </a>
            </li>
            <li tabindex="0">
              <a class="justify-between py-6 px-4 lg:p-6 text-sm lg:text-base" href="/about">
              Contact
              </a>
            </li>
        </ul>
      </div>
      <a class="btn btn-ghost font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900" href="/">Spoura</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul class="menu menu-horizontal px-1" tabindex="0" >
        <li class="hoverable hover:bg-gradient-to-r from-blue-500 to-blue-900 hover:text-white">
          <a href="/mens" class="relative block py-6 px-4 lg:p-6 text-sm lg:text-base hover:bg-gradient-to-r from-blue-500 to-blue-900 hover:text-white">Mens</a>
          <div class="p-6 mega-menu mb-16 mt-16 sm:mb-0 shadow-xl bg-gradient-to-r from-blue-500 to-blue-900">
            <div class="container w-full flex flex-wrap justify-between mx-2">
              <div class="w-full text-white mb-8">
                <h2 class="font-bold text-2xl">Mens</h2>
                <p>Select which area suits your style best...</p>
              </div>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                <div class="flex items-center">
                  <svg class="h-8 mb-3 mr-3 fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"/>
                  </svg>
                  <h3 class="font-bold text-xl text-white text-bold mb-2">Shop</h3>
                </div>
                <p class="text-gray-100 text-sm">Quarterly sales are at an all-time low create spaces to explore the accountable talk and blind vampires.</p>
                <div class="flex items-center py-3">
                  <svg class="h-6 pr-3 fill-current text-blue-300"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                  </svg>
                  <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                </div>
              </ul>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                <div class="flex items-center">
                  <svg class="h-8 mb-3 mr-3 fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"/>
                  </svg>
                  <h3 class="font-bold text-xl text-white text-bold mb-2">Collections</h3>
                </div>
                <p class="text-gray-100 text-sm">Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling.</p>
                <div class="flex items-center py-3">
                  <svg class="h-6 pr-3 fill-current text-blue-300"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                  </svg>
                  <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                </div>
              </ul>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                <div class="flex items-center">
                  <svg class="h-8 mb-3 mr-3 fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/>
                  </svg>
                  <h3 class="font-bold text-xl text-white text-bold mb-2">Brands</h3>
                </div>
                <p class="text-gray-100 text-sm">This proposal is a win-win situation which will cause a stellar paradigm shift, let's touch base off-line before we fire the new ux experience.</p>
                <div class="flex items-center py-3">
                  <svg class="h-6 pr-3 fill-current text-blue-300"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                  </svg>
                  <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                </div>
              </ul>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                <div class="flex items-center">
                  <svg class="h-8 mb-3 mr-3 fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/>
                  </svg>
                  <h3 class="font-bold text-xl text-white text-bold mb-2">Trending</h3>
                </div>
                <p class="text-gray-100 text-sm">This is a no-brainer to wash your face, or we need to future-proof this high performance keywords granularity.</p>
                <div class="flex items-center py-3">
                  <svg class="h-6 pr-3 fill-current text-blue-300"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                  </svg>
                  <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                </div>
              </ul>
            </div>
          </div>
        </li>
        <li class="hoverable hover:bg-blue-800 hover:text-white">
          <a href="#" class="relative block py-6 px-4 lg:p-6 text-sm lg:text-base hover:bg-blue-800 hover:text-white">Womens</a>
          <div class="p-6 mega-menu mb-16 mt-16 sm:mb-0 shadow-xl bg-blue-800">
            <div class="container mx-auto w-full flex flex-wrap justify-between mx-2">
              <div class="w-full text-white mb-8">
                <h2 class="font-bold text-2xl">Main Hero Message for the menu section</h2>
                <p>Sub-hero message, not too long and not too short. Make it just right!</p>
              </div>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                <div class="flex items-center">
                  <svg class="h-8 mb-3 mr-3 fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"/>
                  </svg>
                  <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 1</h3>
                </div>
                <p class="text-gray-100 text-sm">Quarterly sales are at an all-time low create spaces to explore the accountable talk and blind vampires.</p>
                <div class="flex items-center py-3">
                  <svg class="h-6 pr-3 fill-current text-blue-300"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                  </svg>
                  <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                </div>
              </ul>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                <div class="flex items-center">
                  <svg class="h-8 mb-3 mr-3 fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"/>
                  </svg>
                  <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 2</h3>
                </div>
                <p class="text-gray-100 text-sm">Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling.</p>
                <div class="flex items-center py-3">
                  <svg class="h-6 pr-3 fill-current text-blue-300"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                  </svg>
                  <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                </div>
              </ul>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                <div class="flex items-center">
                  <svg class="h-8 mb-3 mr-3 fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/>
                  </svg>
                  <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 3</h3>
                </div>
                <p class="text-gray-100 text-sm">This proposal is a win-win situation which will cause a stellar paradigm shift, let's touch base off-line before we fire the new ux experience.</p>
                <div class="flex items-center py-3">
                  <svg class="h-6 pr-3 fill-current text-blue-300"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                  </svg>
                  <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                </div>
              </ul>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                <div class="flex items-center">
                  <svg class="h-8 mb-3 mr-3 fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/>
                  </svg>
                  <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 4</h3>
                </div>
                <p class="text-gray-100 text-sm">This is a no-brainer to wash your face, or we need to future-proof this high performance keywords granularity.</p>
                <div class="flex items-center py-3">
                  <svg class="h-6 pr-3 fill-current text-blue-300"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                  </svg>
                  <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                </div>
              </ul>
            </div>
          </div>
        </li>
        <li class="hoverable hover:bg-blue-800 hover:text-white">
          <a href="#" class="relative block py-6 px-4 lg:p-6 text-sm lg:text-base hover:bg-blue-800 hover:text-white">Kids</a>
          <div class="p-6 mega-menu mb-16 mt-16 sm:mb-0 shadow-xl bg-blue-800">
            <div class="container mx-auto w-full flex flex-wrap justify-between mx-2">
              <div class="w-full text-white mb-8">
                <h2 class="font-bold text-2xl">Main Hero Message for the menu section</h2>
                <p>Sub-hero message, not too long and not too short. Make it just right!</p>
              </div>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                <div class="flex items-center">
                  <svg class="h-8 mb-3 mr-3 fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"/>
                  </svg>
                  <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 1</h3>
                </div>
                <p class="text-gray-100 text-sm">Quarterly sales are at an all-time low create spaces to explore the accountable talk and blind vampires.</p>
                <div class="flex items-center py-3">
                  <svg class="h-6 pr-3 fill-current text-blue-300"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                  </svg>
                  <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                </div>
              </ul>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                <div class="flex items-center">
                  <svg class="h-8 mb-3 mr-3 fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"/>
                  </svg>
                  <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 2</h3>
                </div>
                <p class="text-gray-100 text-sm">Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling.</p>
                <div class="flex items-center py-3">
                  <svg class="h-6 pr-3 fill-current text-blue-300"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                  </svg>
                  <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                </div>
              </ul>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                <div class="flex items-center">
                  <svg class="h-8 mb-3 mr-3 fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/>
                  </svg>
                  <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 3</h3>
                </div>
                <p class="text-gray-100 text-sm">This proposal is a win-win situation which will cause a stellar paradigm shift, let's touch base off-line before we fire the new ux experience.</p>
                <div class="flex items-center py-3">
                  <svg class="h-6 pr-3 fill-current text-blue-300"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                  </svg>
                  <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                </div>
              </ul>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                <div class="flex items-center">
                  <svg class="h-8 mb-3 mr-3 fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/>
                  </svg>
                  <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 4</h3>
                </div>
                <p class="text-gray-100 text-sm">This is a no-brainer to wash your face, or we need to future-proof this high performance keywords granularity.</p>
                <div class="flex items-center py-3">
                  <svg class="h-6 pr-3 fill-current text-blue-300"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                  </svg>
                  <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                </div>
              </ul>
            </div>
          </div>
        </li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
    <div class="navbar-end">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div class="dropdown dropdown-end">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label tabindex="0" class="btn btn-ghost btn-circle mr-4">
              <div class="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="filter: invert(56%) sepia(42%) saturate(7031%) hue-rotate(202deg) brightness(97%) contrast(99%);"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span class="badge badge-sm bg-blue-900 indicator-item rounded-lg">8</span>
              </div>
            </label>
            <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div class="card-body">
                <span class="font-bold text-lg">8 Items</span>
                <span class="text-info">Subtotal: $999</span>
                <div class="card-actions">
                    <a href="/cart"><button class="btn btn-block bg-gradient-to-r from-blue-500 to-blue-900 border-0">View cart</button></a>
                </div>
              </div>
            </div>
          </div>
    </div>
</div>

<slot />

<footer class="footer p-10 bg-neutral text-neutral-content bg-gradient-to-r from-blue-500 to-blue-900 ">
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 ">
    <div class="col-span-1 m-auto p-2">
      <a class="btn btn-ghost font-extrabold text-transparent text-4xl bg-clip-text bg-white" href="/">Spoura</a>
    </div>
    <div class="col-span-2 m-auto p-2">
      <span class="footer-title">Brands</span>
      <br /> 
      <a class="link link-hover p-4">Nike</a>
      <a class="link link-hover p-4">Adidas</a>
      <a class="link link-hover p-4">Puma</a>
    </div> 
    <div class="col-span-2 m-auto p-2">
      <span class="footer-title">Navigation</span>
      <br />
      <a class="link link-hover p-4">All Products</a>
      <a class="link link-hover p-4">About</a>
      <a class="link link-hover p-4">Contact</a>
    </div> 
    <div class="col-span-2 m-auto p-2">
      <span class="footer-title">Matthew Harvey</span> 
      <br />
      <a class="link link-hover p-4">Github</a>
      <a class="link link-hover p-4">Portfolio</a>
      <a class="link link-hover p-4">Linkedin</a>
    </div>
  </div> 
</footer>