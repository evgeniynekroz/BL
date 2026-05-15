import { useState } from "react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[#111] text-white">
      <div
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://link.brawlstars.com/images/game/background.jpg?v=u0u6bt0')",
        }}
      />
      <div className="absolute inset-0 bg-black/20" />

      <section className="relative z-10 flex min-h-screen w-full max-w-[820px] flex-col items-center px-6 pb-10 pt-10 text-center">
        <a
          href="https://brawlstars.com"
          target="_blank"
          rel="noreferrer"
          className="logo-float mt-2 inline-block w-[220px] sm:w-[300px]"
          aria-label="Официальный сайт Brawl Stars"
        >
          <img
            src="https://link.brawlstars.com/images/game/logo.svg"
            alt="Brawl Stars"
            className="w-full"
          />
        </a>

        <h1 className="game-title mt-8 max-w-[24ch] text-3xl leading-none font-bold tracking-wide text-white sm:text-[42px]">
          Захватывающие сражения 3 на 3
        </h1>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="claim-button mt-8 inline-flex h-16 min-w-[240px] items-center justify-center px-6 text-3xl font-bold text-[#1f1300] transition duration-200 hover:brightness-105 active:scale-95"
        >
          <span className="claim-button-text">Забрать</span>
        </button>

        <p className="game-copy mt-auto pb-1 text-2xl leading-none font-bold tracking-wide text-white">
          Скачать Brawl Stars
        </p>
      </section>

      {isModalOpen && (
        <div className="modal-fade fixed inset-0 z-20 flex items-center justify-center bg-black/70 px-5">
          <div className="w-full max-w-md rounded-xl bg-white p-6 text-left text-zinc-900 shadow-2xl">
            <h2 className="text-2xl font-bold">Как забрать блинговый дроп</h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-700">
              Чтобы получить блинговый дроп, вступи в группу{" "}
              <a
                href="https://t.me/BSKne"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-600 underline"
              >
                https://t.me/BSKne
              </a>
              . Там будут все инструкции.
            </p>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-zinc-900 px-5 text-sm font-semibold text-white transition hover:bg-zinc-700"
            >
              Понятно
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
