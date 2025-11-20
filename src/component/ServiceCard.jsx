function ServiceCard({ title, description, icon}) {
    return (
        <div className=" px-[41px] flex flex-col justify-center items-center pt-10 pb-[45px]  rounded-[28px] shadow-xl transition-shadow duration-300">
            <div className=" mb-4">
                <img src={icon} alt={`${title} Icon`} className="w-12 h-12" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-[28px] font-bold text-center mb-8 mt-[41px] ">{title}</h3>
                <p className="text-gray-600 mb-4 text-center">{description}</p>
                <a href='#' className="px-[30px] py-2.5 bg-[#FF6600] rounded-[10px] text-white cursor-pointer">Learn More</a>
            </div>
        </div>
    )
}

export default ServiceCard