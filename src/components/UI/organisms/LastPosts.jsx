import React, { useState, useEffect } from "react";

export const LastPosts = ({ url }) => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    const fetchBusinesses = () => {
      return fetch(url, {
        method: "GET",
        headers: new Headers({
          Authorization: "token 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",
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((rcvdBusinesses) => {
          let filter = rcvdBusinesses.filter((a) => a.fork === false);
          setProyectos(sliceElements(sortBy(filter, "created_at"), 5));
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchBusinesses();
  }, [url]);

  const sortBy = (list, element) => {
    return list.sort((a, b) => {
      return new Date(b[element]) - new Date(a[element]);
    });
  };
  const sliceElements = (list = [], end = 1) => {
    return list.slice(0, end).map((element) => {
      return element;
    });
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl px-6 mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Últimas Publicaciones
        </h2>

        <div className="flex flex-col items-center justify-center mt-6">
          {proyectos?.map((item, index) => {
            return (
              <a
                key={index}
                className="mb-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-green-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                href={item.html_url}
                rel="noopener"
              >
                <div className="flex items-center justify-between px-4 py-2">
                  <h3 className="text-lg font-medium text-gray-700">
                    {item.name}
                  </h3>
                  <span className="block text-gray-600 font-light text-sm">
                    {item.created_at}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="flex items-center justify-center mt-12">
          <a
            className="flex items-center text-gray-600 hover:underline hover:text-gray-500"
            href="https://github.com/acalderono"
            rel="noopener"
          >
            <span>Ver más</span>

            <svg
              className="h-5 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LastPosts;
