

const OverView = () => {
    return (
        <div className="my-10 lg:max-w-4xl mx-auto" data-aos="fade-up"
        data-aos-duration="3000">
             <h2 className="font-bold text-4xl mb-9 pl-16 md:pl-14 lg:pl-0">Overview</h2>
            <div className="px-14 flex flex-col lg:flex-row gap-5 justify-between items-center lg:px-0">
                <img data-aos="flip-up"data-aos-duration="3000" className="object-cover w-[460px]" src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/EBREWCGTTZAVPDX3OE5ORZAZ7A.gif" alt="image" />
                <div>
                    <p className="font-medium my-5 text-lg">Shabuj Global Education is an enlisted professional student consultancy firm, approved by the British Council. It specialises in academic counselling, course placement, and internal student recruitment. It has been working with universities from around the world to find the right UK course placements since 2010. Shabuj Global helps its customers find undergraduate, postgraduate, and foundation courses, and also aids MBA and MSc students.</p>
                </div>
            </div>

        </div>
    );
};

export default OverView;