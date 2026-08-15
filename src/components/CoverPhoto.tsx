import { useEffect, useRef, useState, type ReactNode } from "react";
import defaultCover from "@/assets/cover-default.jpg";

const STORAGE_KEY = "sa-cover-photo";

export function CoverPhoto({ children }: { children: ReactNode }) {
  const [cover, setCover] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCover(localStorage.getItem(STORAGE_KEY));
  }, []);

  const onFile = (file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const url = String(reader.result);
      setCover(url);
      try {
        localStorage.setItem(STORAGE_KEY, url);
      } catch {
        /* image too large to persist; still shown this session */
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <header className="relative isolate overflow-hidden">
      <img
        src={cover ?? defaultCover}
        alt="Cover photograph"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-veil" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
        {children}
        <div className="mt-10">
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={(e) => onFile(e.target.files?.[0])}
          />
          <div className="flex flex-wrap items-center gap-3">
            <button type="button" className="btn-ghost-gold" onClick={() => inputRef.current?.click()}>
              Upload cover photo
            </button>
            {cover && (
              <button
                type="button"
                className="btn-ghost-gold"
                onClick={() => {
                  localStorage.removeItem(STORAGE_KEY);
                  setCover(null);
                }}
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
