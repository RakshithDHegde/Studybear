import Logo from "../LandingPage/Logo";
import "../LandingPage/Features.css";
const About = () => {
  return (
    <>
      <div className="absolute bg-black h-3/4 w-full  ">
        <div className="flex">
          <h1 className=" ml-6 mt-10 font-medium text-5xl inline-flex text-white font-sans">
            About us
          </h1>
          <div className=" ml-2 mt-6">
            <a href="/">
              <Logo className="ml-6 mt-10" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-white text-xl mt-16 ml-7">
              At Studybear, we aspire to change the path one takes to be an
              engineer. We aim to provide a platform to upload and read
              notes...We also provide students with daily tech news,circulars
              and also help them in connecting with teachers.Students who upload
              their notes would be given Goodies and vouchers as a token of
              Gratitude.We aim in making a enginnering's student life easy.
            </h1>
          </div>
        </div>
      </div>

      <div className="flex relative top-96 text-center   justify-center my-20 mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-80 mx-auto grid-cols-1 text-center justify-center">
          <div class="container mx-auto">
            <div class="card">
              <div class="imgBx">
                <img
                  className="mx-auto -z-50"
                  src="https://i.ibb.co/k3w74vD/rakshith-min.png"
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
                          src="https://i.ibb.co/p3SJYZN/baed96e75b970d18230eddea2ea76a36.png"
                          className="h-20 w-20 object-contain"
                        ></img>
                      </button>
                    </form>
                  </div>
                  <form action="https://wa.me/916362497977" target="_blank">
                    <button type="submit">
                      <img
                        src="https://i.ibb.co/k97MbXj/whatsapp.png"
                        className="h-10 w-20 object-contain"
                      ></img>
                    </button>
                  </form>
                  <form
                    action="https://www.linkedin.com/in/rakshith-hegde-74ab3a226"
                    target="_blank"
                  >
                    <button>
                      <img
                        src="https://i.ibb.co/nR2D5j9/linkedin-min.png"
                        className="h-10 w-20 object-contain"
                      ></img>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="container mx-auto">
            <div class="card">
              <div class="imgBx z-0">
                <img
                  className="mx-auto -z-50"
                  src="https://i.ibb.co/NLMXRBN/sandeep-min.png"
                />
              </div>
              <div class="contentBx">
                <h2 className="text-slate-700">Sandeep Kamath</h2>
                <h3>Android developer</h3>
                <div className="size">
                  <div className>
                    <form
                      action="https://www.instagram.com/_msandeep_kamath_/"
                      target="_blank"
                    >
                      <button>
                        <img
                          src="https://i.ibb.co/p3SJYZN/baed96e75b970d18230eddea2ea76a36.png"
                          className="h-20 w-20 object-contain -z-10"
                        ></img>
                      </button>
                    </form>
                  </div>
                  <form action="https://wa.me/918618743756" target="_blank">
                    <button type="submit">
                      <img
                        src="https://i.ibb.co/k97MbXj/whatsapp.png"
                        className="h-10 w-20 object-contain -z-10"
                      ></img>
                    </button>
                  </form>
                  <form
                    action="https://www.linkedin.com/in/m-s-sandeep-kamath-296913233"
                    target="_blank"
                  >
                    <button>
                      <img
                        src="https://i.ibb.co/nR2D5j9/linkedin-min.png"
                        className="h-10 w-20 object-contain"
                      ></img>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;