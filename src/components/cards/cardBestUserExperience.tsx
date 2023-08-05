import Title from "Components/title/title";
import check from 'Images/icons/check.svg';

const CardBestUserExperience = () => {
    const items = [
        "Blandit ut nunc vel bibendum semper elit","Bibendum blandit ut nunc vel "
    ]
    return (<div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-40 items-end mt-20">
            <div>
                <Title title="Providing The World's Best User Experiences" />
                <p className="text-typography-flint text-lg mt-4">
                Vestibulum blandit ut nunc vel bibendum semper elit eget dignissim rhoncus, nisl augue lacinia urna vel rutrum nisi nunc sit amet risus nulla ornare egestas.
                </p>
                <ul className="text-typography-flint list-image-checkmark">
                    {items.map((item)=> <li key={item} className="mt-4 flex items-center gap-2">
                        
                        {item}
    
                    </li>)}
                </ul>
            </div>
        </div>
    </div>);
}

export default CardBestUserExperience;