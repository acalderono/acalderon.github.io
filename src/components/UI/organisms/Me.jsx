export const Me = ({ name = "Angel", avatar = "https://localhost:3000" }) => {
  return (
    <section className="bg-white mt-20">
      <div className="max-w-2xl px-6 text-center mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800">
          Hola,
          <span className="bg-green-500 text-white rounded px-1">
            Soy {name}
          </span>
          👋🏻
        </h2>
        {/* <p className="text-gray-600 mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A aliquam
          veniam suscipit eaque iure, eligendi harum expedita cupiditate sequi,
          culpa autem! Quaerat ex fugit iste suscipit reiciendis, accusamus
          ipsum quae.
        </p> */}

        <div className="flex items-end justify-center mt-6">
          <div className="w-64 h-64 relative mb-4">
            <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
              {/* <span className="hidden group-hover:table-cell text-white font-bold align-middle">
                KR
              </span> */}
              <img
                src={avatar}
                alt={name}
                unselectable="on"
                className="object-cover object-center w-full h-full visible group-hover:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Me;
