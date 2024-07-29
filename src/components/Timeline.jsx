import React from "react";
import TimelineItem from "./TimelineItem";
import team1 from "../assets/team1.jpeg";
import team2 from "../assets/team2.jpeg";
import team4 from "../assets/team4.jpeg";
import team5 from "../assets/team5.png";
import team6 from "../assets/team6.png";
import team7 from "../assets/team7.jpeg";
import team8 from "../assets/team8.png";
import team9 from "../assets/team9.png";
import team10 from "../assets/team10.png";
import team11 from "../assets/team11.png";
import team12 from "../assets/team12.png";
import team13 from "../assets/team13.jpeg";

const Timeline = () => {
  const items = [
    {
      image: team1,
      name: 'Princelawrenz "Prince" Hamlin',
      title: "Project Lead/Director/Coordinator",
      description:
        "Started work on the BLEACH: Krowned Kueens Music Project on May 17, 2022.",
      color: "bg-[#D18B3F]",
    },
    {
      image: team2,
      name: "Ricky Victome",
      title: "Graphic Artist/Designer",
      description:
        "Has been a member of the Krowned Kueens Project since September 13, 2023.",
      portfolio: "| PERSONAL PORTFOLIO",
      color: "bg-[#C4804E]",
    },
    {
      image: "rickyImage.png",
      name: 'John "Illa" Suarez',
      title: "Graphics Artist/Designer",
      description:
        "Has been a member of the Krowned Kueens Project since September 26, 2023.",
      portfolio: "| PERSONAL PORTFOLIO",
      color: "bg-[#C4804E]",
    },
    {
      image: team4,
      name: "Hawk Eye",
      title: "Graphics Artist/Animator/After Effects Specialist",
      description:
        "Has been a member of the Krowned Kueens Project since April 5, 2024.",
      color: "bg-[#C4804E]",
    },
    {
      image: team5,
      name: "Icarheus",
      title: "Graphics Artist/Animator",
      description:
        "Has been a member of the Krowned Kueens Project since February 12, 2024.",
      color: "bg-[#C4804E]",
    },
    {
      image: team6,
      name: 'Tomas "Curco" Sosto',
      title: "3D Artist",
      description:
        "Has been a member of the Krowned Kueens Project since April 14, 2024.",
      portfolio: "| PERSONAL PORTFOLIO",
      color: "bg-[#C4804E]",
    },
    {
      image: team7,
      name: 'Jovan "JoTheFro" Desir',
      title: "Sprite/Pixel Artist",
      description:
        "Has been a member of the Krowned Kueens Project since April 11, 2024.",
      color: "bg-[#C4804E]",
    },
    {
      image: team8,
      name: "Kleymir_",
      title: "3D Artist",
      description:
        "Has been a member of the Krowned Kueens Project since April 11, 2024.",
      portfolio: "| PERSONAL PORTFOLIO",
      color: "bg-[#C4804E]",
    },
    {
      image: team9,
      name: "Athena Michael",
      title: "Graphics Artist",
      description:
        "Has been a member of the Krowned Kueens Project since March 19, 2024.",
      color: "bg-[#C4804E]",
    },
    {
      image: team10,
      name: "ImCertiBTW",
      title: "AI Voice Model Maker",
      description:
        "Has been a member of the Krowned Kueens Project since January 11, 2024.",
      color: "bg-[#C4804E]",
    },
    {
      image: team11,
      name: "Ubaid Qamar",
      title: "Software Developer",
      description:
        "Has been a member of the Krowned Kueens Project since July 2, 2024.",
      color: "bg-[#C4804E]",
    },
    {
      image: team12,
      name: "YOD",
      title: "Co-Web Designer",
      description:
        "Has been a member of the Krowned Kueens Project since March 25, 2024.",
      color: "bg-[#C4804E]",
    },
    {
      image: team13,
      name: "Alex Hero",
      title: "Manga Artist",
      description:
        "Has been a member of the Krowned Kueens Project since June 13, 2024.",
      portfolio: "| PERSONAL PORTFOLIO",
      color: "bg-[#C4804E]",
    },
  ];

  return (
    <div className='bg-[#704D45] min-h-screen py-16 flex justify-center items-center flex-col'>
      <div className='lg:mb-24 mb-10 lg:mt-8 mt-3 text-white text-center'>
        <p className='font-italic text-sm'>
          The people who are bringing this project together
        </p>
        <h4 className='md:text-5xl text-4xl font-semibold'>Meet the Team:</h4>
      </div>

      <div className='relative w-3/4'>
        <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-white hidden lg:flex'></div>
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            align={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
