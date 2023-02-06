
"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { ChakraProvider } from '@chakra-ui/react'
import react from 'react'
import reactDom from 'react-dom'
const inter = Inter({ subsets: ['latin'] })

import Newsletter from './components/newsletter'

export default function Home() {
  return (
    <ChakraProvider>
      <Newsletter />
    </ChakraProvider>
  )
}
