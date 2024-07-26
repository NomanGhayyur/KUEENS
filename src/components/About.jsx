import aboutBg from "../assets/about-sample.png"
const About = () => {
  return (
    <div className='bg-[#291235] min-h-screen w-full flex justify-center items-center py-8'>
      <div className="container max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 justify-items-center items-center gap-10 px-4">
        <div className="lg:col-span-6 col-span-9 rounded-3xl relative">
          <img src={aboutBg} alt="about-bg" className='w-full h-full rounded-3xl object-contain' />
          <div className="absolute bottom-0 text-white font-bold p-3 w-full">
            <h4 className='sm:text-4xl text-2xl'>ANIME GIRLS TURNED MUSIC PERSONALITIES:</h4>
            <h4 className='sm:text-4xl text-2xl mt-3'>Soon to be part of the greatest DAW the world will ever experience!</h4>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-9 text-white">
          <h1 className='font-bold sm:text-5xl text-3xl'>
            Krowned Kueens (KK) is a closed-source Digital Audio Workstation (DAW). It can be toggled to function as a rhythm video game with online and offline functionality. It will also contain a community known as the Krowned Kueens Network (KKN) that one can register an account for to interact with fellow members.
          </h1>
          <p className='mt-4 sm:text-xl text-base'>
            What would distinguish this DAW from others is that it will feature interactive 3D models of instrument-bearing anime-esque characters that the AI—at the discretion of the user—could use to craft an original audio dataset in real-time.
          </p>
          <p className='mt-2 sm:text-xl text-base'>
            The KK software’s DAW will utilize deep learning technology for audio classification—which would help users create original audio from scratch, or modify existing audio datasets (e.g., MP3/WAV files) that can be uploaded to the software.
          </p>
        </div>
      </div>
    </div>

  )
}

export default About