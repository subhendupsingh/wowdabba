<script>
    let images = ['https://res.cloudinary.com/curead/image/upload/f_auto,q_auto/v1641578761/WoWDabba/PXL_20211209_080414077_ibb1bu.jpg','https://res.cloudinary.com/curead/image/upload/f_auto,q_auto/v1641578755/WoWDabba/PXL_20211207_073727060_gjt5hk.jpg','https://res.cloudinary.com/curead/image/upload/f_auto,q_auto/v1641578751/WoWDabba/IMG_6514_qupzf2.jpg','https://res.cloudinary.com/curead/image/upload/f_auto,q_auto/v1641578750/WoWDabba/IMG_6534_phfsw7.jpg','https://res.cloudinary.com/curead/image/upload/f_auto,q_auto/v1641578748/WoWDabba/received_620087042659816_zzkzj4.jpg','https://res.cloudinary.com/curead/image/upload/f_auto,q_auto/v1641578749/WoWDabba/received_444889494011733_c8qoen.jpg','https://res.cloudinary.com/curead/image/upload/f_auto,q_auto/v1641578747/WoWDabba/received_1337568660023573_yy2e2t.jpg','https://res.cloudinary.com/curead/image/upload/f_auto,q_auto/v1641578747/WoWDabba/IMG_20211130_093055_802_u53tsp.jpg'];
</script>


    <div class="grid grid-cols-1 lg:grid-cols-6">
        <div class="col-start-1 row-start-1 lg:row-span-2 col-span-1 lg:col-span-2">
            <img src={images[0]} alt="WoW Dabba Party Hamper" id="big-pic" class="w-full" />
        </div>

        <div class="col-start-1 lg:col-start-3 row-start-2 lg:row-start-1 col-span-1 lg:col-span-4 lg:flex lg:ml-2" id="row-pictures">
            {#each images as image,i}
                {#if i<(Math.ceil(images.length/2)) && i>0}
                    <img src={image} alt="WoW Dabba Party Hamper" id="row-pic" class="w-full lg:w-52 mt-4 lg:m-2 lg:h-52" />
                {/if}
            {/each}
        </div>

        <div class="col-start-1 lg:col-start-3 row-start-3 lg:row-start-2 col-span-1 lg:col-span-4 lg:flex lg:ml-2" id="row-pictures">
            {#each images as image,i}
                {#if i>(Math.ceil(images.length/2))}
                    <img src={image} alt="WoW Dabba Party Hamper" id="row-pic" class="w-full lg:w-52 mt-4  lg:m-2 lg:h-52"/>
                {/if}
            {/each}
        </div>
    </div>
    
<style>
        
        #big-pic{
            @apply mt-2;
            @apply rounded-lg;
            @apply h-[27rem];
            @apply w-full;
            @apply object-cover;
        }

        #row-pic{
            @apply rounded-lg;
            @apply object-cover;
        }
    

    img:hover:lg{
        @apply transform;
        @apply duration-300;
        @apply scale-105;
        @apply -rotate-1;
    }
</style>