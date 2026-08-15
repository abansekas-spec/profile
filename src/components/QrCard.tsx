import { useEffect, useState } from "react";

export function QrCard({ url, label }: { url: string; label: string }) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    import("qrcode").then((QR) =>
      QR.toDataURL(url, {
        margin: 1,
        width: 480,
        color: { dark: "#0d1b2aff", light: "#ffffffff" },
      }).then((data) => {
        if (active) setSrc(data);
      }),
    );
    return () => {
      active = false;
    };
  }, [url]);

  return (
    <figure className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-elev">
      <div className="h-40 w-40 rounded-xl bg-background p-2">
        {src && <img src={src} alt={`QR code linking to ${label}`} width={480} height={480} className="h-full w-full" />}
      </div>
      <figcaption className="text-center text-sm text-muted-foreground">{label}</figcaption>
    </figure>
  );
}
