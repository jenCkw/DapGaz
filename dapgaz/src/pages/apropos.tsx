import React from "react";
import PropTypes from "prop-types";
import Layout from "@/components/Layout";
import Link from "next/link";
import imgtech from "../../../public/images/adapGaz-transformed 1.png";
import Image from "next/image";
const Index = () => {
  return (
    <Layout>
      <section className={"h-full max-w-screen flex flex-col mb-20"}>
        <div className="action">
          <h1 className="text-3xl text-white text-center font-bold">
            Qui sommes-nous?
          </h1>
          <p className={"text-white text-justify p-5"}>
            DAP GAZ est un Distributeur local de Cuisson propre et Importateur
            de GPL, des cylindres et des accessoires qui vont avec le GPL.
          </p>
        </div>
        <div className={"text-center mt-5 m-5"}>
          <h1 className={"font-bold text-2xl"}>Notre Histoire</h1>
        </div>
        <div
          className={
            "flex flex-col lg:flex-row lg:m-10 justify-around items-center "
          }
        >
          <div className={"rounded-lg  lg:w-[50%] w-[90%]"}>
            <Image
              src={imgtech}
              width={500}
              height={500}
              alt={"img tech"}
              className={"rounded-lg"}
            />
          </div>
          <div className={"lg:w-[50%] w-[90%]"}>
            <p className={"text-justify py-5 lg:py-0"}>
              DAP GAZ est le pionnier dans le domaine de la distribution de GPL
              et de la promotion de la Cuisson propre en RDC à travers la
              distribution de GPL et des accessoires y afférant depuis plus de
              dix ans. En fait, elle a été la seule société qui a travaillé dans
              ce secteur et a su avancer à travers toutes les difficultés et
              obstacles devant elle. Elle a défriché le terrain ; elle est
              entrée dans divers marchés et a su aujourd’hui couvrir six
              importantes villes.
            </p>
          </div>
        </div>
        <div
          className={
            "flex flex-col  justify-around items-center mb-12 lg:w-full h-full w-[90%]"
          }
        >
          <h2 className={"font-bold text-2xl mb-2"}>Activités principales</h2>
          <p className={"text-justify px-5 lg:px-0"}>
            DAP GAZ Sarl est une société de droit Congolais qui fournit et
            distribue du Gaz de Pétrole Liquéfié (GPL) ainsi que les appareils
            utilisant du GPL en République Démocratique du Congo depuis l’an
            2010.
          </p>
        </div>
        {/*   partie restante*/}
        <div className={"text-center mt-5 m-5"}>
          <h1 className={"font-bold text-2xl"}>Notre Vision</h1>
        </div>
        <div
          className={
            "flex flex-col lg:flex-row lg:m-10 justify-around items-center "
          }
        >
          <div className={"rounded-lg  lg:w-[50%] w-[90%]"}>
            <Image
              src={imgtech}
              width={500}
              height={500}
              alt={"img tech"}
              className={"rounded-lg"}
            />
          </div>
          <div className={"lg:w-[50%] w-[90%]"}>
            <p className={"text-justify py-5 lg:py-0"}>
              La vision de DAP Energy est de demeurer leader dans le secteur des
              GPL (Gaz de Pétrole Liquéfié) en R.D.C. en émettant des offres de
              marché plus attractives et plus adaptées au besoin du client.Le
              GPL est l’énergie stockée sous pression dans les cylindres. C’est
              une alternative supérieure moderne pour le bois de chauffage et le
              charbon de bois et est sécuritaire, propre, rapide et portable.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
Index.propTypes = {};
export default Index;
