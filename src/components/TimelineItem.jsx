import React from "react";

const TimelineItem = ({
  image,
  name,
  title,
  description,
  portfolio,
  align,
}) => {
  const isLeft = align === "left";

  return (
    <div
      className={`flex items-center w-full mb-8 timeline-item relative ${
        isLeft ? "flex-row-reverse" : ""
      }`}
    >
      <div
        className={`${
          isLeft ? "left-[49.2%] " : "right-[49.15%]"
        } top-4 absolute  h-6 hidden lg:flex justify-center items-center w-6 rounded-full bg-brown-800`}
      >
        <div className={`w-3 h-3 rounded-full bg-white`}></div>
      </div>
      <div className='w-full flex justify-center '>
        <div
          className={`relative border-4 border-white p-6 rounded-lg shadow-lg ${"bg-[#B78752]"} ${
            isLeft ? "timeline-container-right" : "timeline-container-left"
          } w-full xl:max-w-lg`}
        >
          <div className='bg-[#B78752]'>
            <div className='h-full w-full flex space-x-4'>
              <img className='sm:w-16 w-10 sm:h-16 h-10 rounded-full' src={image} alt={name} />
              <div>
                <h3 className='text-white sm:text-2xl text-lg font-bold'>{name}</h3>
                <p className='text-white sm:text-lg text-sm italic font-light'>{title}</p>
                {portfolio && <p className='text-secondary max-sm:text-sm'>{portfolio}</p>}
              </div>
            </div>
            <p className='text-white mt-6 italic font-light text-sm'>{description}</p>
          </div>
        </div>
      </div>
      <div className='lg:flex hidden w-1/2'></div>
    </div>
  );
};

export default TimelineItem;
