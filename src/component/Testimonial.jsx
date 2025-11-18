
function Testimonial({ picture, name, comment }) {
    return (
        <div className="max-w-[470px] flex items-start gap-6 p-6 bg-white ">
            <div className="w-[70px] h-[70px] flex-shrink-0">
                <img src={picture} className="w-full h-full object-cover rounded-[10px]" />
            </div>
            <div className="flex flex-col">
                <p className="text-[18px] text-[#0B1B35] leading-[28px] font-medium mb-3 gap-[13px]">{comment}</p>
                <span className="text-[14px] text-[#0B1B35] opacity-30 font-bold uppercase tracking-[2px]">{name}</span>
            </div>
        </div>
    );
}

export default Testimonial;