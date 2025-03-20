export default function Cards({ img, title, description }) {
  return (
    <>
      <div className=" w-56 bg-[#7AAADD]/[0.11] rounded-md flex flex-col items-center px-6 py-5 gap-5 text-[#2F2F2F]">
        <img src={`/images/${img}`} alt="" />
        <div>
          <p className="font-medium text-lg pb-2.5">{title}</p>
          <p className="font-light text-lg">{description}</p>
        </div>
      </div>
    </>
  );
}
