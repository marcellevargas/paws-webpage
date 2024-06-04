<template>
    <div>
        <navbar-component></navbar-component>
        <main>
            <div class="relative pt-16 pb-32 flex content-center items-center justify-center" style="min-height: 75vh;">
                <div class="absolute top-0 w-full h-full bg-center bg-cover"
                    style='background-image: url("https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");'>
                    <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black"></span>
                </div>
                <div class="container relative mx-auto">
                    <div class="items-center flex flex-wrap">
                        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            <div class="pr-12">
                                <h1 class="text-white font-semibold text-5xl">
                                    Care for Your Best Friend
                                </h1>
                                <p class="mt-4 text-lg text-gray-300">
                                    Explore our comprehensive care and wellness services for your pet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                    style="height: 70px;">
                    <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </div>

            <section class="pb-20 bg-gray-300 -mt-24">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap justify-center">
                        <div class="lg:pt-12 pt-12 w-full md:w-4/12 px-4 text-center">
                            <div
                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div class="px-4 py-5 flex-auto">
                                    <div
                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                        <i class="fas fa-paw"></i>
                                    </div>
                                    <h6 class="text-xl font-semibold">Grooming Services</h6>
                                    <p class="mt-2 mb-4 text-gray-600">
                                        Expert grooming provided by our skilled team with gentle care for your pets.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="pt-12 w-full md:w-4/12 px-4 text-center">
                            <div
                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div class="px-4 py-5 flex-auto">
                                    <div
                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                                        <i class="fas fa-clinic-medical"></i>
                                    </div>
                                    <h6 class="text-xl font-semibold">Veterinary Care</h6>
                                    <p class="mt-2 mb-4 text-gray-600">
                                        Comprehensive medical care to keep your pets healthy at all stages of their
                                        lives.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="pt-12 w-full md:w-4/12 px-4 text-center">
                            <div
                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div class="px-4 py-5 flex-auto">
                                    <div
                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                        <i class="fas fa-bone"></i>
                                    </div>
                                    <h6 class="text-xl font-semibold">Nutritional Supplies</h6>
                                    <p class="mt-2 mb-4 text-gray-600">
                                        Quality food products and accessories to ensure your pets are happy and healthy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center mt-32">
                        <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
                            <div
                                class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                                <i class="fas fa-heart text-xl"></i>
                            </div>
                            <h3 class="text-3xl mb-2 font-semibold leading-normal">
                                Loving Care for Every Pet
                            </h3>
                            <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                At our petshop, every animal is treated with love and care, ensuring they feel at home.
                            </p>
                            <a href="#" class="font-bold text-gray-800 mt-8">Learn More About Our Services</a>
                        </div>
                        <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
                            <div
                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                                <img alt="..."
                                    src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                                    class="w-full align-middle rounded-t-lg" />
                                <blockquote class="relative p-8 mb-4">
                                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 583 95" class="absolute left-0 w-full block"
                                        style="height: 95px; top: -94px;">
                                        <polygon points="-30,95 583,95 583,65" class="text-pink-600 fill-current">
                                        </polygon>
                                    </svg>
                                    <h4 class="text-xl font-bold text-white">
                                        Personalized Pet Care
                                    </h4>
                                    <p class="text-md font-light mt-2 text-white">
                                        Because every pet is unique, we provide personalized services to meet each one's
                                        needs.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section class="relative py-20">
                <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                    style="height: 80px;">
                    <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon class="text-white fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
                <div class="container mx-auto px-4">
                    <div class="items-center flex flex-wrap">
                        <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                            <img alt="..." class="max-w-full rounded-lg shadow-lg"
                                src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" />
                        </div>
                        <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
                            <div class="md:pr-12">
                                <div
                                    class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                                    <i class="fas fa-rocket text-xl"></i>
                                </div>
                                <h3 class="text-3xl font-semibold">A growing company</h3>
                                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                                    The extension comes with three pre-built pages to help you get
                                    started faster. You can change the text and images and you're
                                    good to go.
                                </p>
                                <ul class="list-none mt-6">
                                    <li class="py-2">
                                        <div class="flex items-center">
                                            <div>
                                                <span
                                                    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                                                        class="fas fa-fingerprint"></i></span>
                                            </div>
                                            <div>
                                                <h4 class="text-gray-600">
                                                    Carefully crafted components
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="py-2">
                                        <div class="flex items-center">
                                            <div>
                                                <span
                                                    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                                                        class="fab fa-html5"></i></span>
                                            </div>
                                            <div>
                                                <h4 class="text-gray-600">Amazing page examples</h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="py-2">
                                        <div class="flex items-center">
                                            <div>
                                                <span
                                                    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                                                        class="far fa-paper-plane"></i></span>
                                            </div>
                                            <div>
                                                <h4 class="text-gray-600">Dynamic components</h4>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="pt-20 pb-48">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap justify-center text-center mb-24">
                        <div class="w-full lg:w-6/12 px-4">
                            <h2 class="text-4xl font-semibold">Meet Our Petshop Heroes</h2>
                            <p class="text-lg leading-relaxed m-4 text-gray-600">
                                Each member of our team plays a vital role in providing the best care and attention for
                                your pets.
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-wrap">
                        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                            <div class="px-6">
                                <img alt="..."
                                    src="https://images.unsplash.com/photo-1644675272883-0c4d582528d8?q=80&w=2582&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    class="shadow-lg rounded-full max-w-full mx-auto" style="max-width: 120px;" />
                                <div class="pt-6 text-center">
                                    <h5 class="text-xl font-bold">Dr. Ryan Thompson</h5>
                                    <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                        Chief Veterinarian
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                            <div class="px-6">
                                <img alt="..."
                                    src="https://images.unsplash.com/photo-1597214840472-aa1eaf0e1fac?q=80&w=3572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    class="shadow-lg rounded-full max-w-full mx-auto" style="max-width: 120px;" />
                                <div class="pt-6 text-center">
                                    <h5 class="text-xl font-bold">Romina Hadid</h5>
                                    <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                        Grooming Specialist
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                            <div class="px-6">
                                <img alt="..."
                                    src="https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    class="shadow-lg rounded-full max-w-full mx-auto" style="max-width: 120px;" />
                                <div class="pt-6 text-center">
                                    <h5 class="text-xl font-bold">Alexa Smith</h5>
                                    <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                        Behavior Trainer
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                            <div class="px-6">
                                <img alt="..."
                                    src="https://images.unsplash.com/photo-1501743029101-21a00d6a3fb9?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    class="shadow-lg rounded-full max-w-full mx-auto" style="max-width: 120px;" />
                                <div class="pt-6 text-center">
                                    <h5 class="text-xl font-bold">Jenna Kardi</h5>
                                    <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                        Petshop Manager
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </main>
        <footer-component></footer-component>
    </div>
</template>
<script>
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
export default {
    name: "landing-page",
    components: {
        NavbarComponent,
        FooterComponent
    }
}
</script>