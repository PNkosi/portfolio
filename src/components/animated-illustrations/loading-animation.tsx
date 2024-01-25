"use client"
import { drawPathMirror } from "@/lib/framer-motion-variants"
import { motion } from "framer-motion"


const LoadingAnimation = () => {
  return (
    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1125.03 341.58">
      <g id="Layer_1-2" data-name="Layer 1">
        <g>
          <motion.path
          variants={drawPathMirror}
          initial="initial"
          animate="animate"
          className="fill-none stroke-light-foreground" strokeMiterlimit={10} strokeWidth={16} d="m120.23,221.95l-51.61,3.9-35.71,3-18.6,1.5c-1.6,0-3.05-1-4.35-3-1.3-2-1.95-3.9-1.95-5.7,0-1.4.45-2.45,1.35-3.15.9-.7,1.9-1.2,3-1.5,1.1-.3,1.85-.55,2.25-.75.2-10.8.3-36.01.3-75.62,0-29.21-1.15-51.86-3.45-67.97-2.3-16.1-3.45-24.76-3.45-25.96,0-2.8,1.05-5,3.15-6.6,2.1-1.6,4.25-2.4,6.45-2.4,1.4,0,2.5.55,3.3,1.65.8,1.1,1.4,2.85,1.8,5.25,2,6.8,3.55,19.31,4.65,37.51,1.1,18.21,1.65,37.21,1.65,57.01,0,16.8-.1,32.41-.3,46.81-.2,14.4-.3,24.11-.3,29.11,2.6-.2,7.6-.55,15-1.05,7.4-.5,15-1.05,22.81-1.65,11.6-1.4,24.7-3.5,39.31-6.3,11.8-2.2,18.9-3.3,21.3-3.3,2.2,0,3.6,1,4.2,3,.6,2,.9,4.4.9,7.2,0,2.6-1.15,4.7-3.45,6.3-2.3,1.6-5.05,2.5-8.25,2.7Z"/>
          <motion.path
          variants={drawPathMirror}
          initial="initial"
          animate="animate"
          className="fill-none stroke-light-foreground" strokeMiterlimit={10} strokeWidth={16} d="m192.24,237.25c-13.4,0-23.31-3.7-29.71-11.1-6.4-7.4-9.6-16.6-9.6-27.61,0-9.6,1.75-21.5,5.25-35.71,3.5-14.2,8.45-26.9,14.85-38.11.4-.8,2.05-3.75,4.95-8.85,2.9-5.1,6.15-9,9.75-11.7,3.6-2.7,7.4-4.05,11.4-4.05,1.8,0,3.45.45,4.95,1.35s2.25,2.05,2.25,3.45c0,.4-.55,1.35-1.65,2.85-1.1,1.5-1.95,2.65-2.55,3.45-6.8,8.21-12.3,16.31-16.5,24.31-5.6,10.2-9.95,20.31-13.05,30.31-3.1,10-4.65,20.91-4.65,32.71,0,15.81,9.6,23.71,28.81,23.71,9,0,17.35-2.6,25.06-7.8,7.7-5.2,13.85-11.55,18.45-19.05,4.6-7.5,6.9-14.35,6.9-20.55,0-7-2.3-13.1-6.9-18.3-4.6-5.2-10.91-10.7-18.9-16.5-5.2-3.8-9-6.9-11.4-9.3s-3.6-4.4-3.6-6c0-2.4,1.7-4.35,5.1-5.85,3.4-1.5,7.4-2.25,12-2.25,2.6,0,4.3.15,5.1.45.8.3,1.2.85,1.2,1.65,0,.4-.35,1.05-1.05,1.95-.7.9-1.05,1.65-1.05,2.25s2,2.6,6,6c8,6.6,14.7,13.31,20.1,20.1,5.4,6.8,8.1,14.81,8.1,24.01,0,7.8-2.9,16.8-8.7,27.01-5.8,10.2-14,18.96-24.61,26.26-10.61,7.3-22.71,10.95-36.31,10.95Z"/>
          <motion.path
          variants={drawPathMirror}
          initial="initial"
          animate="animate"
          className="fill-none stroke-light-foreground" strokeMiterlimit={10} strokeWidth={16} d="m414.89,224.05c0,2.4-1,5.15-3,8.25-2,3.1-4,4.65-6,4.65-3.4,0-6-2.1-7.8-6.3-1.8-4.2-2.7-9.1-2.7-14.7,0-4.8.3-19.21.9-43.21l.3-11.4c0-4.6-1.2-7.9-3.6-9.9-9,15.21-17.4,28.41-25.21,39.61-7.8,11.21-17.7,21.75-29.71,31.66-12,9.9-24.61,14.85-37.81,14.85-6.4,0-11.36-2-14.85-6-3.5-4-5.25-9.2-5.25-15.6,0-8,3.6-18.95,10.8-32.86,7.2-13.9,16.4-28,27.61-42.31,11.2-14.3,22.4-26.05,33.61-35.26,7.4-6,13.3-10.05,17.7-12.15,4.4-2.1,8.3-3.15,11.7-3.15,3.2,0,6.5,1,9.9,3,3.4,2,6.3,4.8,8.7,8.4,2.4,3.6,3.6,7.7,3.6,12.3,0,6.2-1.7,12.11-5.1,17.7l5.1-1.5c2.2,0,3.5,2.7,3.9,8.1.2,3.2.45,9.71.75,19.5.3,9.8.55,17.91.75,24.31.2,6.6.4,13.01.6,19.2.2,6.2.4,11.1.6,14.7.2,1.4,1,2.85,2.4,4.35,1.4,1.5,2.1,2.75,2.1,3.75Zm-26.11-84.32c2.4-6,3.6-12.5,3.6-19.5,0-4.2-1.25-7.85-3.75-10.95-2.5-3.1-5.85-4.65-10.05-4.65-5,0-11.4,3.4-19.2,10.2-9,7.6-18.51,17.75-28.51,30.46-10.01,12.71-18.3,25.26-24.91,37.66-6.6,12.41-9.9,22.21-9.9,29.41,0,6,2.8,9,8.4,9,10.8,0,21.2-4,31.21-12,10-8,18.95-17.55,26.86-28.66,7.9-11.1,16.65-24.75,26.26-40.96Z"/>
          <motion.path
          variants={drawPathMirror}
          initial="initial"
          animate="animate"
          className="fill-none stroke-light-foreground" strokeMiterlimit={10} strokeWidth={16} d="m552.32,29.91c0,4-.2,11.85-.6,23.56-.4,11.7-.6,23.46-.6,35.26,0,22.81.5,46.06,1.5,69.77,1,23.71,1.8,39.26,2.4,46.66,0,1.2.1,2.5.3,3.9.2,1.4.4,2.7.6,3.9.8,5.6,1.2,9,1.2,10.2,0,2-1.45,3.9-4.35,5.7-2.9,1.8-5.15,2.7-6.75,2.7-2.2,0-3.65-.85-4.35-2.55-.7-1.7-1.05-4.05-1.05-7.05,0-11,.3-22.5.9-34.51l.3-16.8c0-5.6-.1-12.95-.3-22.05-.2-9.1-.5-16.75-.9-22.96-10.2,32.81-21.75,59.97-34.66,81.47-12.9,21.51-26.86,32.26-41.86,32.26-6.8,0-12.56-3.2-17.25-9.6-4.7-6.4-7.05-15.6-7.05-27.61,0-15.8,5.35-33.01,16.05-51.61,10.7-18.6,22.9-34.61,36.61-48.01,13.7-13.4,23.86-20.11,30.46-20.11s9.6,2.1,9.6,6.3c0,2.8-.95,6.05-2.85,9.75-1.9,3.7-4,7.05-6.3,10.05-2.3,3-3.65,4.5-4.05,4.5s-.85-.15-1.35-.45c-.5-.3-.75-.65-.75-1.05,0-1,.5-2.7,1.5-5.1,1-2.4,1.5-4,1.5-4.8,0-1-.1-1.7-.3-2.1-.2-.4-.8-.6-1.8-.6-4.2,0-11.75,5.75-22.66,17.25-10.91,11.51-20.66,25.16-29.26,40.96-8.6,15.8-12.9,30.51-12.9,44.11,0,4.8,1,9.3,3,13.5,2,4.2,5.3,6.3,9.9,6.3,14.6,0,28.16-12.35,40.66-37.06,12.5-24.7,23.35-52.76,32.56-84.17l-.6-25.21c-.6-22.21-.9-34.01-.9-35.41,0-12,.5-20.6,1.5-25.81.4-2,.85-3.4,1.35-4.2.5-.8,1.55-1.2,3.15-1.2,2,0,4,.65,6,1.95,2,1.3,3,3.05,3,5.25l-.6,14.7Z"/>
          <motion.path
          variants={drawPathMirror}
          initial="initial"
          animate="animate"
          className="fill-none stroke-light-foreground" strokeMiterlimit={10} strokeWidth={16} d="m597.33,51.81c-3.4,0-6.86-1.4-10.35-4.2-3.5-2.8-5.25-5.1-5.25-6.9,0-2.2,1.05-4.3,3.15-6.3,2.1-2,4.25-3,6.45-3,3,1,5.5,2.6,7.5,4.8,1.6,1.6,3.4,3.7,5.4,6.3,2,2.6,3,4.2,3,4.8,0,3-3.3,4.5-9.9,4.5Zm9,190.24c-2.8-.2-4.85-4.7-6.15-13.5-1.3-8.8-2.65-25.51-4.05-50.11-.8-16.2-1.5-32.06-2.1-47.56-.6-15.5-1-27.46-1.2-35.86,0-2.2.35-3.85,1.05-4.95.7-1.1,2.05-1.65,4.05-1.65,4.6,0,7.5,1.9,8.7,5.7,1.2,3.8,1.8,11.1,1.8,21.91l-.3,35.41c0,20.21.6,36.41,1.8,48.61,0,.6.9,7,2.7,19.21,1.4,8.4,2.1,14,2.1,16.8,0,2-.85,3.55-2.55,4.65-1.7,1.1-3.65,1.55-5.85,1.35Z"/>
          <motion.path
          variants={drawPathMirror}
          initial="initial"
          animate="animate"
          className="fill-none stroke-light-foreground" strokeMiterlimit={10} strokeWidth={16} d="m745.56,245.96c-2,0-3.7-.45-5.1-1.35-1.4-.9-2.1-2.15-2.1-3.75,0-8.2.6-20.9,1.8-38.11,1.2-18.4,1.8-33.71,1.8-45.91s-.35-21.45-1.05-28.96c-.7-7.5-2.35-11.25-4.95-11.25-6.8,0-14.25,8.45-22.36,25.36-8.1,16.91-17.36,39.16-27.76,66.76l-4.5,12c-.8,2-2.15,3.6-4.05,4.8-1.9,1.2-3.85,1.8-5.85,1.8-2.4,0-4-.2-4.8-.6-.8-.4-1.3-1.6-1.5-3.6l-2.4-24.61-4.5-43.21c-1.4-17.2-3.1-32.21-5.1-45.01-.6-3-.9-5.3-.9-6.9,0-3,1.3-5.45,3.9-7.35,2.6-1.9,5.6-2.85,9-2.85,2,0,3.45,4.8,4.35,14.4.9,9.6,1.85,25.11,2.85,46.51l1.2,15.9c1.6,20.21,2.5,33.01,2.7,38.41.6-1.2,1.15-2.55,1.65-4.05.5-1.5,1.15-3.15,1.95-4.95,10.8-28,20.95-51.36,30.46-70.07,9.5-18.7,18.65-28.06,27.46-28.06,6.2,0,10.45,5.25,12.75,15.75,2.3,10.5,3.75,23.96,4.35,40.36.6,18.21.9,44.81.9,79.82,0,2.4-1,4.45-3,6.15-2,1.7-4.4,2.55-7.2,2.55Z"/>
          <motion.path
          variants={drawPathMirror}
          initial="initial"
          animate="animate"
          className="fill-none stroke-light-foreground" strokeMiterlimit={10} strokeWidth={16} d="m893.19,305.97c-8.6,8.2-17.55,14.85-26.86,19.95-9.3,5.1-17.36,7.65-24.16,7.65-3.8,0-6.5-.95-8.1-2.85-1.6-1.9-2.4-4.15-2.4-6.75,0-2.4,4.5-5.2,13.5-8.4,13.6-4.4,26.2-11.81,37.81-22.21,9-8,15.6-17.1,19.8-27.31,4.2-10.2,6.3-20.61,6.3-31.21,0-12-.75-23-2.25-33.01-1.5-10-3.85-22.3-7.05-36.91-3.6-15.4-6.1-28.51-7.5-39.31-3.4,9.2-8.66,20.31-15.75,33.31-7.1,13.01-15.56,25.51-25.36,37.51-9.2,11.4-17.55,19.91-25.06,25.51-7.5,5.6-14.75,8.4-21.75,8.4-6,0-10.46-2.35-13.35-7.05-2.9-4.7-4.35-11.15-4.35-19.35,0-13.6,4.2-29.6,12.6-48.01,8.4-18.4,18.9-34.21,31.51-47.41,12.6-13.2,25-19.8,37.21-19.8,4.2,0,7.45,1.5,9.75,4.5,2.3,3,3.45,6.6,3.45,10.8,0,5.4-1.1,8.1-3.3,8.1-.6,0-1.35-.75-2.25-2.25-.9-1.5-1.95-2.85-3.15-4.05-1.2-1.2-2.5-1.8-3.9-1.8-10.2,0-20.55,5.7-31.06,17.1-10.5,11.4-19.2,24.76-26.11,40.06s-10.35,27.86-10.35,37.66c0,5.4.75,9.3,2.25,11.7,1.5,2.4,3.85,3.6,7.05,3.6,4.8,0,10.6-2.8,17.4-8.4,6.8-5.6,14.9-14.4,24.31-26.41,8.4-10.6,16.05-22.96,22.96-37.06s12.15-27.55,15.75-40.36c.4-1.2,1.05-2.2,1.95-3,.9-.8,1.95-1.2,3.15-1.2,1.8,0,3.65.55,5.55,1.65,1.9,1.1,2.85,2.25,2.85,3.45,0,.8-.15,1.65-.45,2.55-.3.9-.55,1.45-.75,1.65,1.4,11,4.7,28.11,9.9,51.31,3.8,16.41,6.65,30.16,8.55,41.26,1.9,11.1,2.85,21.96,2.85,32.56,0,15.6-3.1,29.81-9.3,42.61-6.2,12.8-13.5,23.2-21.91,31.21Z"/>
          <motion.path
          variants={drawPathMirror}
          initial="initial"
          animate="animate"
          className="fill-none stroke-light-foreground" strokeMiterlimit={10} strokeWidth={16} d="m979.91,242.65c-3.8,0-7.25-2.15-10.35-6.45-3.1-4.3-5.6-9.1-7.5-14.4-1.9-5.3-2.85-8.75-2.85-10.35,0-2.2,1.05-4.3,3.15-6.3,2.1-2,4.25-3,6.45-3,1.4,0,2.5.55,3.3,1.65.8,1.1,2,2.95,3.6,5.55,2,3.6,3.7,5.9,5.1,6.9,2.6,2,4.75,5.7,6.45,11.1,1.7,5.4,2.55,9,2.55,10.8,0,3-3.3,4.5-9.9,4.5Z"/>
          <motion.path
          variants={drawPathMirror}
          initial="initial"
          animate="animate"
          className="fill-none stroke-light-foreground" strokeMiterlimit={10} strokeWidth={16} d="m1043.52,242.65c-3.8,0-7.25-2.15-10.35-6.45-3.1-4.3-5.6-9.1-7.5-14.4-1.9-5.3-2.85-8.75-2.85-10.35,0-2.2,1.05-4.3,3.15-6.3,2.1-2,4.25-3,6.45-3,1.4,0,2.5.55,3.3,1.65.8,1.1,2,2.95,3.6,5.55,2,3.6,3.7,5.9,5.1,6.9,2.6,2,4.75,5.7,6.45,11.1,1.7,5.4,2.55,9,2.55,10.8,0,3-3.3,4.5-9.9,4.5Z"/>
          <motion.path
          variants={drawPathMirror}
          initial="initial"
          animate="animate"
          className="fill-none stroke-light-foreground" strokeMiterlimit={10} strokeWidth={16} d="m1107.13,242.65c-3.8,0-7.25-2.15-10.35-6.45-3.1-4.3-5.6-9.1-7.5-14.4-1.9-5.3-2.85-8.75-2.85-10.35,0-2.2,1.05-4.3,3.15-6.3,2.1-2,4.25-3,6.45-3,1.4,0,2.5.55,3.3,1.65.8,1.1,2,2.95,3.6,5.55,2,3.6,3.7,5.9,5.1,6.9,2.6,2,4.75,5.7,6.45,11.1,1.7,5.4,2.55,9,2.55,10.8,0,3-3.3,4.5-9.9,4.5Z"/>
        </g>
      </g>
    </svg>
  )
}

export default LoadingAnimation