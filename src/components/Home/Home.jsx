import React, { useEffect, useState } from "react";
import NavBar from "../common/NavBar/NavBar";
import Select from "../common/Select/Select";
import Search from "../common/Search/Search";
import BirdsList from "../common/BirdsList/BirdsList";
import Footer from "../common/Footer/Footer";
import Loader from "../common/Loader/Loader";

const Home = () => {
  const [country, setCountry] = useState("Russia");
  const [birds, setBirds] = useState(null);
  const imagePerRow = 20;
  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setBirds(null);
        const res = await fetch(
          `https://xeno-canto.org/api/2/recordings?query=cnt:${country}&page=1`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        const results = await res.json();

        setBirds(results);
        return "";
      } catch (error) {
        console.log(error.message);
      }
    };

    return () => {
      fetchData();
    };
  }, [country]);

  return (
    <>
      {birds ? (
        <div className="relative">
          <NavBar />
          <div className=" mx-[22px] md:mx-[82px]">
            <main className="mt-24   mb-52">
              <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16 ">
                <Select country={country} setCountry={setCountry} />
                <Search />
              </div>
              <div className="mt-20 space-y-16">
                <BirdsList birdsList={birds} next={next} country={country} />
                {next < birds.recordings.length ? (
                  <div className="flex justify-center">
                    <button className="load-btn" onClick={handleMoreImage}>
                      Load more ...
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <span className=" color-1">
                      You have reached the end of the list
                    </span>
                  </div>
                )}
              </div>
            </main>
            <div className="bg-gray-200 h-[1px]"></div>
            <Footer />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
