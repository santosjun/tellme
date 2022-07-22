import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { questions } from './questions'

function getRandomQuestion() {
  return questions[Math.floor(Math.random() * questions.length)]
}

function getRandomColor() {
  const colors = ["#f94144", "#f3722c", "#f8961e", "#f9844a", "#f9c74f", "#90be6d", "#43aa8b", "#4d908e", "#277da1", "#577590"]
  return colors[Math.floor(Math.random() * colors.length)]
}

export default function Home() {
  const [current, setCurrent] = useState(getRandomQuestion());
  return (
    <div style={{ background: getRandomColor() }} className={styles.container} onClick={() => setCurrent(getRandomQuestion())}>
      <div>
        <h1 className={styles.icon}>[?]</h1>
        <div className={styles.question}>{current}</div>
      </div>
    </div>
  )
}
