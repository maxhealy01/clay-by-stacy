import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useForm, ValidationError } from "@formspree/react"
import "./styles/contact.css"

const ContactPage = () => {
  const [state, handleSubmit] = useForm("mdobqpaq")
  if (state.succeeded) {
    // Redirect to contact page after five seconds
    return <p>Thanks for joining!</p>
  }
  return (
    <Layout>
      <Seo title="Contact" />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address: </label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="message">Message: </label>
          <textarea id="message" name="message" />
        </div>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </Layout>
  )
}

export default ContactPage
