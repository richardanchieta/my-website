"use client";

export default function Footer() {
  return (
    <section>
      <div className="flex flex-col gap-4 lg:px-6 mt-16">
        <p className="text-sm text-start text-muted-foreground">
          Baseado no site de {" "}
          <a className="text-foreground" href="https://brittanychiang.com">
            Brittany Chiang
          </a>{" "}
            e na codificação de{" "}
          <a className="text-foreground" href="https://meikopoulos.com/">
            Alexander Meikopoulos
          </a>{" "}. 
            Escrito com{" "}
          <a className="text-foreground" href="https://code.visualstudio.com/">
            Visual Studio Code.
          </a>{" "}
            Construído com{" "}
          <a className="text-foreground" href="https://nextjs.org/">
            Next.js
          </a>
          ,{" "}
          <a className="text-foreground" href="https://tailwindcss.com/">
            Tailwind CSS
          </a>{" "}
            e{" "}
          <a className="text-foreground" href="https://ui.shadcn.com/">
            Shadcn/ui
          </a>
           , implantado na{" "}
          <a className="text-foreground" href="https://vercel.com/">
            Vercel
          </a>
          .
        </p>
      </div>
    </section>
  );
}
