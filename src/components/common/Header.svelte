<header class="py-4 shadow-sm bg-white">
    <div class="container mx-auto flex items-center justify-between">
        <a href="/">
            <img src={"/assets/images/logo.svg"} class="w-32" alt="">
        </a>

        <div class="w-full max-w-xl relative flex">
                <span class="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400">
                    <i class="far fa-search"></i>
                </span>
            <input type="text" name="search" id="search"
                   alt=""
                   class="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
                   placeholder="Search...">
            <button
                    class="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex items-center">
                Search
            </button>
        </div>

        <div class="flex items-center space-x-4">
            <a href="/" class="text-center text-gray-700 hover:text-primary transition relative">
                <div class="text-2xl">
                    <i class="far fa-heart"></i>
                </div>
                <div class="text-xs leading-3">Wishlist</div>
                <div
                        class="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                    8
                </div>
            </a>
            <a href="#" class="text-center text-gray-700 hover:text-primary transition relative">
                <div class="text-2xl">
                    <i class="far fa-shopping-cart"></i>
                </div>
                <div class="text-xs leading-3">Cart</div>
                <div
                        class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                    2
                </div>
            </a>
            <a href="#" class="text-center text-gray-700 hover:text-primary transition relative">
                <div class="text-2xl">
                    <i class="far fa-user"></i>
                </div>
                <div class="text-xs leading-3">Account</div>
            </a>
        </div>
    </div>
</header>