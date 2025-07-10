import { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const ContectMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      // .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
      //   publicKey: "YOUR_PUBLIC_KEY",
      // })
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className=" d-flex flex-column py-5" id="contact">
      <h1 className="text-center fw-bolder d-block my-5 mx-auto">Contact Me</h1>
      <div className="mail-card">
        <form
          className="flex-grow mx-auto text-dark fw-bolder mail-form"
          autoComplete
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="user_email"
              name="user_email"
            />
            <label htmlFor="user_email">Email Address</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="from_name"
              name="from_name"
            />
            <label htmlFor="from_name">Your Name</label>
          </div>

          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a Message here"
              id="message"
              name="message"
              style={{ height: "100px" }}
            ></textarea>
          </div>

          <button type="submit" className="btn mt-3 float-right submit-btn">
            Submit
          </button>
        </form>
        <div className="mail-image-box">
          <img src="./send_mail.svg" alt="mail-person image" />
        </div>
      </div>
    </div>
  );
};

export default ContectMe;
