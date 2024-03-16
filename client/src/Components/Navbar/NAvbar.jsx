import { IoSearchSharp } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import { PiArrowCircleRight } from "react-icons/pi";
import { useState } from "react";


const NAvbar = () => {
    const [inputValue, setInputValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestions, setSuggestions] = useState(['Exciting New Tools for Designers, March 2024', 'Web Tech Trends to Watch in 2024 and Beyond', '6 Best AI Productivity Apps in 2024', 'Exciting New Tools for Designers, March 2024']); // Example suggestions
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

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
        // Do something when an item is clicked, such as filling the input field with the clicked suggestion
        setInputValue(suggestions[index]);
    };

    const handleFixedItemClick = (text) => {
        // Do something when a fixed item is clicked
        setInputValue(text);
    };

    return (
        <div className="bg-[#000000]">
            <div>
                <ul className="flex items-center justify-center gap-6 py-5 text-[#bebdbd] text-xs font-medium">
                    <li>Study abroad</li>
                    <li>What we do?</li>
                    <li>Destinations</li>
                    <li>Find a course</li>
                    <li>Student Essential Services</li>
                    <li>IELTS</li>

                    {/* The icon to open modal  */}
                    <li onClick={() => document.getElementById('my_modal_2').showModal()} className="text-lg"><IoSearchSharp /></li>
                </ul>

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


                        <PiArrowCircleRight className=" text-4xl ml-[425px] mt-44" />


                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>

                {/* <MainNews searchInput={inputValue} /> */}
            </div>

        </div >
    );
};

export default NAvbar;