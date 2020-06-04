

<style>

</style>

<div class="mb-6 shadow ">
    <img src="work_hader.jpg" alt="work harder sign" class="antialiased bg-gray-600 object-cover h-48 w-full shadow rounded-md opacity-75">
</div>
<!--inspired from https://tailwindcomponents.com/component/profile-card-with-image-background-->
    <div class="flex justify-center mb-8">
        <h1 class="text-4xl text-blue-700 font-semibold tracking-widest">About Us</h1>
    </div>

    <div class="md:flex justify-center">
        <div class="m-2 rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased" style="
        background-image: url('https://images.unsplash.com/photo-1500856056008-859079534e9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80');
        background-repeat: no-repat;
        background-size: cover;
        background-blend-mode: ;
        ">
            <div class="w-1/3">
                <img class="rounded-lg shadow-lg antialiased" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png">  
            </div>
            <div class="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
                <div class="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
                <div class="text-2xl text-white leading-tight">Martin</div>
                <div class="text-normal text-gray-300 hover:text-gray-400 cursor-pointer"><span class="border-b border-dashed border-gray-500 pb-1">Death Star Supervisor</span></div>
                <div class="text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0">Last Seen: <b>3 days ago</b></div>
                </div>
            </div>
        </div>  
        <div class="m-2 rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased" style="
        background-image: url('https://images.unsplash.com/photo-1500856056008-859079534e9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80');
        background-repeat: no-repat;
        background-size: cover;
        background-blend-mode: ;
        ">
            <div class="w-1/3">
                <img class="rounded-lg shadow-lg antialiased" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png">  
            </div>
            <div class="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
                <div class="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
                <div class="text-2xl text-white leading-tight">Valentin</div>
                <div class="text-normal text-gray-300 hover:text-gray-400 cursor-pointer"><span class="border-b border-dashed border-gray-500 pb-1">Chaos Master</span></div>
                <div class="text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0">Last Seen: <b>2 days ago</b></div>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-16 mb-8 text-center text-2xl text-blue-800"> Do you have questions?</div>
    <!-- contact form from https://tailwindcomponents.com/component/contact-form-->
    <form id="contact-me" class="w-full mx-auto max-w-3xl bg-white shadow p-8 text-gray-700 ">


        <h2 class="w-full my-2 text-3xl font-bold leading-tight my-5 text-blue-800 tracking-widest">Contact form</h2>
        <!-- name field -->
        <div class="flex flex-wrap mb-6">
            <div class="relative w-full appearance-none label-floating">
                <input class="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                id="name" type="text" placeholder="Your name"required>
                <label for="name" class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">
                    Your name
                </label>
            </div>
        </div>
        <!-- email field -->
        <div class="flex flex-wrap mb-6">
            <div class="relative w-full appearance-none label-floating">
                <input class="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                id="name" type="text" placeholder="Your email"required>
                <label for="name" class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">
                    Your email
                </label>
            </div>
        </div>
        <!-- Message field -->
        <div class="flex flex-wrap mb-6">
            <div class="relative w-full appearance-none label-floating">
                <textarea class="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                    id="message" type="text" placeholder="Message..."></textarea>
                    <label for="message" class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">Message...
                </label>
            </div>
        </div>

        <div class="">
            <button class="w-full shadow bg-blue-700 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit">
                Send
            </button>

        </div>
    </form>

