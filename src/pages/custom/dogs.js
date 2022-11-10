import React from "react"

import Layout from "../../components/Layout/Layout"
import Seo from "../../components/seo"
import { useForm, ValidationError } from "@formspree/react"
import "../styles/contact.css"

const ContactPage = () => {
  const [state, handleSubmit] = useForm("xknekrlk")
  if (state.succeeded) {
    return <p>Thanks for reaching out! I'll get back to you soon.</p>
  }
  return (
    <Layout>
      <Seo title="Custom Dogs" />
      <main>
        <form
          action="https://formspree.io/f/xknekrlk"
          method="POST"
          enctype="multipart/form-data"
        >
          <label>
            Your email:
            <input type="email" name="email" />
          </label>
          <textarea id="message" name="message" />
          <label>
            Your file:
            <input type="file" name="upload" />
          </label>
          <button type="submit">Send</button>
        </form>
      </main>
    </Layout>
  )
}

export default ContactPage
