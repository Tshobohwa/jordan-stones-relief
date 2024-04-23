import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeCard from "../components/HomeCard";

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <img
          src="https://images.unsplash.com/photo-1504159506876-f8338247a14a?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className=" h-[100vh] w-[100vw] object-cover"
          alt=""
        />
        <section className=" py-[5rem]">
          <div className=" flex flex-col gap-2 items-center">
            <h4>Section text</h4>
            <h3 className=" text-3xl font-semibold">SECTION 1 TITLE</h3>
          </div>
          <div className=" w-full px-[2%] flex gap-[4%] py-[2rem]">
            <HomeCard
              title={"CARD TITLE 1"}
              text={
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, impedit. Labore maiores eos quidem dolorem!"
              }
              img={
                "https://images.unsplash.com/photo-1497375638960-ca368c7231e4?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            <HomeCard
              img="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="CARD TITLE NUMBER 2"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, impedit. Labore maiores eos quidem dolorem!"
            />
            <HomeCard
              img="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="CARD TITLE NUMBER 2"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, impedit. Labore maiores eos quidem dolorem!"
            />
          </div>
        </section>
        <section className=" bg-red-50 py-5">
          <div className=" flex flex-col items-center gap-2">
            <h4>section text</h4>
            <h3 className=" text-3xl font-semibold mb-7">SECTION 3 TITLE</h3>
            <p className=" w-[70%] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus error et assumenda, quidem minima repellat vitae! Hic
              libero voluptas, ducimus iste adipisci maxime maiores, molestias,
              laboriosam similique tenetur unde. Est, quam rem. Neque dicta
              dolore, quibusdam voluptatum officia inventore, deleniti
              laboriosam optio iure illo maiores in quia ducimus vitae odit
              dolores, aliquid hic? Expedita illum laboriosam maiores, facilis
              omnis odio nisi magnam sunt unde enim tempore, labore harum.
              Aspernatur, consequuntur!
            </p>
            <button className=" h-[3rem] px-[2rem] rounded-md bg-red-400 text-white">
              Read more
            </button>
          </div>
          <div className="w-full grid grid-cols-1 gap-y-[3rem]"></div>
        </section>
      </div>
      <Footer />
    </>
  );
}
