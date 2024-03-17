import { IoSearchSharp } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
// import { PiArrowCircleRight } from "react-icons/pi";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const NAvbar = ({ handleShowSearch }) => {
    const [inputValue, setInputValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    const [suggestions, setSuggestions] = useState([
        'Exciting New Tools for Designers, March 2024',
        'Web Tech Trends to Watch in 2024 and Beyond',
        '6 Best AI Productivity Apps in 2024',
        'Surviving the Leap from College to Real-World Design']);

    const [selectedItemIndex, setSelectedItemIndex] = useState(null);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [infos, setinfos] = useState([]);


    useEffect(() => {
        fetch('/navdata.json')
            .then(res => res.json())
            .then(data => setinfos(data.categories))
    }, [])


    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        setShowSuggestions(true); // Show suggestions when typing
    };

    const handleInputClick = () => {
        setShowSuggestions(true); // Show suggestions when input field is clicked
    };

    const handleItemClick = (index) => {
        setSelectedItemIndex(index);
        handleShowSearch(suggestions[index]);
        // Do something when an item is clicked, such as filling the input field with the clicked suggestion
        setInputValue(suggestions[index]);
    };

    const handleFixedItemClick = (text) => {
        // Do something when a fixed item is clicked
        setInputValue(text);
    };

    const handleItemHover = (item) => {
        // Access data from 'infos' based on the hovered item
        const category = infos.find(category => category.name === item);
        if (category) {
            // Set the hovered item along with additional data from the fetched JSON
            setHoveredItem(category);
        }
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };







    return (
        <div className="bg-[#000000] relative">
            <div>
                <ul className="flex items-center justify-center gap-6  text-[#bebdbd] text-xs font-medium">
                    <li className=" hover:bg-[#E0561B] hover:text-white px-2 py-5 " onMouseEnter={() => handleItemHover("Study abroad")} onMouseLeave={handleMouseLeave}>Study abroad</li>
                    <li className=" hover:bg-[#E0561B] hover:text-white  px-2 py-5" onMouseEnter={() => handleItemHover("What we do?")} onMouseLeave={handleMouseLeave}>What we do?</li>
                    <li className=" hover:bg-[#E0561B] hover:text-white  px-2 py-5" onMouseEnter={() => handleItemHover("Destinations")} onMouseLeave={handleMouseLeave}>Destinations</li>
                    <li className=" hover:bg-[#E0561B] hover:text-white  px-2 py-5" onMouseEnter={() => handleItemHover("Find a course")} onMouseLeave={handleMouseLeave}>Find a course</li>
                    <li className=" hover:bg-[#E0561B] hover:text-white  px-2 py-5" onMouseEnter={() => handleItemHover("Student Essential Services")} onMouseLeave={handleMouseLeave}>Student Essential Services</li>
                    <li className=" hover:bg-[#E0561B] hover:text-white  px-2 py-5" onMouseEnter={() => handleItemHover("IELTS")} onMouseLeave={handleMouseLeave}>IELTS</li>

                    {/* The icon to open modal  */}
                    <li onClick={() => document.getElementById('my_modal_2').showModal()} className="text-lg hover:bg-[#E0561B] hover:text-white  px-2 py-5"><IoSearchSharp /></li>
                </ul>
                <div className="absolute top-16 left-44">
                    {hoveredItem && (
                        <div className="card bg-white w-[980px] border px-10 py-10 shadow-2xl">
                            <h2 className="font-bold text-lg">{hoveredItem.title}</h2>

                            <div className="flex gap-5 mb-8">
                                <div>
                                    <div className="image-container grid grid-cols-3 gap-5 mt-8">
                                        {hoveredItem.imageUrls.map((image, index) => (
                                            // <h2 key={index} >{image}</h2>
                                            <img className="rounded-lg object-cover h-44 w-56" key={index} src={image} alt="image" />
                                        ))}
                                    </div>

                                    <div className="title-container grid grid-cols-3 gap-5 mt-8">
                                        {hoveredItem.titles.map((title, index) => (
                                            <h2 className="font-medium " key={index} >{title}</h2>

                                        ))}
                                    </div>
                                </div>

                                <div className="title-container mt-8 flex flex-col gap-3">
                                    {hoveredItem.shortHeadings.map((shortHeading, index) => (
                                        <h2 className="font-medium " key={index} >{shortHeading}</h2>

                                    ))}
                                </div>
                            </div>
                            {/* Additional content related to the hovered item */}
                        </div>
                    )}
                </div>

                {/* Open the modal using document.getElementById('ID').showModal() method */}

                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <ul className="flex items-center bg-[#D9D9D9] w-full h-24 py-5 px-5 justify-between rounded-t-lg border-t-2">
                            <li onClick={() => handleFixedItemClick('Search for Blogs')} className={`cursor-pointer ${selectedItemIndex === -1 ? 'bg-gray-100' : ''}`}>Search for <br /> Blogs</li>
                            <li onClick={() => handleFixedItemClick('Find an University')} className={`cursor-pointer ${selectedItemIndex === -2 ? 'bg-gray-100' : ''}`}>Find an <br /> University</li>
                            <li onClick={() => handleFixedItemClick('Find a Scholarship')} className={`cursor-pointer ${selectedItemIndex === -3 ? 'bg-gray-100' : ''}`}>Find a <br /> Scholarship</li>
                            <li onClick={() => handleFixedItemClick('Events')} className={`cursor-pointer ${selectedItemIndex === -4 ? 'bg-gray-100' : ''}`}>Events</li>
                        </ul>
                        <div className="flex items-center justify-start my-10 relative">

                            <input className=" border-b-2 w-full pl-7  pb-2 text-xl" type="text" name="" id="" placeholder="Search keywords "
                                value={inputValue}
                                onChange={handleInputChange}
                                onClick={handleInputClick} />
                            <RiSearchLine className="absolute bottom-3 text-xl" />

                        </div>

                        {showSuggestions && (
                            <ul className="absolute z-10 bg-white flex flex-col text-[#999999] top-[200px] pb-10">
                                {suggestions.map((suggestion, index) => (
                                    <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleItemClick(index)}>{suggestion}</li>
                                ))}
                            </ul>
                        )}


                        {/* <PiArrowCircleRight
                        onClick={() => handleShowSearch(inputValue)}
                         className=" text-4xl ml-[425px] mt-44" /> */}


                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>


            </div>

        </div >
    );
};

NAvbar.propTypes = {
    handleShowSearch: PropTypes.func.isRequired,
};

export default NAvbar;