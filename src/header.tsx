import { Link } from "react-router-dom";
   const cardList = [
  {
    title: "Music",
    route: "music",
    api: "https://dummyjson.com/users",
    bgColor: "bg-pink-500",
    icon: "/images/headset.png",
  },
  {
    title: "Carts",
    route: "carts",
    api: "https://dummyjson.com/carts",
    bgColor: "bg-cyan-500",
    icon: "/images/ecommerce.png",
  },
  {
    title: "Games",
    route: "games",
    api: "https://dummyjson.com/quotes",
    bgColor: "bg-orange-300",
    icon: "/images/video-game.png",
  },
  {
    title: "Recipes",
    route: "recipes",
    api: "https://dummyjson.com/products",
    bgColor: "bg-violet-500",
    icon: "/images/online-education.png",
  },
  {
    title: "Movies",
    route: "movies",
    api: "https://dummyjson.com/products",
    bgColor: "bg-fuchsia-400",
    icon: "/images/video-camera.png",
  },
  {
    title: "JobPortal",
    route: "jobportal",
    api: "https://dummyjson.com/posts",
    bgColor: "bg-emerald-400",
    icon: "/images/recruitment.png",
  },
  {
    title: "Quotes",
    route: "quotes",
    api: "https://dummyjson.com/quotes",
    bgColor: "bg-slate-500",
    icon: "/images/quotes.png",
  },
  {
    title: "Travels",
    route: "travels",
    api: "https://dummyjson.com/comments",
    bgColor: "bg-sky-400",
    icon: "/images/airplane-around-earth.png",
  },
];

  // add rest...
// ];

export default function Header() {
  return (
    <header className="p-4 flex flex-wrap justify-center gap-6">
      {cardList.map((card) => (
        <Link
          key={card.title}
          to={`/${card.route}`}
          state={{ api: card.api }}
          className="w-[550px]"
        >
          <div
            className={`${card.bgColor} rounded-3xl px-6 py-8 flex justify-between items-center hover:bg-rose-400 transition cursor-pointer`}
          >
            <div className="flex items-center gap-4">
              <img src={card.icon} alt={card.title} className="h-16 w-16" />
              <div>
                <h2 className="text-white font-bold text-3xl">{card.title}</h2>
                <p className="text-white text-sm">{card.api}</p>
              </div>
            </div>
            <img
              src="/images/call_made_24dp_332136_FILL0_wght400_GRAD0_opsz24.png"
              alt="go"
              className="h-6 w-6"
            />
          </div>
        </Link>
      ))}
    </header>
  );
}
