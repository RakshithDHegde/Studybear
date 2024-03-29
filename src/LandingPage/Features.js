import Notes from "../notes.webp";
import { motion } from "framer-motion";
import Events from "../Events.webp";
import Doubt from "../doubt.webp";
import News from "../news.webp";
import { Fade } from "react-reveal";
import "./Features.css";
import Logo from "./Logo";
import { useHistory } from "react-router-dom";
const Features = () => {
  const history = useHistory();
  return (
    <>
      <Fade bottom duration={1200}>
        <div className="lg:mx-36 grid lg:gap-16 lg:grid-cols-2 lg:mb-10 grid-cols-1 mt-5 mx-5 gap-y-5">
          <div className=" bg-sky-300 rounded-xl text-center drop-shadow ">
            <img
              className="mx-auto my-auto lg:w-64 w-32 "
              src={Notes}
              width={250}
            />

            <h1 className="text-white lg:text-5xl lg:mx-20 lg:py-10 font-semibold text-4xl mx-12 my-12 font-sans">
              One stop solution for all the notes
            </h1>
          </div>
          {/* //// second div //// */}
          <div className=" bg-white rounded-xl text-center drop-shadow ">
            <img className="mx-auto lg:w-64 w-32" src={Doubt} width={250} />
            <h1 className="text-sky-300 lg:text-5xl lg:mx-20 lg:py-2 font-semibold text-4xl mx-12  font-sans">
              Doubts??
            </h1>
            <h1 className="text-sky-300 lg:text-5xl lg:mx-20 lg:py-10 mx-12 text-4xl py-12 font-semibold font-sans">
              Connect to your Peers and interact in our Discord server!!
            </h1>
          </div>
        </div>
      </Fade>
      <Fade bottom duration={1200}>
        {/* //Second row */}
        <div className="lg:mx-36 grid lg:gap-16 lg:grid-cols-2 lg:mb-10 grid-cols-1 mt-5 mx-5 gap-y-5">
          <div className=" bg-white rounded-xl text-center drop-shadow ">
            <img className="mx-auto lg:w-64 w-32" src={News} width={250} />

            <h1 className="text-sky-300 lg:text-5xl lg:mx-20 lg:py-10 font-semibold text-4xl mx-12 my-12 font-sans">
              Get updated about all the latest Technology
            </h1>
          </div>
          {/* //// second div //// */}
          <div className=" bg-sky-300 rounded-xl text-center drop-shadow ">
            <img
              className="mx-auto my-auto lg:w-64 w-32"
              src={Events}
              width={250}
            />

            <h1 className="text-white lg:text-5xl lg:mx-20 lg:py-10 font-semibold text-4xl mx-12 my-12 font-sans">
              Get updated about all the Events and more...
            </h1>
          </div>
        </div>
        <div className="flex justify-center my-20 mx-auto">
          <div className="grid lg:grid-cols-2 lg:gap-80 mx-auto grid-cols-1 justify-center">
            <div class="container mx-auto">
              <div class="card">
                <div class="imgBx">
                  <img
                    className="mx-auto"
                    src="https://i.postimg.cc/F15xxKKM/Whats-App-Image-2022-09-01-at-9-24-49-AM-removebg-preview.png"
                  />
                </div>
                <div class="contentBx">
                  <h2 className="text-slate-700">Rakshith Hegde</h2>
                  <h3>Web developer</h3>
                  <div className="size">
                    <div className>
                      <form
                        action="https://www.instagram.com/rakshith_dhegde_/"
                        target="_blank"
                      >
                        <button>
                          <img
                            src="https://cdn3d.iconscout.com/3d/free/thumb/instagram-4703914-3915166.png"
                            className="h-20 w-20 object-contain"
                          ></img>
                        </button>
                      </form>
                    </div>
                    <form action="https://wa.me/916362497977" target="_blank">
                      <button type="submit">
                        <img
                          src="https://cdn3d.iconscout.com/3d/free/thumb/whatsapp-4703919-3915171.png"
                          className="h-20 w-20 object-contain"
                        ></img>
                      </button>
                    </form>
                    <form
                      action="https://www.linkedin.com/in/rakshith-hegde-74ab3a226"
                      target="_blank"
                    >
                      <button>
                        <img
                          src="https://cdn3d.iconscout.com/3d/free/thumb/linkedin-2950130-2447889.png"
                          className="h-20 w-20 object-contain"
                        ></img>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="container mx-auto">
              <div class="card">
                <div class="imgBx">
                  <img
                    className="mx-auto"
                    src="https://i.postimg.cc/wTXrGKdX/Whats-App-Image-2022-09-01-at-9-24-55-AM-removebg-preview.png"
                  />
                </div>
                <div class="contentBx">
                  <h2 className="text-slate-700">Sandeep Kamath</h2>
                  <h3>Android developer</h3>
                  <div className="size">
                    <div className>
                      <form
                        action="https://www.instagram.com/_mssandeep_kamath_/"
                        target="_blank"
                      >
                        <button>
                          <img
                            src="https://cdn3d.iconscout.com/3d/free/thumb/instagram-4703914-3915166.png"
                            className="h-20 w-20 object-contain"
                          ></img>
                        </button>
                      </form>
                    </div>
                    <form action="https://wa.me/918618743756" target="_blank">
                      <button type="submit">
                        <img
                          src="https://cdn3d.iconscout.com/3d/free/thumb/whatsapp-4703919-3915171.png"
                          className="h-20 w-20 object-contain"
                        ></img>
                      </button>
                    </form>
                    <form
                      action="https://www.linkedin.com/in/m-s-sandeep-kamath-296913233"
                      target="_blank"
                    >
                      <button>
                        <img
                          src="https://cdn3d.iconscout.com/3d/free/thumb/linkedin-2950130-2447889.png"
                          className="h-20 w-20 object-contain"
                        ></img>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <footer class="p-4  sm:p-6 bg-slate-50 ">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="/" class="flex items-center">
              <Logo />
              <span class="self-center text-2xl font-semibold whitespace-nowrap ">
                Studybear
              </span>
            </a>
            <h1 className="my-2 ml-3 text-sm">RV College of Engineering</h1>
            <h1 className="my-2 ml-3 text-sm">Bangalore-560059</h1>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=teamstudybear@gmail.com"
              target="_blank"
            >
              <h1 className="my-5 ml-3 text-sm">teamstudybear@gmail.com</h1>
            </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Resources
              </h2>
              <ul class="text-gray-600 ">
                <li class="mb-4">
                  <a href="https://dribbble.com/" class="hover:underline ">
                    Dribble
                  </a>
                </li>
                <li class="mb-4">
                  <a href="https://www.freepik.com/" class="hover:underline">
                    Freepik
                  </a>
                </li>
                <li>
                  <a
                    href="https://icons8.com/illustrations"
                    class="hover:underline"
                  >
                    Icons 8
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Legal
              </h2>
              <ul class="text-gray-600 ">
                <li class="mb-4">
                  <a
                    href="https://www.privacypolicygenerator.info/live.php?token=J29fb134XZHJRHx4NyX27uXp1V30owjA"
                    class="hover:underline"
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li class="mb-4">
                  <a href="/contact" class="hover:underline" target="_blank">
                    Contact us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.termsandconditionsgenerator.com/live.php?token=kukgE15ppiyPnwhH49XflZ1w3XY8MPWA"
                    class="hover:underline"
                    target="_blank"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center ">
            © 2022{" "}
            <a href="/" class="hover:underline">
              Studybear
            </a>
            . All Rights Reserved.
          </span>

          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/Studybear-108417061904156"
              target="_blank"
              class="text-gray-500 hover:text-gray-900 "
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/teamstudybear/"
              target="_blank"
              class="text-gray-500 hover:text-gray-900 "
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://twitter.com/StudyBear6"
              target="_blank"
              class="text-gray-500 hover:text-gray-900 "
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Features;
