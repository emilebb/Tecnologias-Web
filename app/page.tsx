"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [targetProgress, setTargetProgress] = useState(20);

  useEffect(() => {
    if (!isLoading) return;

    const timer = window.setInterval(() => {
      setProgress((current) => {
        const next = Math.min(current + 1, targetProgress);
        if (next === targetProgress) setIsLoading(false);
        return next;
      });
    }, 40);

    return () => window.clearInterval(timer);
  }, [isLoading, targetProgress]);

  function startLoading() {
    setProgress(0);
    setIsLoading(true);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 font-sans text-white">
      <section className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900 p-8 shadow-2xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
            Progreso de carga
          </p>
          <h1 className="text-2xl font-semibold">Cargando archivo</h1>
          <p className="mt-2 text-sm text-zinc-400">
            {progress === targetProgress
              ? `La carga llegó al ${targetProgress}%.`
              : isLoading
                ? "Espera un momento mientras termina la carga."
                : "Inicia la carga para ver el progreso."}
          </p>
        </div>

        <label className="mb-6 block text-sm text-zinc-300" htmlFor="target-progress">
          Porcentaje objetivo
          <div className="mt-2 flex items-center gap-2">
            <input
              className="w-full rounded-lg border border-white/10 bg-zinc-800 px-3 py-2 text-white outline-none focus:border-indigo-400 disabled:opacity-60"
              id="target-progress"
              type="number"
              min={1}
              max={100}
              value={targetProgress}
              onChange={(event) => {
                const value = Number(event.target.value);
                if (Number.isInteger(value) && value >= 1 && value <= 100) {
                  setTargetProgress(value);
                }
              }}
              disabled={isLoading}
            />
            <span>%</span>
          </div>
        </label>

        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm text-zinc-400">Progreso</span>
          <span className="text-lg font-semibold tabular-nums" aria-live="polite">
            {progress}%
          </span>
        </div>

        <div
          className="h-3 overflow-hidden rounded-full bg-zinc-700"
          role="progressbar"
          aria-label="Progreso de carga"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <div
            className="h-full rounded-full bg-indigo-500 transition-[width] duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <button
          className="mt-8 w-full rounded-lg bg-indigo-500 px-4 py-3 font-medium transition-colors hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300 disabled:cursor-not-allowed disabled:opacity-60"
          type="button"
          onClick={startLoading}
          disabled={isLoading}
        >
          {isLoading ? "Cargando…" : progress === 100 ? "Cargar de nuevo" : "Iniciar carga"}
        </button>
      </section>
    </main>
  );
}
