import Image from "next/image";
import Img1 from '../../../assets/serviceCost/Screenshot-151.png';
import Img2 from '../../../assets/serviceCost/Screenshot-152.png';
import Img3 from '../../../assets/serviceCost/Screenshot-153.png';
import Img4 from '../../../assets/serviceCost/Screenshot-154.png';
import Img5 from '../../../assets/serviceCost/Screenshot-155.png';
import Img6 from '../../../assets/serviceCost/Screenshot-156.png';

function ServiceCost() {
  return (
    <section>
      <div className="container mt-28 mb-20 py-4 px-6 mx-auto">
        <section className="mb-32 text-gray-800 text-center lg:text-left">
          <h2 className="text-5xl font-bold mb-12 text-center text-accent-600">
            Projects we are proud of
          </h2>

          <div className="grid lg:grid-cols-3 gap-x-6">
            <div className="mb-12 lg:mb-0">
              <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6">
              <Image
                  width={450}
                  height={450}
                  src={Img1}
                  alt="/"
                />
                <a href="#!">
                  <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
              {/* <h5 className="text-lg font-bold mb-3">Hollywood Exhibition</h5> */}
              <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center lg:justify-start">
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"
                  />
                </svg>
                UI/UX Design
              </div>
              {/* <p className="text-gray-500">
    Ut pretium ultricies dignissim. Sed sit amet mi eget urna
    placerat vulputate. Ut vulputate est non quam dignissim
    elementum. Donec a ullamcorper diam.
  </p> */}
            </div>

            <div className="mb-12 lg:mb-0">
              <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6">
              <Image
                  width={450}
                  height={450}
                  src={Img2}
                  alt="/"
                />
                <a href="#!">
                  <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>

              {/* <h5 className="text-lg font-bold mb-3">Big Apple</h5> */}
              <div className="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center lg:justify-start">
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M437.2 403.5L320 215V64h8c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h8v151L10.8 403.5C-18.5 450.6 15.3 512 70.9 512h306.2c55.7 0 89.4-61.5 60.1-108.5zM137.9 320l48.2-77.6c3.7-5.2 5.8-11.6 5.8-18.4V64h64v160c0 6.9 2.2 13.2 5.8 18.4l48.2 77.6h-172z"
                  />
                </svg>
                Food
              </div>
              {/* <p className="text-gray-500">
    Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
    orci, nec ornare metus semper sed. Integer volutpat ornare erat
    sit amet rutrum.
  </p> */}
            </div>

            <div className="mb-0">
              <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6">
              <Image
                  width={450}
                  height={450}
                  src={Img3}
                  alt="/"
                />
                <a href="#!">
                  <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>

              {/* <h5 className="text-lg font-bold mb-3">Sun City</h5> */}
              <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center lg:justify-start">
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
                  />
                </svg>
                Sweet
              </div>
              {/* <p className="text-gray-500">
    Curabitur tristique, mi a mollis sagittis, metus felis mattis
    arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
    massa volutpat feugiat. Donec.
  </p> */}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-x-6">
            <div className="mb-12 lg:mb-0">
              <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6">
              <Image
                  width={450}
                  height={450}
                 src={Img4}
                  alt="/"
                />
                <a href="#!">
                  <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
              {/* <h5 className="text-lg font-bold mb-3">Hollywood Exhibition</h5> */}
              <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center lg:justify-start">
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"
                  />
                </svg>
                Online Learning
              </div>
              {/* <p className="text-gray-500">
    Ut pretium ultricies dignissim. Sed sit amet mi eget urna
    placerat vulputate. Ut vulputate est non quam dignissim
    elementum. Donec a ullamcorper diam.
</p> */}
            </div>

            <div className="mb-12 lg:mb-0">
              <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6">
              <Image
                  width={450}
                  height={450}
                  src={Img5}
                  alt="/"
                />
                <a href="#!">
                  <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>

              {/* <h5 className="text-lg font-bold mb-3">Big Apple</h5> */}
              <div className="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center lg:justify-start">
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M437.2 403.5L320 215V64h8c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h8v151L10.8 403.5C-18.5 450.6 15.3 512 70.9 512h306.2c55.7 0 89.4-61.5 60.1-108.5zM137.9 320l48.2-77.6c3.7-5.2 5.8-11.6 5.8-18.4V64h64v160c0 6.9 2.2 13.2 5.8 18.4l48.2 77.6h-172z"
                  />
                </svg>
                Grapeslab
              </div>
              {/* <p className="text-gray-500">
    Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
    orci, nec ornare metus semper sed. Integer volutpat ornare erat
    sit amet rutrum.
  </p> */}
            </div>

            <div className="mb-0">
              <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6">
              <Image
                  width={450}
                  height={450}
                  src={Img6}
                  alt="/"
                />
                <a href="#!">
                  <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>

              {/* <h5 className="text-lg font-bold mb-3">Sun City</h5> */}
              <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center lg:justify-start">
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
                  />
                </svg>
                Market Strategy
              </div>
              {/* <p className="text-gray-500">
    Curabitur tristique, mi a mollis sagittis, metus felis mattis
    arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
    massa volutpat feugiat. Donec.
  </p> */}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default ServiceCost;