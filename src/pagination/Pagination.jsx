import { useState } from 'react'

import posts from './data/posts.jsx'
import { Post }from './components/Post.jsx'
import { PageButton } from './components/PageButton.jsx'

export const Pagination = () => {
    const [pageIdx, setPageIdx] = useState(0)
    const pageCount = Math.ceil(posts.length / 9)
    const pageMap = Array.from({length: pageCount}).map((_, idx) => <PageButton key={idx} onClick={() => setPageIdx(idx)} pageNum={idx}/>)

    const postItems = posts.slice(9 * pageIdx, 9 * (pageIdx + 1)).map((post, idx) => <Post key={idx} post={post}/>)
    return (
        <div className="flex flex-col justify-center items-center m-5" >
            <div className="w-full max-w-5xl flex flex-wrap justify-center">
                {postItems}
            </div>
            <div flex className="flex justify-center items-center">
                {pageMap}
            </div>
        </div>
    )
}