import { useEffect, useRef, useState } from "react";

export function UploadablePhoto({
  storageKey,
  label,
  alt,
  className = "",
}: {
  storageKey: string;
  label: string;
  alt: string;
  className?: string;
}) {
  const [photo, setPhoto] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPhoto(localStorage.getItem(storageKey));
  }, [storageKey]);

  const onFile = (file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const url = String(reader.result);
      setPhoto(url);
      try {
        localStorage.setItem(storageKey, url);
      } catch {
        /* image too large to persist; still shown this session */
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-elev">
        {photo ? (
          <img src={photo} alt={alt} className="aspect-[4/5] w-full object-cover" />
        ) : (
          <div className="flex aspect-[4/5] w-full items-center justify-center px-6 text-center text-sm text-muted-foreground">
            {label}
          </div>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={(e) => onFile(e.target.files?.[0])}
      />
      <figcaption className="mt-3 flex flex-wrap gap-3">
        <button type="button" className="btn-ghost-gold" onClick={() => inputRef.current?.click()}>
          {photo ? "Change photo" : "Upload photo"}
        </button>
        {photo && (
          <button
            type="button"
            className="btn-ghost-gold"
            onClick={() => {
              localStorage.removeItem(storageKey);
              setPhoto(null);
            }}
          >
            Remove
          </button>
        )}
      </figcaption>
    </figure>
  );
}
