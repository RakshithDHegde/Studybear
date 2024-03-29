const Contact = () => {
  return (
    <>
      <div className="ml-5">
        <h1 className="text-4xl ml-4 my-4">Contact us</h1>
        <h2 className="text-xl">Operating Address:</h2>
        <h1>
          <span>Is 224,1st Floor</span>
        </h1>
        <h1>
          <span>Ise Department,RV College of Engineering</span>
        </h1>
        <h1>
          {" "}
          <span>Bengaluru, Karnataka 560059</span>
        </h1>
        <h1 className="text-xl mt-6">Phone numbers</h1>
        <h1>
          <a href="tel:+918618743756">
            <span>+91 8618743756</span>
          </a>
        </h1>
        <h1>
          <a href="tel:+916362497977">
            <span>+91 6362497977</span>
          </a>
        </h1>

        <h1 className="text-xl mt-6">Email</h1>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=teamstudybear@gmail.com"
          target="_blank"
        >
          <span>teamstudybear@gmail.com</span>
        </a>
        <h1 className="text-xl mt-6">NEWS Publisher Info</h1>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=support@newsapi.org"
          target="_blank"
        >
          <span>support@newsapi.org</span>
        </a>
      </div>
    </>
  );
};
export default Contact;
