import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {

    const news = [
        {
            _id: 1,
            title: 'Breaking New: Sports news 1'
        },
        {
            _id: 2,
            title: 'Breaking New: Sports news 2'
        },
        {
            _id: 3,
            title: 'Breaking New: Sports news 3'
        },
        {
            _id: 4,
            title: 'Breaking New: Sports news 4'
        },
        {
            _id: 5,
            title: 'Breaking New: Sports news 5'
        },
        {
            _id: 6,
            title: 'Breaking New: Sports news 6'
        },
    ]

    return (
        <div className='flex gap-4 bg-gray-200 justify-between items-center p-4 container mx-auto'>
            <button className='btn bg-pink-900 text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
                {
                    news.map((news) => {
                        return <span className='mx-2' key={news._id}>{news.title}</span>
                    })
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;