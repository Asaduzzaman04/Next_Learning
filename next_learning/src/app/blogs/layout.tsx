import Link from "next/link";

const BlogsLayout = ({ children }) => {
  return (
    <div>
      <button className="hover:scale-105 transition-all duration-200 ease-linear ml-10 px-4 py-1 mt-10 bg-blue-900 text-white font-semibold text-xl rounded-md capitalize">
        <Link href="/blogs/myblogs"> my blogs</Link>
      </button>
      {children}
    </div>
  );
};

export default BlogsLayout;
