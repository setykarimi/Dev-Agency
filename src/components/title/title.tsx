type TitleProps = {
    title: StringConstructor
}
const Title = ({title}: TitleProps) => {
    return ( <h3 className="w-fit relative font-bold md:text-4xl text-3xl after:h-2 after:bg-background-maize after:w-full after:block after:absolute after:bottom-2 after:-z-1">
        {title}
    </h3> );
}
 
export default Title;