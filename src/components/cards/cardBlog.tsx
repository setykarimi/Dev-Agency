import { Link } from "react-router-dom"

type CardBlogProps = {
    img: string
    category?: 'DESIGN' | 'FASHION' | 'TRAVEL' | 'CREATIVE'
    title: string
    date: string
    path: string
}


const CardBlog = ({ img, category, title, date, path }: CardBlogProps) => {
    return (
        <Link to={path} className="rounded-md">
            <img src={img} alt={category} className="rounded-t-md w-full" />
            <div className="py-6 px-8 bg-background-merino rounded-b">
                <span className="w-fit block px-4 py-2 text-primary-orange-default bg-background-maize text-sm mx-auto font-semibold rounded">{category}</span>
                <span className="text-typography-graphite font-bold md:text-2xl text-xl text-center block mt-4">{title}</span>
                <span className="block text-center text-typography-flint mt-4">{date}</span>
            </div>
        </Link>
    );
}

export default CardBlog;