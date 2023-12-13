import { useState, useEffect, useRef } from 'react';

const servicesDB = [
  {
    id: 1,
    title: 'Short form videos',
    description:
      'We produce highly engaging short form videos for your social media that are optimized for Tiktok, Instagram Reels and Youtube shorts.',
    image: '/images/videoEditing.jpeg',
  },
  {
    id: 2,
    title: 'Long form videos',
    description:
      'We specialize in applying algorithm friendly techniques to edit high quality long form videos for YouTube, Facebook and Linkedin so that you can build your own dedicated community online.',
    image: '/images/growth.jpeg',
  },
  {
    id: 3,
    title: 'Podcasts',
    description:
      'We help you bring your candid conversations to life with our editing. We specialize in both video and audio podcasts and assist you in creating a brand of your conversations. We also edit your podcasts into engaging short form content bits that can make your conversations go viral on Tiktok, Instagram and YouTube.',
    image: '/images/management.jpeg',
  },
  {
    id: 4,
    title: 'Promos and advertisement',
    description:
      'We create video promos and Ads for your upcoming launches so that you can generate interest for your product online and get new potential customers.',
    image: '/images/consultation.jpeg',
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
            <h2 className="text-8xl font-light mb-6">What we offer</h2>
            <p className="text-3xl">
              We edit videos that are optimized for each specific social media
              platform. Here are the types of videos that we specialize in:
            </p>
          </div>
          <div>
            {servicesDB.map((service) => (
              <div key={service.id} className="m-0 p-0">
                <div className="flex flex-row items-center justify-between border-t	 border-dotted border-slate-400 transition duration-200 ease-in-out hover:bg-[#cccccc]">
                  <div
                    style={{
                      fontWeight:
                        service.title === selectedTitle ? 'normal' : 'lighter',
                    }}
                    className="mx-4 text-7xl md:text-4xl">
                    {service.title}
                  </div>
                  <div className="m-6 flex items-center justify-center">
                    <button
                      onClick={() => {
                        setSelectedImage(service.image);
                        setSelectedDescription(service.description);
                        setSelectedTitle(service.title);
                      }}
                      className="flex h-16 w-16 items-center justify-center rounded-full border bg-black p-4 transition duration-100 ease-out hover:scale-110 hover:border-purple-800 hover:bg-purple-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512">
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
            backgroundImage: loadedImage ? `url(${loadedImage})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)',
            opacity: opacity,
            transition: 'opacity 1s',
          }}
          className="basis-1/2 rounded-3xl bg-slate-300">
          <div className="flex h-full w-full bg-black/30 backdrop-blur-sm">
            <div className="m-6 flex flex-col justify-between p-6 text-white">
              <h2 className="text-6xl font-light">{selectedTitle}</h2>
              <p className="text-4xl">{selectedDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
