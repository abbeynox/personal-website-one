<template>
    <div>
            <LinksHeader />

            <div class="container px-5 py-24 mx-auto">

                <div class="flex flex-wrap -m-1">

                    <div class="p-2 w-full">
                        <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84">
                        <div class="flex-grow">
                            <h2 class="text-white title-font font-medium">Link 1</h2>
                            <p class="text-gray-600">url</p>
                        </div>
                        </div>
                    </div>


                    <div class="p-2 w-full">
                        <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94">
                        <div class="flex-grow">
                            <h2 class="text-white title-font font-medium">Link 2</h2>
                            <p class="text-gray-600">url</p>
                        </div>
                        </div>
                    </div>



                    <div class="p-2 w-full">
                        <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94">
                        <div class="flex-grow">
                            <h2 class="text-white title-font font-medium">Link 3</h2>
                            <p class="text-gray-600">url</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
</template>

<script type="text/javascript">

    import LinksHeader from '../components/links/LinksHeader';

    export default {
        name: 'LinksPage',
        title: 'Links',
        components: {
            LinksHeader
            }
        }
</script>