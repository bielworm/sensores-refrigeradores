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
          <div className="flex flex-row justify-center items-start gap-2">
            <h2 className="font-thin underline text-white mb-4 text-center">
              Sensores - Refrigeradores
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="#FFF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              >
                <path d="M6 12a5 5 0 1 0 6 0m-6 0V3h6v9m0-9h2m-2 3h2m-2 3h2m5-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4" />
                <path d="M9 14a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 0v-3" />
              </g>
            </svg>
          </div>
          <SensorMonitor />
        </div>
      </Container>
    </div>
  )
}

export default Home

