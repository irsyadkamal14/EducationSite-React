import React from "react";
import { useNavigate } from "react-router-dom";
import Complateimg from "../assets/icons/Complate.svg";
import Greatimg from "../assets/icons/Great.svg";
import Knowledimg from "../assets/icons/Knowled.svg";
import Smartimg from "../assets/icons/Smart.svg";

const Information = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <section className="information-section" id="information">
        <div className="row-1">
          <div>
            <p class="title-section">You Must Know It</p>
            <h1>Mengapa perlu baca buku di ZenLib ?</h1>
            <p class="content-section">
              Buku adalah sumber berbagai informasi yang dapat membuka wawasan
              kita tentang berbagai hal. ZenLib ada untuk membantumu dalam
              menemukan buku bacaan dengan mudah, efektif, dan efisien. Empat
              keunggulan ZenLib yang harus kamu ketahui yaitu Complete, Great,
              Smart, dan Knowledge.
            </p>
          </div>
          <div>
            <button
              className="btn-started"
              onClick={() => navigate("/detail-book")}
            >
              Let’s Started
            </button>
          </div>
        </div>
        <div className="row-2">
          <div className="cardPad">
            <div className="card bg-1">
              <img src={Greatimg} alt="Complate" />
              <h3>Complate</h3>
              <p>
                Beragam buku yang kamu butuhkan dapat kamu temukan di ZenLib
                karena memiliki koleksi buku yang lengkap
              </p>
            </div>
            <div className="card bg-2">
              <img src={Knowledimg} alt="Complate" />
              <h3>Great</h3>
              <p>
                Koleksi buku di ZenLib memiliki kualitas yang baik untuk
                membantumu dalam belajar
              </p>
            </div>
            <div className="card bg-3">
              <img src={Smartimg} alt="Complate" />
              <h3>Smart</h3>
              <p>
                ZenLib dapat membantumu untuk menemukan referensi buku yang kamu
                butuhkan dengan mudah
              </p>
            </div>
            <div className="card bg-4">
              <img src={Complateimg} alt="Complate" />
              <h3>Knowledge</h3>
              <p>
                Membaca buku di ZenLib dapat meningkatkan pengetahuanmu tentang
                berbagai hal yang belum pernah kamu ketahui
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Information;
