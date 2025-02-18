/* eslint-disable react/prop-types */


const BlogCard = ({blog}) => {
    return (
        <div className="shadow-xl shadow-btns md:border-r-8 border-btns md:pr-3">
            <div
              key={blog.id}
              className="flex flex-col md:flex-row items-center  md:gap-8 "
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-48 md:min-h-96 md:h-96"
              />
              <div className="p-6 md:p-0 space-y-5">
               
                {/* Title */}
                <h3 className="md:text-4xl font-bold">{blog.title}</h3>
                {/* Description */}
                <p className="md:text-xl">
                  {blog.description}
                </p>
              </div>
            </div>
        </div>
    );
};

export default BlogCard;