import { useState, useEffect } from "react";
import AdvancedSearch from "../components/AdvancedSearch/AdvancedSearch";

import Alert from "../components/Alert/Alert";
import Banner from "../components/Banner/Banner";
import Cookies from "../components/Cookies/Cookies";
import Explore from "../components/Explore/Explore";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import HowWork from "../components/HowWork/HowWork";
import ImageContent from "../components/ImageContent/ImageContent";
import ImageContent02 from "../components/ImageContent02/ImageContent02";
import Junbotron from "../components/Junbotron/Junbotron";
import Loading from "../components/Loading/Loading";

import Navbar from "../components/Navbar/Navbar";
import SearchInput from "../components/SearchInput/SearchInput";
import Testimonials from "../components/Testimonials/Testimonials";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  //Temporário
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.latitude, position.coords.longitude);
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    // <>
    //   {isLoading ? (
    //     <Loading />
    //   ) : (
    //     <>
    //       <Navbar />
    //       <Hero />
    //       <Alert />
    //       <HowWork />
    //       <Junbotron />
    //       <Explore />
    //       <ImageContent />
    //       <ImageContent02 />
    //       <Testimonials />
    //       <Banner />
    //       <Footer />
    //       <Cookies />
    //     </>
    //   )}
    // </>
    <>
      <AdvancedSearch />
      {/* <SearchInput /> */}
    </>
  );
}
