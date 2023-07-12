import * as React from "react"
import Link from "next/link";

const footerLinks = [
  {
    heading: 'Free Trial',
    items: [
      {
        name: 'Azure',
        url: '#'
      },
      {
        name: 'AWS',
        url: '#'
      },
      {
        name: 'Google',
        url: '#'
      }
    ]
  },
  {
    heading: 'Resources',
    items: [
      {
        name: 'Terms Of Service',
        url: '#'
      },
      {
        name: 'Privacy Policy',
        url: '#'
      },
      {
        name: 'Support',
        url: '#'
      }
    ],
  }
];

const Footer = () => {
  const emailInput = document.getElementsByClassName("email");

  return (
    <footer className="footer">
      <div className="footer-arrow">
        <a onClick={() => {document.getElementById("email")?.focus();}}>↑</a>
        </div>
      <div className="footer-main">
        <div className="footer-info">
          <p>✆ +1 (877) 777-7777</p>
          <p>123 Main st, San Francisco, CA, 94107</p>
        </div>
        <ul className="footer-links">
        {footerLinks.map((item) => {
          return (
            <li className="footer-links-list">
              <span className="footer-links-heading">{item.heading}</span>
              <ul>
              {item.items.map((link) => {
                return (
                  <li className="footer-links-item">
                    <Link href={link.url}>{link.name}</Link>
                  </li>
                )
              })}
              </ul>
            </li>
            );
        })}
        </ul>
      </div>
      <div className="footer-copyright">
        <p>© 2022 Example</p>
      </div>
    </footer>
  );
};

export default Footer;