import { useState, useEffect } from "react";
import BlogList from "./BlogList";

let Home = () => {
     let [blog, setBlogs] = useState([
          {
               title: "My new website",
               body: "lorem ipsum...",
               author: "Black Panther",
               id: 1,
          },
          {
               title: "Welcome party",
               body: "lorem ipsum...",
               author: "Thor Odinson",
               id: 2,
          },
          {
               title: "Farewell party",
               body: "lorem ipsum...",
               author: "Tony Stark",
               id: 3,
          },
     ]);

     let handleDelete = (id) => {
          let newBlog = blog.filter((blog) => blog.id !== id);
          setBlogs(newBlog);
     };

     useEffect(() => {
          console.log("Run use effect");
          console.log(blog);
     }, []);

     return (
          <div className='home'>
               <BlogList
                    blog={blog}
                    title='All Blogs!'
                    handleDelete={handleDelete}
               />
          </div>
     );
};

export default Home;
