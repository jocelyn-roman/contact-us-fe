import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Form, Field } from 'react-final-form';
import { isValidEmail, isValidPhone } from "../helpers";
import { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer/Footer";

const contactOptions = [
  {
    value: 'sales',
    name: 'Sales',
  },
  {
    value: 'press',
    name: 'Press',
  },
  {
    value: 'support',
    name: 'Support',
  },
  {
    value: 'demo',
    name: 'Demo',
  },
];

interface ErrorProps {
  name: string;
  classes?: string;
}

interface ValidateProps {
  email?: string;
  phone_number?: string;
}

const ContactPage: React.FC<PageProps> = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const onSubmit = async (values: any) => {
    setIsFormSubmitted(true);
  };

  const Error: React.FC<ErrorProps> = ({ name, classes }) => (
    <Field name={name} subscription={{ error: true, touched: true }}>
      {({ meta: { error, touched } }) =>
        error && touched ? (
          <span
            className={`form-error`}>
            {error}
          </span>
        ) : null
      }
    </Field>
  );

  if (isFormSubmitted) {
    return (
      <main>
        <h1>Thank you Page</h1>
        <div>
          <h5 className="">
          Thanks
          </h5>
          <span className="">
            We&#39;re looking forward to getting in touch.
          </span>
        </div>
      </main>
    )
  }

  return (
    <>
    <main role="main">
      <h1 className="visually-hidden"> Contact Us Page</h1>
      <div className="black-section">
        <p>Learn more about our latest features</p>
      </div>
      <p className="company-name">Company Name</p>
      <div className="container">
        <div className="contact-us-form">
          <h2 className="contact-us-title">Contact Us</h2>
          <p className="contact-us-description">Please provide some information to get started.</p>
          <Form
          onSubmit={onSubmit}
          validate={(values) => {
            const errors: ValidateProps = {};
    
            if (!values.email) {
              errors.email = 'Required';
            } else if (!isValidEmail(values.email)) {
              errors.email = 'Email is required and should not contain @gmail.';
            }

            if (!values.phone_number) {
              errors.phone_number = 'Required';
            } else if (!isValidPhone(values.phone_number)) {
              errors.phone_number = 'Phone number is required and should contain 10 digits.';
            }
            
            return errors;
          }}>
          {({ handleSubmit, form, submitting, values }) => (
          <form
            id="contact-us-form"
            className=""
            onSubmit={handleSubmit}
          >
            <div className="form-field-container">
              <Field
                id="email"
                type="email"
                placeholder="Email"
                className="form-field"
                name="email"
                aria-required="true"
                component="input"
              />
              <Error name="email" />
            </div>

            <div className="form-field-container">
              <Field
                id="name"
                type="name"
                placeholder="Name"
                className="form-field"
                name="name"
                aria-required="true"
                component="input"
              />
              <Error name="name" />
            </div>

            <div className="form-field-container">
              <Field
                id="phone_number"
                type="phone_number"
                placeholder=" Phone Number"
                className="form-field"
                name="phone_number"
                aria-required="true"
                component="input"
              />
              <Error name="phone_number" />
            </div>

            <div className="form-field-container form-floating-container">
              
              <Field
                id="contact_options"
                name="contact_options"
                aria-required="true"
                className="form-field"
                component="select"
              >
                {contactOptions.map((option) => (
                  <option value={option['value']}>
                    {option['name']}
                  </option>
                ))}
              </Field>
              <label className="floating-label">How We Can Help You?</label>
            </div>

            <div className="btn-wrapper">
              <button
                type="submit"
                className="btn"
                aria-label="Submit form"
                disabled={submitting}
              >
              Submit
              </button>
            </div>
            
              
          </form>
            )}
          </Form>
        </div>
        
        <div className="contact-us-info-container">
          <p className="contact-us-info">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
          <b>Phone:</b>
          <Link href="tel:+18777777777" className="contact-us-phone">+1 (877) 777-7777</Link>
          <b>Hours:</b>
          <p>Monday - Sunday: <b>7am - 11pm EST</b></p>
        </div>

      </div>
   
    </main>
    <Footer></Footer>
    </>
  )

  
}

export default ContactPage

export const Head: HeadFC = () => (
  <>
    <title>Contact Us</title>
    <meta name="description" content="Contact Us Page Description"
    />
  </>
)
