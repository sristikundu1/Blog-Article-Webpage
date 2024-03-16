import image1 from '../../../src/assets/25e9faf532cce1f4200b4a54631328e96dd0940b.jpg'
import image2 from '../../../src/assets/7ec9603488a12901d3cb62b256056dad78b97fff.jpg'
import image3 from '../../../src/assets/fbb0e6cd4d6da201afd75e9d442166b184bcc1f7.jpg'
import image4 from '../../../src/assets/cc36d8e933ff4856aa4f3e581ca90d206a2547aa.jpg'

const RelatedNews = () => {
    return (
        <div className='max-w-4xl mx-auto'>
            <h2 className="font-bold text-4xl mb-9">Read Next</h2>

            <div className='flex justify-between items-center mb-24'>
                <div className='w-52'>
                    <img className='w-52 h-40  object-cover rounded-lg' src={image1} alt="" />
                    <h2 className="font-bold my-5 text-xl">Exciting New Tools for Designers</h2>

                    <p className="font-medium my-5 text-sm">The fast-paced world of design never stops turning, and staying ahead of the curve is essential for creatives. As…</p>

                    <p className="font-medium my-5 text-lg">By PADDI MACDONNELL</p>
                </div>


                <div className='w-52'>
                    <img className='w-52 h-40 object-cover rounded-lg' src={image2} alt="" />
                    <h2 className="font-bold text-xl">Web Tech Trends to Watch in 2024 and Beyond</h2>

                    <p className="font-medium my-5 text-sm">The fast-paced world of design never stops turning, and staying ahead of the curve is essential for creatives. As…</p>

                    <p className="font-medium my-5 text-lg">By PADDI MACDONNELL</p>
                </div>


                <div className='w-52'>
                <img className='w-52 h-40 object-cover rounded-lg' src={image3} alt="" />
                    <h2 className="font-bold my-5 text-xl">6 Best AI Productivity Apps in 2024</h2>

                    <p className="font-medium my-5 text-sm">The fast-paced world of design never stops turning, and staying ahead of the curve is essential for creatives. As…</p>

                    <p className="font-medium my-5 text-lg">By PADDI MACDONNELL</p>
                </div>

                <div className='w-52'>
                <img className='w-52 h-40 object-cover rounded-lg' src={image4} alt="" /> 
                    <h2 className="font-bold  text-xl">Surviving the Leap from College to Real-World Design</h2>

                    <p className="font-medium my-5 text-sm">The fast-paced world of design never stops turning, and staying ahead of the curve is essential for creatives. As…</p>

                    <p className="font-medium my-5 text-lg">By PADDI MACDONNELL</p>
                </div>

            </div>

        </div>
    );
};

export default RelatedNews;