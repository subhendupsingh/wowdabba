<script>
    import { fade, fly } from 'svelte/transition';
    import Collage from '$lib/Collage.svelte';
    import { onMount } from 'svelte';
    let occasions = ['Birthday', 'Anniversary', 'Festivals','Weddings','Corporates'];
    let counter = 0;
    $: occasion = occasions[counter];
    

    onMount(()=>{
        let wordChangeInterval = setInterval(() =>{
            counter = counter==occasions.length-1?0:counter + 1;
        },2000);

        return () => clearInterval(wordChangeInterval);
    });
</script>
<div class="h-1 w-full bg-brand"></div>
<header class="flex items-center w-full justify-center sm:justify-between shadow">
    <div class="flex items-center">
        <img src="/wow-dabba-logo.svg" alt="wowdabba logo" class="h-14" />
        <h1 class="text-brand font-poppins text-xl mt-1">
            <span class="font-extrabold">WOW</span><span class="font-medium">DABBA</span>
        </h1>
    </div>

    <div class="hidden sm:flex">
        <div class="flex items-center text-text mx-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon h-5" fill="currentColor" viewBox="0 0 512 512"><title>Logo Whatsapp</title><path d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z" fill-rule="evenodd"/></svg>
            <a href="https://wa.me/916375726340?text=Hey, I want a personalized gift, can you help me?" target="_blank" class="ml-2">6375726340</a>
        </div>

        <div class="flex items-center text-text mx-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon h-5" fill="currentColor" viewBox="0 0 512 512"><title>Mail</title><rect x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 160l144 112 144-112"/></svg>
            <span class="ml-2">wowdabba@gmail.com</span>
        </div> 
    </div>
</header>

<main class="m-4">
    <div class="grid grid-cols-1 lg:grid-cols-2" id="hero-container">
        <div class="col-start-1 row-start-1 flex flex-col justify-center p-5">
            <div class="font-extrabold font-poppins text-3xl md:text-6xl">
                We curate gifts for
                {#key counter}
                     <span in:fade={{ duration: 200, delay:100 }} class="text-teal text-4xl md:text-7xl">{occasion}</span>.    
                {/key}
            </div>

            <div class="mt-5 font-poppins font-medium text-text md:text-3xl lg:text-xl">
                We take the pain of endless searching for that special gift away from you and deliver wow.
            </div>

            <div class="lg:flex lg:justify-center mt-5">
                <a href="https://www.instagram.com/wowdabba/" class=" hover:-translate-y-1 hover:duration-500  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 px-5 rounded-md text-white flex items-center justify-center text-lg lg:text-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon h-5 text-white mr-2" fill="currentColor" viewBox="0 0 512 512"><title>Logo Instagram</title><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"/><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"/></svg>
                    Check on Instagram
                </a>
            </div>
        </div>

        <div class="col-start-1 lg:col-start-2 row-start-2 lg:row-start-1 flex justify-center py-5">
            <img src="https://res.cloudinary.com/curead/image/upload/f_auto,q_auto/v1641571385/WoWDabba/IMG_6250_jtohju.jpg" alt="Wowdabba party hamper" class="lg:h-96 w-full object-cover rounded-md shadow-brand shadow-lg" />
        </div>
    </div>

    <section class="lg:flex lg:flex-col lg:items-center lg:justify-center mt-10">
        <h1 class="text-5xl text-center lg:text-5xl font-poppins">Special gifts, for special people<span class="text-3xl lg:text-6xl text-teal">.</span></h1>
        <div class="lg:flex lg:justify-center mt-10">
            <Collage />
        </div>
    </section>
</main>

<footer class="flex bg-grayb p-4 justify-between font-poppins text-text text-xs">
    <div class="text-text flex flex-col">
        &copy; Copyright 2022
        <div class="items-center flex sm:hidden mt-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon text-red-600 h-4" fill="currentColor" viewBox="0 0 512 512"><title>Heart</title><path d="M256 448a32 32 0 01-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 009.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 01-18 5.56z"/></svg>
            <span class="font-extrabold ml-1">WOW</span>DABBA
        </div>
    </div>

    <div class="items-center hidden sm:flex">
        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon text-red-600 h-4" fill="currentColor" viewBox="0 0 512 512"><title>Heart</title><path d="M256 448a32 32 0 01-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 009.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 01-18 5.56z"/></svg>
        <span class="font-extrabold ml-1">WOW</span>DABBA
    </div>

    <div class="sm:flex">
        <div class="flex items-center text-text mx-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon h-5" fill="currentColor" viewBox="0 0 512 512"><title>Logo Whatsapp</title><path d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z" fill-rule="evenodd"/></svg>
            <a href="https://wa.me/916375726340?text=Hey, I want to curate a gift, can you help me?" target="_blank" class="ml-2">6375726340</a>
        </div>
        
        <div class="flex items-center text-text mx-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon h-5" fill="currentColor" viewBox="0 0 512 512"><title>Mail</title><rect x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 160l144 112 144-112"/></svg>
            <span class="ml-2">wowdabba@gmail.com</span>
        </div> 
    </div>
</footer>
