interface CategoryTitleProps {
    title: string
}

function CategoryTitle({ title }: CategoryTitleProps): JSX.Element {
    return (
        <div className="w-full bg-charcoal pt-[96px] ">
            <div className="h-24 flex-center md:h-60">
                <h1 className="h2 text-white md:text-[40px]">
                    {title}
                </h1>
            </div>
        </div>
    );
}

export default CategoryTitle;
