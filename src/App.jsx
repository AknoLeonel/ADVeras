import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Scale, Briefcase, HeartHandshake, Building, ArrowRight, MousePointer2, ChevronDown, ShieldCheck } from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  
  // Efeitos de Parallax para o Hero
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Variantes de Animação Globais
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-adv-black font-sans selection:bg-adv-gold selection:text-adv-black overflow-hidden text-gray-300">
      
      {/* NAVBAR FLUTUANTE GLASSMORPHISM */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-adv-black/50 backdrop-blur-md border-b border-white/5"
      >
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-adv-gold w-8 h-8" />
          <span className="text-white font-serif font-semibold text-xl tracking-wide">
            Advocacia<span className="text-adv-gold">.</span>
          </span>
        </div>
        <button className="hidden md:flex items-center gap-2 text-sm font-medium text-white hover:text-adv-gold transition-colors">
          Fale Conosco <ArrowRight size={16} />
        </button>
      </motion.nav>

      {/* HERO SECTION (COM PARALLAX) */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-6">
        {/* Glow dinâmico no fundo */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-adv-gold/15 blur-[150px] rounded-full pointer-events-none"
        />
        
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          initial="hidden" animate="visible" variants={staggerContainer}
          className="relative z-10 max-w-6xl mx-auto text-center mt-16"
        >
          <motion.div variants={fadeUp} className="inline-block mb-6 px-4 py-1.5 rounded-full border border-adv-gold/30 bg-adv-gold/5 backdrop-blur-sm">
            <span className="text-adv-gold text-xs font-medium tracking-[0.2em] uppercase">Excelência Jurídica</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-8xl font-serif text-white mb-8 leading-[1.1] tracking-tight">
            Autoridade & <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA8C2C]">
              Precisão Estratégica
            </span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Protegemos o seu patrimônio e garantimos seus direitos com soluções Tributárias, Trabalhistas e Previdenciárias de altíssimo nível.
          </motion.p>
          
          <motion.button 
            variants={fadeUp}
            whileHover={{ scale: 1.02, boxShadow: "0px 0px 30px rgba(212, 175, 55, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-adv-gold to-adv-goldDark text-adv-black font-semibold px-10 py-5 rounded-sm tracking-wide flex items-center gap-3 mx-auto transition-all"
          >
            Consultoria Especializada <ArrowRight size={22} />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown size={20} className="text-adv-gold" />
          </motion.div>
        </motion.div>
      </header>

      {/* ÁREAS DE ATUAÇÃO (STAGGERED CARDS) */}
      <section className="py-32 px-6 bg-[#0f0f0f] relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="mb-24 md:flex justify-between items-end"
          >
            <div>
              <h2 className="flex items-center gap-2 text-sm tracking-[0.3em] text-adv-gold uppercase mb-4">
                <span className="w-8 h-[1px] bg-adv-gold"></span> Áreas de Atuação
              </h2>
              <h3 className="text-4xl md:text-6xl font-serif text-white leading-tight max-w-2xl">
                Especialistas nas áreas que moldam o seu futuro.
              </h3>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard 
              delay={0}
              icon={<Scale className="w-10 h-10" />}
              title="Tributário"
              items={[
                "Adequação do seu negócio",
                "Declaração de Impostos (PF e PJ)",
                "Holding Patrimonial e Familiar",
                "Planejamento Tributário",
                "Reforma Tributária (Planejamento Especial)",
                "Recuperação de Crédito Tributário"
              ]}
            />
            <ServiceCard 
              delay={0.2}
              icon={<Briefcase className="w-10 h-10" />}
              title="Trabalhista"
              items={[
                "Admissão, Demissão e Verbas",
                "Compliance Trabalhista",
                "Ações de Danos",
                "Manuais e Playbooks Corporativos",
                "Estruturação e Análise de Contratos",
                "Reclamação Trabalhista Especializada"
              ]}
            />
            <ServiceCard 
              delay={0.4}
              icon={<HeartHandshake className="w-10 h-10" />}
              title="Previdenciário"
              items={[
                "Aposentadoria (Todas as modalidades)",
                "Auxílio Doença",
                "Benefícios Assistenciais (PCD)",
                "Benefícios Assistenciais (Idosos)",
                "Conversão em Aposentadoria Permanente",
                "Pensão por Morte",
                "Salário Maternidade"
              ]}
            />
          </div>
        </div>
      </section>

      {/* GESTÃO MUNICIPAL CTA (DESTAQUE ÉPICO) */}
      <section className="py-32 px-6 bg-adv-black relative overflow-hidden border-t border-b border-white/5">
        {/* Abstract Background Effect */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
        <div className="absolute right-[-20%] bottom-[-20%] w-[60%] h-[80%] bg-adv-gold/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-5xl mx-auto bg-[#141414] border border-white/10 hover:border-adv-gold/30 transition-colors duration-500 p-12 md:p-20 rounded-2xl text-center relative z-10 overflow-hidden group"
        >
          <motion.div 
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-adv-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          />
          
          <Building className="mx-auto text-adv-gold w-16 h-16 mb-8 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Soluções para Gestão Municipal</h3>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Governança inteligente, compliance público e soluções tecnológicas dedicadas à modernização da administração municipal.
          </p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://realgov.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-transparent border border-adv-gold text-adv-gold px-10 py-4 rounded-sm hover:bg-adv-gold hover:text-adv-black transition-all duration-300 font-semibold text-lg"
          >
            Conheça a Realgov Solutions <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </section>

      {/* FOOTER PREMIUM */}
      <footer className="py-12 bg-[#050505] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-adv-gold w-6 h-6" />
            <span className="text-white font-serif font-semibold text-lg tracking-wide">
              Advocacia<span className="text-adv-gold">.</span>
            </span>
          </div>
          <p className="text-gray-500 text-sm font-light">
            &copy; {new Date().getFullYear()} Advocacia Premium. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            {/* Links Sociais Placeholder */}
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-adv-gold hover:text-adv-gold transition-colors cursor-pointer"><span className="text-xs">IN</span></div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-adv-gold hover:text-adv-gold transition-colors cursor-pointer"><span className="text-xs">IG</span></div>
          </div>
        </div>
      </footer>

    </div>
  );
}

// COMPONENTE DE CARD REUTILIZÁVEL (Para código limpo e animações complexas)
function ServiceCard({ icon, title, items, delay }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: delay, ease: "easeOut" } }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: delay + 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="bg-[#121212] border border-white/5 p-10 relative overflow-hidden group hover:border-adv-gold/40 transition-colors duration-500 flex flex-col h-full"
    >
      {/* Efeito de luz no Hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-adv-gold/5 blur-[50px] group-hover:bg-adv-gold/15 transition-colors duration-500 pointer-events-none" />
      
      <div className="text-adv-gold mb-8 transform group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-500">
        {icon}
      </div>
      <h4 className="text-3xl font-serif text-white mb-8 group-hover:text-adv-goldLight transition-colors">{title}</h4>
      
      <motion.ul variants={listVariants} className="space-y-4 text-gray-400 font-light flex-grow">
        {items.map((item, index) => (
          <motion.li key={index} variants={itemVariants} className="flex items-start gap-3">
            <span className="text-adv-gold mt-1 text-sm">▹</span>
            <span className="leading-snug">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}