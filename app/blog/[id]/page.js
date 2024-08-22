import React from 'react';

const BlogPage = ({params}) => {
    const { id } = params;
    return (
        <div className='mt-6'>
            Blog Id: {id}
        </div>
    );
};

export default BlogPage;