import { NextPage } from "next";
import Head from "next/head";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import FadeInView from "@/components/ui/fadeInView";
import SectionHeading from "@/components/ui/sectionHeading";
import Container from "@/components/layouts/container";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us | ARTZA</title>
        <meta
          name="description"
          content="Learn more about ARTZA — a creative brand bringing art, design, and emotion to life through personalized works and events."
        />
      </Head>

      {/* ✅ ABOUT PAGE CONTENT */}
      <main className="min-h-screen bg-white text-black">
        {/* HERO SECTION */}
        <section className="flex flex-col items-center justify-center text-center py-20 px-4">
          <FadeInView>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="font-extrabold">ARTZA</span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
              ARTZA is a creative company dedicated to producing and delivering exceptional artworks,
              customized products, and gift experiences that inspire emotion, beauty, and connection.
            </p>
          </FadeInView>
        </section>

        {/* OUR MISSION */}
        <section className="py-20 bg-gray-50">
          <Container>
            <FadeInView>
              <SectionHeading
                title="Our Mission"
                subtitle="Bringing imagination to life through creativity, emotion, and design."
              />
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <FadeInView direction="up">
                <Card>
                  <h3 className="text-xl font-semibold mb-3">Creativity That Speaks</h3>
                  <p className="text-gray-600">
                    We transform artistic ideas into expressive pieces — from digital art to
                    personalized decor — that bring stories and emotions to life.
                  </p>
                </Card>
              </FadeInView>

              <FadeInView direction="up" delay={0.1}>
                <Card>
                  <h3 className="text-xl font-semibold mb-3">Crafted With Passion</h3>
                  <p className="text-gray-600">
                    Every ARTZA product, artwork, and experience is designed with heart, precision,
                    and purpose to ensure authenticity and excellence.
                  </p>
                </Card>
              </FadeInView>
            </div>
          </Container>
        </section>

        {/* WHO WE ARE */}
        <section className="py-20">
          <Container>
            <FadeInView>
              <SectionHeading
                title="Who We Are"
                subtitle="A creative brand connecting art, experience, and emotion."
              />
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              {[
                {
                  title: "Artworks & Portraits",
                  text: "We create both digital and physical art that captures human emotion and individuality.",
                },
                {
                  title: "Customized Gifts",
                  text: "From money bouquets to custom mugs, our personalized gifts are made to make memories unforgettable.",
                },
                {
                  title: "Interior Decor",
                  text: "We curate decor that enhances ambiance and connects deeply with creativity and comfort.",
                },
              ].map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <Card className="text-center">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </Card>
                </FadeInView>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-black text-white text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Us on Our Creative Journey
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300 mb-8">
              Discover how ARTZA is redefining creativity, one masterpiece at a time.
            </p>
            <Button label="Explore Our Works" variant="outline" />
          </FadeInView>
        </section>
      </main>
    </>
  );
};

export default About;
