import React from 'react'
import Box from './Box'
import posts from '../Data/Posts'

const PhotographyContent = () => {
    return (
        <div>
            {posts
                .filter((posts) => posts.id == 1 || posts.id == 3 || posts.id == 5 || posts.id == 7 || posts.id == 8 || posts.id == 14 || posts.id == 15 || posts.id == 16 || posts.id == 17 )
                .map((posts) => (
                    <Box
                        image={posts.image}
                        heading={posts.heading}
                        text={posts.content}
                        key={posts.id} />
                ))}
        </div>
    )
}

export default PhotographyContent