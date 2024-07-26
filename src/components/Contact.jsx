
const Contact = () => {
    return (
        <div className="contactHome relative w-full py-10 flex justify-center items-center px-4">
            <div className='absolute bg-gradient-to-t from-primary/95 to-transparent h-full w-full top-0 z-10'></div>
            <div className='absolute bg-black bg-opacity-40 h-full w-full top-0 z-20'></div>

            <div className="container z-30">
                <p className="italic text-white text-lg">If you&apos;re interested in contributing to this project or would like to discuss anything in detail, please don&apos;t hesitate to reach out to me:</p>

                <h4 className="text-white text-6xl mt-3 font-semibold">Send me an E-mail:</h4>

<form className="mt-5">


<div className="grid grid-cols-12 sm:gap-10 max-sm:space-y-10 ">

<div className="lg:col-span-3 sm:col-span-6 col-span-12">
    <label htmlFor="name" className="text-white italic">Your Name <span className="text-red-500">*</span></label>
    <input required id="name" type="text" placeholder="..." className="focus:bg-secondary focus:border-transparent w-full bg-transparent border-[1px] border-white bg-opacity-40 text-white p-3 rounded-lg mt-3 transition-colors duration-300 ease-in-out hover:bg-secondary outline-none hover:border-transparent" />
</div>
<div className="lg:col-span-3 sm:col-span-6 col-span-12">
<label htmlFor="email" className="text-white italic">Your Email Address <span className="text-red-500">*</span></label>
    <input required id="email" type="email" placeholder="..." className="focus:bg-secondary focus:border-transparent w-full bg-transparent border-[1px] border-white bg-opacity-40 text-white p-3 rounded-lg mt-3 transition-colors duration-300 ease-in-out hover:bg-secondary outline-none hover:border-transparent" />
</div>
</div>
<div className="grid grid-cols-12 sm:gap-10 max-sm:space-y-10 ">

<div className="lg:col-span-6 col-span-12 mt-5">
<label htmlFor="message" className="text-white italic">What would you like to know? <span className="text-red-500">*</span></label>

<textarea name="message" id="message" cols="30" rows="5" placeholder="Enter your message here ..." className="focus:bg-secondary focus:border-transparent w-full bg-transparent border-[1px] border-white bg-opacity-40 text-white p-3 rounded-lg mt-3 transition-colors duration-300 ease-in-out hover:bg-secondary outline-none hover:border-transparent"></textarea>

<div className="flex justify-center items-center">

<button type="submit" className="bg-primary rounded-full w-fit py-3 px-8 text-white hover:bg-[#d6833a]  text-lg transition-colors duration-300 ease-in-out capitalize font-semibold mt-5">Submit Message</button>
</div>

</div>


</div>


</form>

            </div>
        </div>
    )
}

export default Contact