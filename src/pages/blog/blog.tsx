import CardBlog from "../../components/cards/cardBlog";
import Title from "../../components/title/title";
import HeroSectionBanner from "../../components/banners/heroSectionBanner";
import BannerNewsLetter from "../../components/banners/bannerNewsLetter";
import { blogs } from "../../assets/data/blogs";

const Blog = () => {
    return (
        <>
            <HeroSectionBanner title="Blog" />
            <div className="lg:container xl:px-40 px-4 mx-auto">
                <div className="text-center flex flex-col justify-center items-center md:mt-20 mt-10">
                    <Title title="Our Blogs" />
                    <p className="text-typography-flint text-lg mt-2 md:flex lg:flex-col flex-row md:whitespace-nowrap flex-wrap">
                        <span className="md:block">
                            Praesent placerated egestas egestas cras rhone
                        </span>
                        magna rutrum tellus laoreet
                    </p>
                </div>

                <div className="md:col-span-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8">
                    {blogs.map((blog) => <CardBlog path={blog.path} img={blog.img} category={blog.category == "CREATIVE" ? "CREATIVE" : blog.category == "TRAVEL" ? "TRAVEL" : blog.category == "FASHION" ? "FASHION" : "DESIGN"} title={blog.title} date={blog.date} />)}
                </div>
            </div>
            <BannerNewsLetter />
        </>
    );
}

export default Blog;