import posts from './data/posts.jsx'
import { Post }from './components/Post.jsx'

export const Pagination = () => {
    const postItems = posts.map((post, idx) => <Post key={idx} post={post}/>)
    return (
        <div className="flex justify-center" >
            <div className="border border-black w-full w-full max-w-5xl flex flex-wrap">
                {postItems}
            </div>
        </div>
    )
}