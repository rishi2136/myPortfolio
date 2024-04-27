import Footer from "./Footer";

const ContectMe = () => {
  return (
    <div
      className=" d-flex flex-column "
      style={{ height: "600px", width: "100%" }}
      id="contact"
    >
      <h1 className="text-center fw-bolder d-block my-5 mx-auto">Contact Me</h1>
      <form
        action="mailto:rishiagrahari36@gmail.com"
        className="col-6 mx-auto"
        method="post"
      >
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="form-control input-group-lg;"
          placeholder="enter your email"
        />
        <label htmlFor="Subject" className="form-label">
          Subject
        </label>
        <input
          type="text"
          id="Subject"
          name="subject"
          className="form-control input-group-lg;"
          placeholder="enter your subject"
        />
        <label htmlFor="body" className="form-label"></label>
        <textarea
          placeholder="Leave a message &#128516;"
          name="body"
          className="form-control"
          required
        ></textarea>
        <button className="btn btn-primary mt-3 float-right">Submit</button>
      </form>
      <Footer />
    </div>
  );
};

export default ContectMe;
