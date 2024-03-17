import log from '../../../src/assets/Ellipse 2.png'
import image from '../../../src/assets/b85d9228c03a00ee5d3ac8a19f7cad913e55d973.jpg'
import image2 from '../../../src/assets/f3c616769929d5c68496199c72f2ef8c7fcff0aa.jpg'
import image3 from '../../../src/assets/25e9faf532cce1f4200b4a54631328e96dd0940b.jpg'
import image4 from '../../../src/assets/7ec9603488a12901d3cb62b256056dad78b97fff.jpg'
import image5 from '../../../src/assets/fbb0e6cd4d6da201afd75e9d442166b184bcc1f7.jpg'
import image6 from '../../../src/assets/cc36d8e933ff4856aa4f3e581ca90d206a2547aa.jpg'
import PropTypes from 'prop-types';


const imageUrls = {
    'Exciting New Tools for Designers, March 2024': {
        mainImage: image3,
        secondaryImages: image,
    },
    'Web Tech Trends to Watch in 2024 and Beyond': {
        mainImage: image4,
        secondaryImages: image2,
    },
    '6 Best AI Productivity Apps in 2024': {
        mainImage: image5,
        secondaryImages: image3,
    },
    'Surviving the Leap from College to Real-World Design': {
        mainImage: image6,
        secondaryImages: image4,
    },
};

const MainNews = ({ searchItem, clickedItem }) => {

    // const{title} = clickedItem;

    return (
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-3 my-16">
                {/* left side  */}
                <div className="col-span-2 ">


                    {searchItem.length > 0 ? (
                        // show  search items if there are search results
                        searchItem.map((item, index) => (
                            <div key={index}>
                                <span className="text-red-500 font-medium">Design</span>
                                <h2 className="font-bold text-4xl">{item}</h2>
                                <p className="font-medium my-5 text-lg">From atypical typefaces to neutral colors to unusual user<br />patterns, there are plenty of new website design trends <br /> to try this month.</p>

                                <div className='flex items-center gap-5'>
                                    <img src={log} alt="author" />
                                    <p className='text-sm'>By <span className='font-bold text-black'>PADDI MACDONNELL</span></p>
                                    <p className='text-[#414141]'>March 12, 2024</p>
                                </div>

                                <img className='w-[570px] object-cover my-7' src={imageUrls[item].mainImage} alt="mainImage" />

                                <p className="font-medium my-5 text-lg">Spring into a new website design aesthetic with some of the hottest trends of the season. Some of the things we are seeing right now are unexpected twists and takes combined with classic design styles that result in interesting and unique site designs.</p>

                                <p className="font-medium my-5 text-lg">Here&apos;s what&apos;s trending in design this month:</p>

                                <h2 className="font-bold text-4xl">1. Atypical Typefaces</h2>

                                <p className="font-medium my-5 text-lg">Forget all the same old sans serifs! Designers are making bold choices with atypical typefaces that you don&apos;t often see in website projects. What&apos;s lovely about this trend is that it pays a sort of homage to print design, where interesting type styles are more of the norm.</p>

                                <p className="font-medium my-5 text-lg">There&apos;s no set rule for choosing a different typeface, it&apos;s just ensuring that it works with the rest of your design and is readable on screens of all sizes.</p>


                                <p className="font-medium my-5 text-lg">In this design trend, we are seeing all kinds of variations from handwriting styles to simple flair with what might otherwise be a standard sans serif. In order to make it work well, these typefaces are used for display purposes and almost always paired with a simple font for the main body copy. This helps ensure readability and comprehension for users.</p>

                                <p className="font-medium my-5 text-lg">Parga uses a Greek-inspired typeface for its restaurant website design. The display is bold and interesting and helps support images that lack a ton of depth.</p>

                                <img className='w-[570px] object-cover my-7' src={imageUrls[item].secondaryImages} alt="secondaryImage" />

                                <p className="font-medium my-5 text-lg">Spring into a new website design aesthetic with some of the hottest trends of the season. Some of the things we are seeing right now are unexpected twists and takes combined with classic design styles that result in interesting and unique site designs.</p>

                                <p className="font-medium my-5 text-lg">Here&apos;s what&apos;s trending in design this month:</p>

                                <h2 className="font-bold text-4xl">Conclusion</h2>

                                <p className="font-medium my-5 text-lg">Spring into a new website design aesthetic with some of the hottest trends of the season. Some of the things we are seeing right now are unexpected twists and takes combined with classic design styles that result in interesting and unique site designs.</p>

                                <p className="font-medium my-5 text-lg">Here&apos;s what&apos;s trending in design this month:</p>
                            </div>
                        ))
                    ) :
                    clickedItem.length > 0 ? (
                        // Render search items if there are search results
                        clickedItem.map((item, index) => (
                            <div key={index}>
                                <span className="text-red-500 font-medium">Design</span>
                                <h2 className="font-bold text-4xl">{item.title}</h2>
                                <p className="font-medium my-5 text-lg">From atypical typefaces to neutral colors to unusual user<br />patterns, there are plenty of new website design trends <br /> to try this month.</p>

                                <div className='flex items-center gap-5'>
                                    <img src={log} alt="author" />
                                    <p className='text-sm'>By <span className='font-bold text-black'>{item.author}</span></p>
                                    <p className='text-[#414141]'>March 12, 2024</p>
                                </div>

                                <img className='w-[570px] object-cover my-7' src={item.image} alt="mainImage" />

                                <p className="font-medium my-5 text-lg">{item.descrtiption}</p>

                                <p className="font-medium my-5 text-lg">Here&apos;s what&apos;s trending in design this month:</p>

                                <h2 className="font-bold text-4xl">1. Atypical Typefaces</h2>

                                <p className="font-medium my-5 text-lg">Forget all the same old sans serifs! Designers are making bold choices with atypical typefaces that you don&apos;t often see in website projects. What&apos;s lovely about this trend is that it pays a sort of homage to print design, where interesting type styles are more of the norm.</p>

                                <p className="font-medium my-5 text-lg">There&apos;s no set rule for choosing a different typeface, it&apos;s just ensuring that it works with the rest of your design and is readable on screens of all sizes.</p>


                                <p className="font-medium my-5 text-lg">In this design trend, we are seeing all kinds of variations from handwriting styles to simple flair with what might otherwise be a standard sans serif. In order to make it work well, these typefaces are used for display purposes and almost always paired with a simple font for the main body copy. This helps ensure readability and comprehension for users.</p>

                                <p className="font-medium my-5 text-lg">Parga uses a Greek-inspired typeface for its restaurant website design. The display is bold and interesting and helps support images that lack a ton of depth.</p>

                                <img className='w-[570px] object-cover my-7' src={item.image2} alt="secondaryImage" />

                                <p className="font-medium my-5 text-lg">Spring into a new website design aesthetic with some of the hottest trends of the season. Some of the things we are seeing right now are unexpected twists and takes combined with classic design styles that result in interesting and unique site designs.</p>

                                <p className="font-medium my-5 text-lg">Here&apos;s what&apos;s trending in design this month:</p>

                                <h2 className="font-bold text-4xl">Conclusion</h2>

                                <p className="font-medium my-5 text-lg">Spring into a new website design aesthetic with some of the hottest trends of the season. Some of the things we are seeing right now are unexpected twists and takes combined with classic design styles that result in interesting and unique site designs.</p>

                                <p className="font-medium my-5 text-lg">Here&apos;s what&apos;s trending in design this month:</p>
                            </div>
                        ))
                    ) : (
                        // show  default content if there are no search results
                        <>
                            <span className="text-red-500 font-medium">Design</span>
                            <h2 className="font-bold text-4xl">3 Essential Design Trends, <br />
                                February 2024</h2>
                            <p className="font-medium my-5 text-lg">From atypical typefaces to neutral colors to unusual user<br />patterns, there are plenty of new website design trends <br /> to try this month.</p>

                            <div className='flex items-center gap-5'>
                                <img src={log} alt="author" />
                                <p className='text-sm'>By <span className='font-bold text-black'>Carrie Cousins</span></p>
                                <p className='text-[#414141]'>March 12, 2024</p>
                            </div>

                            <img className='w-[570px] object-cover my-7' src={image} alt="mainImage" />

                            <p className="font-medium my-5 text-lg">Spring into a new website design aesthetic with some of the hottest trends of the season. Some of the things we are seeing right now are unexpected twists and takes combined with classic design styles that result in interesting and unique site designs.</p>

                            <p className="font-medium my-5 text-lg">Here&apos;s what&apos;s trending in design this month:</p>

                            <h2 className="font-bold text-4xl">1. Atypical Typefaces</h2>

                            <p className="font-medium my-5 text-lg">Forget all the same old sans serifs! Designers are making bold choices with atypical typefaces that you don&apos;t often see in website projects. What&apos;s lovely about this trend is that it pays a sort of homage to print design, where interesting type styles are more of the norm.</p>

                            <p className="font-medium my-5 text-lg">There&apos;s no set rule for choosing a different typeface, it&apos;s just ensuring that it works with the rest of your design and is readable on screens of all sizes.</p>


                            <p className="font-medium my-5 text-lg">In this design trend, we are seeing all kinds of variations from handwriting styles to simple flair with what might otherwise be a standard sans serif. In order to make it work well, these typefaces are used for display purposes and almost always paired with a simple font for the main body copy. This helps ensure readability and comprehension for users.</p>

                            <p className="font-medium my-5 text-lg">Parga uses a Greek-inspired typeface for its restaurant website design. The display is bold and interesting and helps support images that lack a ton of depth.</p>

                            <img className='w-[570px] object-cover my-7' src={image2} alt="secondaryImage" />

                            <p className="font-medium my-5 text-lg">Spring into a new website design aesthetic with some of the hottest trends of the season. Some of the things we are seeing right now are unexpected twists and takes combined with classic design styles that result in interesting and unique site designs.</p>

                            <p className="font-medium my-5 text-lg">Here&apos;s what&apos;s trending in design this month:</p>

                            <h2 className="font-bold text-4xl">Conclusion</h2>

                            <p className="font-medium my-5 text-lg">Spring into a new website design aesthetic with some of the hottest trends of the season. Some of the things we are seeing right now are unexpected twists and takes combined with classic design styles that result in interesting and unique site designs.</p>

                            <p className="font-medium my-5 text-lg">Here&apos;s what&apos;s trending in design this month:</p>
                        </>
                    )}


                </div>

                {/* right side  */}
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

                            <div className="relative">
                                <input
                                    className="border-b-[1px] mb-8 border-[#949392] text-[#949392] bg-[#E5E5E3] w-full pl-14"
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder=" Mobile Number*"
                                />
                                <span className="absolute text-black right-56 font-medium">+880</span>

                            </div>

                            <label className="form-control w-full mt-6">
                                <div className="label">
                                    <span className="label-text text-[#949392] text-base">Your Preferred Study Course*</span>
                                </div>
                                <select className=" border-b-[1px] mb-8 border-[#949392]  bg-[#E5E5E3] w-full text-black">
                                    <option disabled selected>Please Select</option>
                                    <option>Star Wars</option>
                                    <option>Harry Potter</option>
                                    <option>Lord of the Rings</option>
                                    <option>Planet of the Apes</option>
                                    <option>Star Trek</option>
                                </select>

                            </label>

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-[#949392] text-base">When do You Plan to Study?*</span>
                                </div>
                                <select className=" border-b-[1px] mb-8 border-[#949392]  bg-[#E5E5E3] w-full text-black">
                                    <option disabled selected>Please Select</option>
                                    <option>Star Wars</option>
                                    <option>Harry Potter</option>
                                    <option>Lord of the Rings</option>
                                    <option>Planet of the Apes</option>
                                    <option>Star Trek</option>
                                </select>

                            </label>


                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-[#949392] text-base">Nearest SG Office*</span>
                                </div>
                                <select className=" border-b-[1px] mb-8 border-[#949392]  bg-[#E5E5E3] w-full text-black">
                                    <option disabled selected>Please Select</option>
                                    <option>Star Wars</option>
                                    <option>Harry Potter</option>
                                    <option>Lord of the Rings</option>
                                    <option>Planet of the Apes</option>
                                    <option>Star Trek</option>
                                </select>

                            </label>

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-[#949392] text-base">How Would You Fund  Your Course?*</span>
                                </div>
                                <select className=" border-b-[1px] mb-8 border-[#949392]  bg-[#E5E5E3] w-full text-black">
                                    <option disabled selected>Please Select</option>
                                    <option>Star Wars</option>
                                    <option>Harry Potter</option>
                                    <option>Lord of the Rings</option>
                                    <option>Planet of the Apes</option>
                                    <option>Star Trek</option>
                                </select>

                            </label>

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-[#949392] text-base">Preferred Study Level*</span>
                                </div>
                                <select className=" border-b-[1px] mb-8 border-[#949392]  bg-[#E5E5E3] w-full text-black">
                                    <option disabled selected>Please Select</option>
                                    <option>Star Wars</option>
                                    <option>Harry Potter</option>
                                    <option>Lord of the Rings</option>
                                    <option>Planet of the Apes</option>
                                    <option>Star Trek</option>
                                </select>

                            </label>


                            <p className="text-black mb-5">SG will not share your details with others  without your permission:</p>

                            <div>
                                <input type="checkbox" id="termsAgreement" name="termsAgreement" />
                                <label className="text-sm ml-2 font-medium" htmlFor="termsAgreement">I agree to SG Terms and Privacy Policy</label>
                            </div>

                            <div className="my-5">
                                <input type="checkbox" id="termsAgreement" name="termsAgreement" />
                                <label className="text-sm ml-2 font-medium" htmlFor="termsAgreement">Please contact me by phone, email or SMS to assist with my enquiry</label>
                            </div>

                            <div>
                                <input type="checkbox" id="termsAgreement" name="termsAgreement" />
                                <label className="text-sm ml-2 font-medium" htmlFor="termsAgreement">I would like to receive updates and offers from IDP</label>
                            </div>

                            <button className="btn text-white rounded-lg w-full bg-[#FF3D00] font-medium mt-7">Help Me Study UX</button>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    );
};

MainNews.propTypes = {
    searchItem: PropTypes.array.isRequired,
    clickedItem: PropTypes.array.isRequired,
};

export default MainNews;