import { useState, useEffect, useRef } from "react";

const servicesDB = [
  {
    id: 1,
    title: "Video Editing",
    description:
      "We produce highly engaging videos for your social media. Ranging from Short form content for TikTok, Instagram Reels and YouTube shorts to long form videos for YouTube, Linkedin and Facebook, all our videos are optimized for each platform's algorithm.",
    image: "/images/videoEditing.jpeg",
  },
  {
    id: 2,
    title: "Social Media Growth",
    description:
      "We help grow your social media following by applying algorithm friendly strategies. We monitor your CTR, view count and interactions to make sure that we stay on track to not only go viral but create a dedicated community online.",
    image: "/images/growth.jpeg",
  },
  {
    id: 3,
    title: "Social Media Management",
    description:
      "We handle your social media accounts so that your content can be scheduled, uploaded and optimized according to what works best for each platform without you having to worry about the right time to upload.",
    image: "/images/management.jpeg",
  },
  {
    id: 4,
    title: "One on One Consultation",
    description:
      "We provide one on one consultation sessions to help you identify the areas where your content can be improved and figure out ways to reach a wider audience. We also formulate ideas for you that could potentially help you go viral.",
    image: "/images/consultation.jpeg",
  },
];

const Services = () => {
  const [selectedImage, setSelectedImage] = useState(servicesDB[0].image);
  const [selectedTitle, setSelectedTitle] = useState(servicesDB[0].title);
  const [selectedDescription, setSelectedDescription] = useState(
    servicesDB[0].description
  );
  const [loadedImage, setLoadedImage] = useState(null);
  const [opacity, setOpacity] = useState(0);
  const imageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLoadedImage(selectedImage);
          setOpacity(1);
          observer.disconnect();
        }
      });
    });

    observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, [selectedImage]);

  return (
    <div className="flex h-screen w-screen flex-row items-center justify-center bg-slate-50">
      <div className="flex h-5/6 w-11/12 flex-col rounded-3xl bg-[#dcdcdc] shadow-2xl md:h-5/6 md:flex-row">
        <div className="m-6 flex basis-1/2 flex-col justify-between p-6">
          <div>
            <h2 className="text-8xl font-light">What we offer</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur <br />
              adipisicing elit.Inventore laudantium minus <br />
              officia ullam.
            </p>
          </div>
          <div>
            {servicesDB.map((service) => (
              <div key={service.id} className="m-0 p-0">
                <div className="flex flex-row items-center justify-between border-t	 border-dotted border-slate-400 transition duration-200 ease-in-out hover:bg-[#cccccc]">
                  <div
                    style={{
                      fontWeight:
                        service.title === selectedTitle ? "normal" : "lighter",
                    }}
                    className="mx-4 text-7xl md:text-4xl"
                  >
                    {service.title}
                  </div>
                  <div className="m-6 flex items-center justify-center">
                    <button
                      onClick={() => {
                        setSelectedImage(service.image);
                        setSelectedDescription(service.description);
                        setSelectedTitle(service.title);
                      }}
                      className="flex h-16 w-16 items-center justify-center rounded-full border bg-black p-4 transition duration-100 ease-out hover:scale-110 hover:border-purple-800 hover:bg-purple-800"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="white"
                          d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          ref={imageRef}
          style={{
            backgroundImage: loadedImage ? `url(${loadedImage})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%)",
            opacity: opacity,
            transition: "opacity 1s",
          }}
          className="basis-1/2 rounded-3xl bg-slate-300"
        >
          <div className="flex h-full w-full bg-black/30 backdrop-blur-sm">
            <div className="m-6 flex flex-col justify-between p-6 text-white">
              <h2 className="text-6xl font-light">{selectedTitle}</h2>
              <p>{selectedDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
