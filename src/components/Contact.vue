<script setup lang="ts">
import { ref } from 'vue';
const formData = ref({
  name: "",
  email: "",
  message: ""
})

const submitForm = () => {
  console.log("Form submitted:", formData.value)
}

// v-model -> Two way data binding


</script>

<template>
  <div class="min-h-dvh w-full my-6 flex justify-center">
    <div class="w-10/12">
      <h1 class="text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl text-center my-16">Talk to Us</h1>
      <div class="flex w-full gap-4 max-lg:flex-col max-lg:items-center">
        <form @submit.prevent = "submitForm" action="" class="w-7/12 max-lg:w-10/12 max-md:w-full ">
          <div class="input-div">
            <label class="label" for="name">Name</label>
            <input v-model="formData.name" class="input" type="text" placeholder="Enter Name" />
          </div>
          <div class="input-div">
            <label class="label" for="email">Email</label>
            <input v-model="formData.email" required class="input" type="email" placeholder="Enter Email" />
          </div>
          <div class="input-div">
            <label class="label" for="message">Message</label>
            <textarea
              v-model="formData.message"
              class="input placeholder:opacity-50"
              placeholder="Your message here"
              rows="3"
            />
          </div>
          <div>
            <button class="bg-white text-black rounded-full px-4 py-2 max-md:text-sm">Submit</button>
          </div>
        </form>


        <!-- Contact Info -->
        <div
          class="flex flex-col justify-center items-center bg-[#c0c0c0] w-5/12 max-lg:w-10/12 max-md:w-full max-lg:py-8  max-lg:mt-12  rounded-sm text-black"
        >
          <div class="flex gap-1 justify-center mb-4">
            <!-- <img src="/favicon.png" width="36" height="36" alt="flash" /> -->
            <img src="/logo1.png" width="128" height="40" alt="logo" />
          </div>
          <div class="flex flex-col gap-2">
            <!-- call -->
            <div class="flex items-center gap-1">
              <img src="/call.png" width="32" height="32" alt="call" />
              <p>+254-734-456-XXX</p>
            </div>
            <!-- email -->
            <div class="flex items-center gap-2">
              <img src="/email.png" width="32" height="32" alt="call" />
              <p>info@elgonSystems.com</p>
            </div>
          </div>
          <!-- socials -->
          <div class=" mt-4">
            <h3 class="text-center my-1">Socials</h3>
            <div class="flex items-center gap-4 ">
              <div>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/facebook.png" width="30" height="30" alt="fb" />
                </a>
              </div>
              <div>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/youtube.png" width="30" height="30" alt="fb" />
                </a>
              </div>
              <div>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/in.svg" width="30" height="30" alt="fb" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
