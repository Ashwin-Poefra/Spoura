<script>
    import "../app.css";
</script>

<div class="navbar bg-base-100 sticky shadow-xl top-0 z-50">
    <div class="navbar-start">
      <div class="dropdown">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li tabindex="0">
                <a class="justify-between" href="/men">
                Mens
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                </a>
                <ul class="p-2 bg-white">
                  <li><a href="/men/products?filter=all">All</a></li>
                  <li><a href="/men/products?filter=all">Nike</a></li>
                  <li><a href="/men/products?filter=all">Adidas</a></li>
                  <li><a href="/men/products?filter=all">Puma</a></li>
                </ul>
            </li>
            <li tabindex="0">
                <a class="justify-between" href="/women">
                Womens
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                </a>
                <ul class="p-2 bg-white">
                    <li><a href="/women/products?filter=all">All</a></li>
                    <li><a href="/men/products?filter=all">Nike</a></li>
                    <li><a href="/men/products?filter=all">Adidas</a></li>
                    <li><a href="/men/products?filter=all">Puma</a></li>
                </ul>
            </li>
            <li tabindex="0">
                <a class="justify-between" href="/kids">
                Kids
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                </a>
                <ul class="p-2 bg-white">
                    <li><a href="/kids/products?filter=all">All</a></li>
                    <li><a href="/men/products?filter=all">Nike</a></li>
                    <li><a href="/men/products?filter=all">Adidas</a></li>
                    <li><a href="/men/products?filter=all">Puma</a></li>
                </ul>
            </li>
        </ul>
      </div>
      <a class="btn btn-ghost font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900" href="/">Spoura</a>
    </div>
    <div class="navbar-center hidden lg:flex">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul class="menu menu-horizontal px-1" tabindex="0" >
        <li tabindex="0">
            <a class="justify-between" href="/men">
              Mens
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </a>
            <ul class="p-2 bg-white">
              <li><a href="/men/products?filter=all">All</a></li>
              <li><a href="/men/products?filter=all">Nike</a></li>
              <li><a href="/men/products?filter=all">Adidas</a></li>
              <li><a href="/men/products?filter=all">Puma</a></li>
            </ul>
        </li>
        <li>
            <a class="justify-between" href="/women">
            Womens
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </a>
            <ul class="p-2 bg-white">
                <li><a href="/women/products?filter=all">All</a></li>
                <li><a href="/men/products?filter=all">Nike</a></li>
                <li><a href="/men/products?filter=all">Adidas</a></li>
                <li><a href="/men/products?filter=all">Puma</a></li>
            </ul>
        </li>
        <li tabindex="0">
            <a class="justify-between" href="/kids">
            Kids
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </a>
            <ul class="p-2 bg-white">
                <li><a href="/kids/products?filter=all">All</a></li>
                <li><a href="/men/products?filter=all">Nike</a></li>
                <li><a href="/men/products?filter=all">Adidas</a></li>
                <li><a href="/men/products?filter=all">Puma</a></li>
            </ul>
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