import { useParams } from "react-router-dom"

const Blog = () => {

  const { blogid } = useParams();

    return <h3>Blog details for {blogid}</h3>;
  };
  
  export default Blog;
  