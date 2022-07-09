const Contact = () => {
  return (
    <>
      <div className="ml-5">
        <h1 className="text-4xl ml-4 my-4">Contact us</h1>
        <h2 className="text-xl">Operating Address:</h2>
        <h1>
          <span>No 115,1st Cross</span>
        </h1>
        <h1>
          <span>14th Block,Nagarbhavi 2nd Stage</span>
        </h1>
        <h1>
          {" "}
          <span>Bengaluru, Karnataka 560072</span>
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
      </div>
    </>
  );
};
export default Contact;
