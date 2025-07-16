export default function Header() {
  return (
    <header className="p-2 flex flex-wrap justify-center gap-6">
        {/* proucts.. */}
      <a href="https://open.spotify.com/" >
        <div className="bg-pink-500 rounded-3xl px-6 py-8 w-[550px] flex justify-between items-center hover:bg-rose-400 transition cursor-pointer">
          <div className="flex items-center gap-4">
            <img src="/images/headset.png" alt="headset" className="h-16 w-16" />
            <div>
              <h2 className="text-white font-bold text-3xl">Music</h2>
              <p className="text-white text-sm">https://open.spotify.com/</p>
            </div>
          </div>
          <img src="/images/call_made_24dp_332136_FILL0_wght400_GRAD0_opsz24.png" alt="go"className="h-6 w-6"/>
        </div>
      </a>
      
      {/* carts */}
      <a href="https://fonts.google.com/icons" >
        <div className="bg-cyan-500 rounded-3xl px-6 py-8 w-[550px] flex justify-between items-center hover:bg-rose-400 transition cursor-pointer">
          <div className="flex items-center gap-4">
            <img src="/images/ecommerce.png" alt="headset" className="h-16 w-16" />
            <div>
              <h2 className="text-white font-bold text-3xl">Carts</h2>
              <p className="text-white text-sm">https://fonts.google.com/icons</p>
            </div>
          </div>
          <img src="/images/call_made_24dp_332136_FILL0_wght400_GRAD0_opsz24.png" alt="go"className="h-6 w-6 "/>
        </div>
      </a>

      {/* games */}
      <a href="https://poki.com/" >
        <div className="bg-orange-300 rounded-3xl px-6 py-8 w-[550px] flex justify-between items-center hover:bg-rose-400 transition cursor-pointer">
          <div className="flex items-center gap-4">
            <img src="/images/video-game.png" alt="headset" className="h-16 w-16" />
            <div>
              <h2 className="text-white font-bold text-3xl">Games</h2>
              <p className="text-white text-sm">https://poki.com/</p>
            </div>
          </div>
          <img src="/images/call_made_24dp_332136_FILL0_wght400_GRAD0_opsz24.png" alt="go"className="h-6 w-6"/>
        </div>
      </a>

{/* cooking */}

       <a href="https://www.indianhealthyrecipes.com/recipes/" >
        <div className="bg-violet-500 rounded-3xl px-6 py-8 w-[550px] flex justify-between items-center hover:bg-rose-400 transition cursor-pointer">
          <div className="flex items-center gap-4">
            <img src="/images/online-education.png" alt="headset" className="h-16 w-16" />
            <div>
              <h2 className="text-white font-bold text-3xl">Recipes</h2>
              <p className="text-white text-sm">https://www.indianhealthyrecipes.com/recipes/</p>
            </div>
          </div>
          <img src="/images/call_made_24dp_332136_FILL0_wght400_GRAD0_opsz24.png" alt="go"className="h-6 w-6"/>
        </div>
      </a>
{/* movie */}
      <a href="https://in.bookmyshow.com/" >
        <div className="bg-fuchsia-400 rounded-3xl px-6 py-8 w-[550px] flex justify-between items-center hover:bg-rose-400 transition cursor-pointer">
          <div className="flex items-center gap-4">
            <img src="/images/video-camera.png" alt="headset" className="h-16 w-16" />
            <div>
              <h2 className="text-white font-bold text-3xl">Movies</h2>
              <p className="text-white text-sm">https://in.bookmyshow.com/</p>
            </div>
          </div>
          <img src="/images/call_made_24dp_332136_FILL0_wght400_GRAD0_opsz24.png" alt="go"className="h-6 w-6"/>
        </div>
      </a>
{/* jobs */}
<a href="https://www.linkedin.com/feed/" 
>
        <div className="bg-emerald-400 rounded-3xl px-6 py-8 w-[550px] flex justify-between items-center hover:bg-rose-400 transition cursor-pointer">
          <div className="flex items-center gap-4">
            <img src="/images/recruitment.png" alt="headset" className="h-16 w-16" />
            <div>
              <h2 className="text-white font-bold text-3xl">JobPortal</h2>
              <p className="text-white text-sm">https://www.linkedin.com/feed/</p>
            </div>
          </div>
          <img src="/images/call_made_24dp_332136_FILL0_wght400_GRAD0_opsz24.png" alt="go"className="h-6 w-6"/>
        </div>
      </a>
{/* quotes
 */}
 <a href="https://www.goodreads.com/quotes" >
        <div className="bg-slate-500 rounded-3xl px-6 py-8 w-[550px] flex justify-between items-center hover:bg-rose-400 transition cursor-pointer">
          <div className="flex items-center gap-4">
            <img src="/images/quotes.png" alt="headset" className="h-16 w-16" />
            <div>
              <h2 className="text-white font-bold text-3xl">Quotes</h2>
              <p className="text-white text-sm">https://www.goodreads.com/quotes</p>
            </div>
          </div>
          <img src="/images/call_made_24dp_332136_FILL0_wght400_GRAD0_opsz24.png" alt="go"className="h-6 w-6"/>
        </div>
      </a>

     {/* travels  */}
     <a href="https://www.gtholidays.in/" >
        <div className="bg-sky-400 rounded-3xl px-6 py-8 w-[550px] flex justify-between items-center hover:bg-rose-400 transition cursor-pointer">
          <div className="flex items-center gap-4">
            <img src="/images/airplane-around-earth.png" alt="headset" className="h-16 w-16" />
            <div>
              <h2 className="text-white font-bold text-3xl">Travels</h2>
              <p className="text-white text-sm">https://www.gtholidays.in/</p>
            </div>
          </div>
          <img src="/images/call_made_24dp_332136_FILL0_wght400_GRAD0_opsz24.png" alt="go"className="h-6 w-6"/>
        </div>
      </a>



    </header>
  );
}










// export default function Header() {
//   return (
//     <header className="p-4 w-150">
//       <a href="https://www.w3schools.com/">
//         <div className="bg-sky-500/75 rounded-2xl p-6 flex items-center gap-4  hover:bg-sky-800/100 cursor-pointer ">
//           <img src="/images/headset.png" alt="headset" className="h-16 w-16" /><div>
//             <h2 className="text-black font-bold text-3xl">Products</h2>
//             <p className="text-black text-sm ">https://www.w3schools.com/
//             </p>
//             <img src="/images/call_made_24dp_332136_FILL0_wght400_GRAD0_opsz24.png" alt="set" className="h-10 w-10 relative bottom-8 ml-60" />
//           </div>
//         </div>
//       </a>
//     </header>
//   );
// }
