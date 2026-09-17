import { motion } from 'motion/react';
import fotoPerfil from '../assets/Fota de perfil.jpeg';

export function Authority() {
  const scrollVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-white px-6 md:px-12" id="autoridade">
      <div className="max-w-[1140px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Photo Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollVariant}
            className="lg:col-span-5 flex justify-center lg:order-2"
          >
            <div className="w-full max-w-[420px] rounded-[24px] overflow-hidden shadow-lg border border-slate-100">
              <img
                src={fotoPerfil}
                alt="Dra. Maria Carolina Moraes e Dra. Cyntia D'Ambrosio"
                className="w-full h-auto block object-cover"
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollVariant}
            className="lg:col-span-7 space-y-6 lg:order-1"
          >
            {/* Biography Title */}
            <h2 className="font-serif text-3xl md:text-4xl text-[#861a32] font-bold tracking-tight">
              D'Ambrosio & Moraes Advocacia
            </h2>

            {/* Subtitle */}
            <p className="text-[#861a32] font-semibold text-lg">
              Dras. Cyntia D'Ambrosio e Maria Carolina Moraes
            </p>

            {/* Biography Paragraphs */}
            <div className="space-y-4 text-[#1e0a10] font-sans text-sm md:text-base leading-relaxed text-justify">
              <p>
                <strong>Dra. Maria Carolina (Carola Moraes)</strong> — Formada pela Faculdade de Direito de Vitória (FDV), acumula 20 anos de experiência no Direito e é especialista em Direito Previdenciário e quitação de financiamentos imobiliários. Mãe de 3 filhos, é sócia e cofundadora do escritório D'Ambrosio & Moraes Advocacia.
              </p>
              <p>
                <strong>Dra. Cyntia D'Ambrosio</strong> — Formada pelas Faculdades Integradas Espírito-Santense (FAESA), possui 17 anos de experiência na advocacia e especialização em Direito Civil, Processo Civil e Previdenciário. Mãe de 2 meninas, é sócia e cofundadora do escritório D'Ambrosio & Moraes Advocacia.
              </p>
              <p>
                Com ampla expertise no processo de quitação de financiamentos imobiliários decorrente de doenças graves e invalidez, o escritório atua para garantir que as famílias exerçam seus direitos previdenciários e securitários com segurança jurídica, dignidade e proteção financeira.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}