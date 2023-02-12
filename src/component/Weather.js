import React from 'react'

//style
import styles from './Style.module.css'

const Weather = ({ name, short, degree, air }) => {

  const dateBuilder = (date) => {
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    var days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]

    var day = days[date.getDay()]
    var month = months[date.getMonth()]
    var year = date.getFullYear()
    var dayDate = date.getDate()

    return `${day} ${dayDate} ${month} ${year}`
  }

  return (
    <div className={styles.infoContainer}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          {name} , {short}
        </h1>
        <p className={styles.date}>{dateBuilder(new Date())}</p>
        <span className={styles.degree}>{Math.round(degree)} °C</span>
        <h3 className={styles.text}>{air}</h3>
      </div>
    </div>
  )
}

export default Weather
