// src/components/PresentationSectionThree.tsx

import React from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const projectData = [
  {
    id: 1,
    title: 'Rhavi Carneiro',
    description: (
      <>
        <p><strong>UI/UX Designer</strong> 🎨</p>
        <p>Focado em acessibilidade, responsividade e identidade visual.</p>
        <p>Especialista em <strong>Figma</strong> e experiências interativas que conectam produto e usuário.</p>
        <div className="flex gap-2 mt-2 justify-start">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="w-6 h-6" title="Figma" />
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: 'Thiago Sversut',
    description: (
      <>
        <p><strong>Desenvolvedor Back-end</strong> 🛠️</p>
        <p>Focado em APIs REST, segurança e escalabilidade.</p>
        <p>Experiência com <strong>Python</strong> e bancos de dados relacionais.</p>
        <div className="flex gap-2 mt-2 justify-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-6 h-6" title="Python" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-6 h-6" title="MySQL" />
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: 'Guilherme Xavier Hojak',
    description: (
      <>
        <p><strong>Front-end Developer</strong> ⚛️</p>
        <p>Estudante de Engenharia de Software e entusiasta em IA.</p>
        <p>Focado em <strong>React</strong>, <strong>Tailwind</strong> e boas práticas de UI responsiva.</p>
        <div className="flex gap-2 mt-2 justify-end">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-6 h-6" title="React" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className="w-6 h-6" title="Tailwind" />
        </div>
      </>
    ),
  },
];

const PresentationSectionThree = () => {
  const CARD_WIDTH = 470;
  const CARD_HEIGHT = 300;
  const GAP_BETWEEN_CARDS = 32;
  const SIDE_SCREEN_PADDING = 25;
  const CARD_GROUP_TOP_OFFSET = 75;
  const GROUP_CONTENT_WIDTH = (CARD_WIDTH * 3) + (GAP_BETWEEN_CARDS * 2);
  const TEXT_AREA_HEIGHT_ESTIMATE = 130;
  const FONT_SIZE_TITLE = 30;
  const FONT_SIZE_SUBTEXT = 18.26;

  return (
    <section className="py-16" style={{ backgroundColor: '#EAF3F3' }}>
      <div className="relative mx-auto" style={{ width: '100%', minHeight: `${CARD_GROUP_TOP_OFFSET + CARD_HEIGHT + TEXT_AREA_HEIGHT_ESTIMATE + 50}px` }}>
        <div
          className="absolute flex"
          style={{
            top: `${CARD_GROUP_TOP_OFFSET}px`,
            left: `${SIDE_SCREEN_PADDING}px`,
            width: `${GROUP_CONTENT_WIDTH}px`,
            justifyContent: 'space-between',
          }}
        >
          {projectData.map((project, index) => {
            let textAlignClass = 'text-center';
            if (index === 0) textAlignClass = 'text-left';
            else if (index === projectData.length - 1) textAlignClass = 'text-right';

            return (
              <RevealOnScroll key={project.id}>
                <div className="flex flex-col items-center" style={{ width: `${CARD_WIDTH}px` }}>
                  <motion.div
                    style={{
                      width: `${CARD_WIDTH}px`,
                      height: `${CARD_HEIGHT}px`,
                      background: 'linear-gradient(135deg, #163030, #224444)',
                      borderRadius: '12px',
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
                      padding: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                  ></motion.div>

                  <div className={`mt-4 ${textAlignClass}`} style={{ width: '100%' }}>
                    <h3
                      className="text-gray-900"
                      style={{
                        fontFamily: 'DM Sans',
                        fontWeight: 600,
                        fontSize: `${FONT_SIZE_TITLE}px`,
                        lineHeight: '100%',
                      }}
                    >
                      {project.title}
                    </h3>
                    <div
                      className="text-gray-600 mt-2"
                      style={{
                        fontFamily: 'DM Sans',
                        fontWeight: 500,
                        fontSize: `${FONT_SIZE_SUBTEXT}px`,
                        lineHeight: '120%',
                        maxWidth: `${CARD_WIDTH}px`,
                        overflowWrap: 'break-word',
                      }}
                    >
                      {project.description}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PresentationSectionThree;
