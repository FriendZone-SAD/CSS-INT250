<script setup>
import Navbar from "./components/Navbar.vue"
import Feature from "./components/Feature.vue"
import Creation from "./components/Creation.vue"
import Footer from "./components/Footer.vue"

import deepEarth from "./assets/desktop/image-deep-earth.jpg";
import nightArcade from "./assets/desktop/image-night-arcade.jpg";
import soccerTeam from "./assets/desktop/image-soccer-team.jpg";
import grid from "./assets/desktop/image-grid.jpg";
import upAbove from "./assets/desktop/image-from-above.jpg";
import pocket from "./assets/desktop/image-pocket-borealis.jpg";
import curiosity from "./assets/desktop/image-curiosity.jpg";
import fisheye from "./assets/desktop/image-fisheye.jpg";

import deepEarthMobile from "./assets/mobile/image-deep-earth.jpg";
import nightArcadeMobile from "./assets/mobile/image-night-arcade.jpg";
import soccerTeamMobile from "./assets/mobile/image-soccer-team.jpg";
import gridMobile from "./assets/mobile/image-grid.jpg";
import upAboveMobile from "./assets/mobile/image-from-above.jpg";
import pocketMobile from "./assets/mobile/image-pocket-borealis.jpg";
import curiosityMobile from "./assets/mobile/image-curiosity.jpg";
import fisheyeMobile from "./assets/mobile/image-fisheye.jpg";
import {ref} from "vue"

const menuItems = ref([
  {name: "About", link: "#"},
  {name: "Careers", link: "#"},
  {name: "Events", link: "#"},
  {name: "Products", link: "#"},
  {name: "Supports", link: "#"},
])

// const creationItems = ref([
//   {name: "DEEP EARTH", img: "../assets/desktop/image-deep-earth.jpg"},
//   {name: "NIGHT ARCADE", img: "../assets/desktop/image-night-arcade.jpg"},
//   {name: "SOCCER TEAM VR", img: "../assets/desktop/image-soccer-team.jpg"},
//   {name: "THE GRID", img: "../assets/desktop/image-grid.jpg"},
//   {name: "FROM UP ABOVE VR", img: "../assets/desktop/image-from-above.jpg"},
//   {name: "POCKET BOREALIS", img: "../assets/desktop/image-pocket-borealis.jpg"},
//   {name: "THE CURIOSITY", img: "../assets/desktop/image-curiosity.jpg"},
//   {name: "MAKE IT FISHEYE", img: "../assets/desktop/image-fisheye.jpg"},
// ])

const creationItems = ref([
  {name: "DEEP EARTH", img: deepEarth, mobileImg: deepEarthMobile},
  {name: "NIGHT ARCADE", img: nightArcade, mobileImg: nightArcadeMobile},
  {name: "SOCCER TEAM VR", img: soccerTeam, mobileImg: soccerTeamMobile},
  {name: "THE GRID", img: grid, mobileImg: gridMobile},
  {name: "FROM UP ABOVE VR", img: upAbove, mobileImg: upAboveMobile},
  {name: "POCKET BOREALIS", img: pocket, mobileImg: pocketMobile},
  {name: "THE CURIOSITY", img: curiosity, mobileImg: curiosityMobile},
  {name: "MAKE IT FISHEYE", img: fisheye, mobileImg: fisheyeMobile},
])
</script>

<template>
  <Navbar :menu-items="menuItems"/>
  <Feature />
  <Creation :creation-items="creationItems"/>
  <Footer :menu-items="menuItems"/>
</template>

<style scoped></style>
