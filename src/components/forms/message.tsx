import Title from "Components/title/title";

const Message = () => {
    return ( 
        <div className="md:mt-20 mt-10 bg-background-merino md:p-8 p-6 relative -z-1">
            <Title title="Message Us"/>
            <span className=" text-typography-flint mt-4">
            Nulla volutpat enim lorem, non volutpat tortor consequat ac.
            </span>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 mt-10">
                <input type="text" placeholder="Your Name" className="w-full py-2 px-4 rounded"/>
                <input type="text" placeholder="Your Email" className="w-full py-2 px-4 rounded"/>
                <textarea className="md:col-span-2 rounded outline-none border border-primary-orange-60 px-4 py-2" rows={6} placeholder="Your Message"/>
                <button className="bg-primary-orange-default px-4 py-2 text-white w-fit rounded text-sm font-semi-bold">SEND MESSAGE</button>
            </div>
        </div>
     );
}
 
export default Message;