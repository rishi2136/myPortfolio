import { useState } from "react";

const ContectMe = () => {
  let [subject, setSubject] = useState("");
  let handleSubmit = () => {
    setSubject(subject);
  };

  let handleChange = () => {
    setSubject(subject);
  };

  return (
    <div className=" d-flex flex-column py-5" id="contact">
      <h1 className="text-center fw-bolder d-block my-5 mx-auto">Contact Me</h1>
      <form
        action={`mailto:rishiagrahari36@gmail.com?subject=${subject}`}
        className="col-lg-6 col-8 mx-auto text-dark fw-bolder"
        method="post"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="name@example.com"
          />
          <label htmlFor="email">Email address</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="Subject"
            name="subject"
            onChange={handleChange}
            placeholder="name@example.com"
          />
          <label htmlFor="Subject"> Subject</label>
        </div>

        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a Message here"
            id="body"
            name="body"
            style={{ height: "100px" }}
          ></textarea>
          <label htmlFor="body">Comments</label>
        </div>

        <button className="btn btn-primary mt-3 float-right submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContectMe;
