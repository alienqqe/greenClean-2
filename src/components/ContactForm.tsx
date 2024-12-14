import { useState } from 'react'
import emailjs from '@emailjs/browser'
import style from '../styles/ContactForm.module.scss'

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [stateMessage, setStateMessage] = useState<string | null>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevents default form submission behavior
    setIsSubmitting(true)

    const form = e.target as HTMLFormElement // Type assertion for `e.target`

    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_SERVICE_ID as string,
        import.meta.env.VITE_REACT_APP_TEMPLATE_ID as string,
        form,
        import.meta.env.VITE_REACT_APP_PUBLIC_KEY as string
      )
      .then(
        () => {
          setStateMessage('Message sent!')
          setIsSubmitting(false)
          setTimeout(() => setStateMessage(null), 5000) // Hide message after 5 seconds
          form.reset() // Clears the form
        },
        () => {
          setStateMessage('Something went wrong, please try again later.')
          setIsSubmitting(false)
          setTimeout(() => setStateMessage(null), 5000) // Hide message after 5 seconds
        }
      )
  }

  return (
    <div
      className={`${style.container} container d-flex align-items-center justify-content-evenly flex-column flex-lg-row gap-2`}
    >
      <form onSubmit={sendEmail} className={style.form}>
        <label>Your Name</label>
        <input type='text' name='user_name' required />
        <label>Your Email</label>
        <input type='email' name='user_email' required />
        <label>Message</label>
        <textarea name='message' required />
        <input type='submit' value='Send' disabled={isSubmitting} />
        {stateMessage && <p>{stateMessage}</p>}
      </form>
      <div className={style.visitSection}>
        <div className='visit-us'>
          <h1 className='mt-5 pb-2'>Or visit us:</h1>
          <address>
            <h4>Our Office:</h4>

            <p>Floriánska 11, 040 01 Staré Mesto</p>

            <p>Košice, Slovakia</p>
            <br />
          </address>
        </div>
        <div className='map-container'>
          <iframe
            title='Google Maps Location'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391.2950394756534!2d21.24587490582477!3d48.71869044741077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee06907904d89%3A0x8b2339a80ae0cc76!2sCASSOVAR%2C%20Flori%C3%A1nska%2011%2C%20040%2001%20Star%C3%A9%20Mesto!5e0!3m2!1suk!2ssk!4v1734194895047!5m2!1suk!2ssk'
            height='200'
            style={{ border: 0 }}
            loading='lazy'
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
