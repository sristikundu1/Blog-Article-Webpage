import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const RelatedNews = ({ handleCardClick }) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    return (
        <div className='max-w-4xl mx-auto'>
            <h2 className="font-bold text-4xl mb-9">Read Next</h2>

            <div className='grid grid-cols-4 gap-5 mb-24'>
                {
                    news.map(item =>
                       
                            <div className='w-52 flex flex-col'key={item.id} onClick={() => handleCardClick(item)}>
                                <img className='w-52 h-40  object-cover rounded-lg' src={item.image} alt="" />
                                <h2 className="font-bold my-5 text-xl overflow-hidden h-14">{item.title}</h2>

                                <p className="font-medium my-5 text-sm">{item.descrtiption}</p>

                                <p className="font-medium my-5 text-lg">By {item.author}</p>
                            </div>

                      
                    )
                }


            </div>

        </div>
    );
};

RelatedNews.propTypes = {
    handleCardClick: PropTypes.func.isRequired,
  
};

export default RelatedNews;