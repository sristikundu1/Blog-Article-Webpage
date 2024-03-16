

const MainNews = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-3 my-16">
                <div className="col-span-2 border border-black">
                    <h2>news</h2>

                </div>

                <div className="col-span-1  ">
                    <div className="bg-[#1C66D7] rounded-t-lg ">
                        <div className=" text-white px-5 py-3">
                            <h2 className="font-medium text-xl">Interested in studying UX?</h2>
                            <p className="text-sm">SG can help  &#8211; fill in your details <br /> and we&apos;ll call you back.</p>

                        </div>
                    </div>

                    <div className="bg-[#E5E5E3]">
                        <div className="px-3 py-6">
                            <input className=" border-b-[1px] mb-8 border-[#949392] text-[#949392] bg-[#E5E5E3] w-full" type="text" name="" id="" placeholder="First Name* " />

                            <input className=" border-b-[1px] mb-8 border-[#949392] text-[#949392] bg-[#E5E5E3] w-full" type="text" name="" id="" placeholder="Last Name* " />

                            <input className=" border-b-[1px] mb-8 border-[#949392] text-[#949392] bg-[#E5E5E3] w-full" type="email" name="" id="" placeholder="Email Address*" />

                            <input className=" border-b-[1px] mb-8 border-[#949392] text-[#949392] bg-[#E5E5E3] w-full" type="email" name="" id="" placeholder="Mobile Number*" />

                            <input className=" border-b-[1px] mb-8 border-[#949392] text-[#949392] bg-[#E5E5E3] w-full" type="email" name="" id="" placeholder="Mobile Number*" />
                            
                            <input className=" border-b-[1px] mb-8 border-[#949392] text-[#949392] bg-[#E5E5E3] w-full" type="email" name="" id="" placeholder="Mobile Number*" />
                        </div>

                    </div>

                </div>


            </div>

        </div>
    );
};

export default MainNews;