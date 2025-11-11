export const Post = ({post}) => {
    return (
        <div className="m-4 rounded-lg overflow-clip relative">
            <img src={post.image} className="w-64 h-64 object-cover"/>
            <div className="absolute top-0 right-0 m-2 px-2 bg-gray-800/70 text-white rounded-full text-sm">
                <i className="fa-regular fa-heart text-rose-400 mr-1"></i>
                {post.likes}
            </div>
        </div>
    )
}

