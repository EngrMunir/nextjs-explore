import getPost from '@/lib/getPost';
import getPostComments from '@/lib/getPostComment';
import React from 'react';

export async function generateMetadata({params}) {
    const { id } = params;
    const postPromise = getPost(id);
    const commentsPromise =getPostComments(id);

    const [post, comments]= await Promise.all([postPromise,commentsPromise]);
  return  {
        title: post.title,
        description: post.body,
      };
}

const PostPage = async({params}) => {
    const { id } = params;
    const post = await getPost(id)
    return (
        <div className='mt-6'>
            <h1>{post.title}</h1>
            <p className='mt-6'>{post.body}</p>
        </div>
    );
};

export default PostPage;