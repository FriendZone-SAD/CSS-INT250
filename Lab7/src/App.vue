<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Features from "./components/Features.vue";
import Productive from "./components/Productive.vue";
import FAQ from "./components/FAQ.vue";
import Testimonial from "./components/Testimonial.vue";
import EarlyAccess from "./components/EarlyAccess.vue";
import Footer from "./components/Footer.vue";

import accessAnywhere from './assets/icon-access-anywhere.svg'
import security from './assets/icon-security.svg'
import collaboration from './assets/icon-collaboration.svg'
import anyFile from './assets/icon-any-file.svg'

import profile1 from './assets/profile-1.jpg'
import profile2 from './assets/profile-2.jpg'
import profile3 from './assets/profile-3.jpg'

let detail = "Fylo has improved our team productivity by an order of magnitude. since making the switch our team has become a well-oiled collaboration machine."

const featureList = [{
  img: accessAnywhere,
  feature: "Access your file from anywhere",
  detail: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you anywhere."
},
{
  img: security,
  feature: "Security you can trust",
  detail: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
},
{
  img: collaboration,
  feature: "Real-time collaboration",
  detail: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
},
{
  img: anyFile,
  feature: "Security you can trust",
  detail: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared"
},];

const FAQList = [
  {
    question: "What is bookmark?",
    answer: "A bookmark is a saved link to a web page that allows you to easily navigate back to it later without having to remember the URL."
  },
  {
    question: "How can i request a new browser?",
    answer: "You can request support for a new browser by submitting a ticket through our help center or contacting our support team directly."
  },
  {
    question: "Is there a mobile app?",
    answer: "We currently do not offer a dedicated mobile app, but our web interface is fully optimized for mobile browsers."
  },
  {
    question: "What about other Chromium browsers?",
    answer: "Our service is fully compatible with most Chromium-based browsers, including Microsoft Edge, Brave, Vivaldi, and Opera."
  }
]

const testimonialList = [{
  detail: detail,
  profile: profile1,
  name: "Satish Patel",
  position: "Founder & CEO.\nHuddle"
},
{
  detail: detail,
  profile: profile2,
  name: "Bruce McKenzie",
  position: "Founder & CEO.\nHuddle"
},
{
  detail: detail,
  profile: profile3,
  name: "Eva Boyd",
  position: "Founder & CEO.\nHuddle"
}]
</script>

<template>
  <div class="min-h-screen max-w-7xl w-full flex flex-col items-center justify-center dark:bg-darkBlue dark:text-white font-opensans">
    <Navbar />
    <div>
      <Hero />
      <Features :featureList="featureList" />
      <Productive />
      <FAQ :FAQList="FAQList" />
      <Testimonial :testimonialList="testimonialList" />
      <EarlyAccess />
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
