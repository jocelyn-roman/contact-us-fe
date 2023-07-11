import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Form, Field } from 'react-final-form';
import { isValidEmail, isValidPhone } from "../helpers";
import { useState } from "react";

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
    <main>
      <h1> Contact Us Page</h1>
      <div className="container">
        <div className="form-container">
        <h2>Contact Us</h2>
        <p>Please provide some information to get started.</p>
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
          <div>
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

          <div>
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

          <div>
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

          <div>
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
          </div>

          <button
            type="submit"
            className="btn"
            aria-label="Submit form"
            disabled={submitting}
          >
            Submit
          </button>
        </form>
          )}
        </Form>
        </div>
        
        <div className="">
          <p>In publishing and graphic design, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <span>Phone:</span>
          <p>+ (877) 777-7777</p>

          <span>Hours:</span>
          <p>Monday - Sunday: 7am - 11pm EST</p>
        </div>

      </div>
   
    </main>
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
