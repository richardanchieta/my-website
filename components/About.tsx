'use client'

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Sobre
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          interdum turpis convallis varius accumsan. Nunc vehicula, quam a
          congue dignissim, lorem arcu porttitor justo, quis fringilla nisi nisl
          id eros. Quisque tempus massa a magna rhoncus, at congue mi tincidunt.
          Cras ut purus sed sem faucibus fringilla vel eu nulla. Sed eget
          rhoncus sapien. Vestibulum at convallis diam. Sed interdum urna varius
          tempus imperdiet. Morbi id velit pulvinar, tempus lorem a, egestas
          lacus.
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">
          Nullam euismod augue tempus maximus ullamcorper. Sed in eleifend
          metus, vitae vulputate velit.{' '}
          <a
            className="no-wrap text-primary dark:text-white"
            href="https://tio.dev"
            target="blank"
            rel="noopener noreferrer"
          >
            tio.dev
          </a>{' '}
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Praesent maximus, sem auctor feugiat
          vestibulum, dui metus cursus diam, eget consectetur massa massa vel
          ligula. Vivamus ac dignissim arcu. Mauris aliquam ultricies diam, ut
          facilisis orci accumsan et. Nam ut felis non odio pellentesque
          commodo. In congue tempus quam at tempus.
        </p>
      </div>
    </section>
  )
}
