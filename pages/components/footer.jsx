
const Footer = () => {
  return (
    <div className='w-full flex justify-center pt-16 pb-32 bg-stone-50 mt-16'>
      <div className='footer-center max-w-3xl px-5 flex flex-col gap-2 w-full'>
      <div className="newsletter flex items-center justify-between">
      <h3 className=" text-md sm:text-lg font-semibold leading-6">More stories from Ulugbek</h3>
      <a className="rounded-3xl flex justify-center items-center text-link-border text-xs py-1.5 px-3 border border-purple-400 hover:border-purple-600 sm:text-sm hover:bg-link-bg" target="_blank" href="https://t.me/ulugbekChannel">Get Newsletter</a>
      </div>
      <p className=" text-stone-400  text-xs sm:text-sm font-normal w-72 sm:w-80 ">Hey, enjoying the content? Subscribe to my newsletter to stay up to date on new posts and more. P.S. No spam, unsubscribe any time.</p>
      <div className="br w-full bg-stone-200 my-6 h-px "></div>
      <div className="newsletter flex items-center justify-between">
      <span className=" text-stone-400 text-sm font-normal leading-6 tracking-normal ">Inspired by Medium.com</span>
      <span className=" text-stone-400 text-xs sm:text-sm font-normal leading-6 tracking-normal">©2022 <span className="text-xs sm:text-sm font-normal leading-6 tracking-normal  text-stone-400 bult By hidden sm:inline"> Built by Nurmatov Ulugbek</span></span>
      </div>
    
      </div>
    </div>
  )
}

export default Footer