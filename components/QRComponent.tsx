export default function QRComponent({ qrSrc, title, description} : { qrSrc: string, title: string, description: string }) {
  return (
    <div className="flex flex-col drop-shadow-2xl items-center justify-center text-[15px] bg-white p-4 rounded-2xl font-Outfit max-w-[300px] bg-">
      <img src={qrSrc} className="rounded-2xl hover:scale-105 transform-gpu duration-300" />
      <div className="pt-4">
          <div className="font-bold text-[17px] text-dark-blue">
            {title}
          </div>
          <div className="pt-3 text-grayish-blue">
            {description}
          </div>
      </div>
    </div>
  )
}
