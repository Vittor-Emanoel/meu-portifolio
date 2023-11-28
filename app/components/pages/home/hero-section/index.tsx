import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="w-full h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px] ">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row ">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Vittor Emanoel</h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Olá, meu nome é Vittor e sou um desenvolvedor front-end apaixonado
            por tecnologia. Com mais de 2 anos de experiência. Meu objetivo é
            criar interfaces de usuário bonitas e funcionais, além de liderar
            equipes técnicas em projetos desafiadores. Estou sempre aberto a
            novas oportunidades e desafios.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 7 }).map((_, index) => (
              <TechBadge name="oi" />
            ))}
          </div>

          <div>contato</div>
        </div>

        <Image
          width={420}
          height={404}
          src="/images/profile-pic.png"
          alt="Foto de perfil do Vittor Emanoel"
        />
      </div>
    </section>
  );
};
