
const Feature = ({ featureData }) => {

  return (
    <div className="w-full border px-4 pt-5 pb-8 mt-10">
      <p className="font-bold text-[#262626] text-[0.875rem]">{featureData.where}</p>
      <p className="font-bold text-[#262626] text-[0.875rem] underline underline-offset-4 ">{featureData.title}</p>
      <p className="font-bold text-[#E60000] text-[0.875rem]">{featureData.time}</p>
      <p className="font-bold mt-3 text-[#262626] text-[0.875rem] ">{featureData.how}</p>
      <p className="font-bold text-[#636D72] text-[0.875rem] ">{featureData.price}</p>
    </div>
  )
}
export default Feature;