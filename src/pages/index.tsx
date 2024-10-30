/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import { LoginForm } from '../components/Forms/LoginForm'
import Container from '../components/Partials/Container'
import SensorMonitor from '../components/SensorMonitor'

const Home: NextPage = () => {

  return (
    <div className="bg-gradient-to-tl from-[#141414] to-[#272727] w-full h-screen flex items-center justify-center bg-cover">
      <Container>
        <div className="shadow-sm shadow-zinc-200 p-8 w-full rounded-lg backdrop-blur">
          <h2 className="font-thin underline text-white mb-4 text-center">Sensores - Refrigeradores</h2>
          <SensorMonitor />
        </div>
      </Container>
    </div>
  )
}

export default Home

