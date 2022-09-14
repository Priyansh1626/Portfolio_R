import React from "react";

export default function Contactform() {
  const removeAll = () => {};

  return (
    <>
      <div className="formbox">
        <div className="formContainer">
          <form action="https://formspree.io/f/maykqkva" method="POST">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              autoComplete="off"
              required
            />
            <textarea
              name="message"
              id="message"
              placeholder="Your message"
              autoComplete="off"
              required
            />
            <div className="btnBox">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
