import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import FadeInView from "@/components/ui/fadeInView";
import SectionHeading from "@/components/ui/sectionHeading";
import Container from "@/components/layouts/container";

const About: NextPage = () => {
  const router = useRouter();

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
      <main className="min-h-screen bg-black text-white py-10">
        {/* HERO SECTION */}
        <section className="flex flex-col items-center justify-center text-center py-20 px-4">
          <FadeInView>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              About <span className="font-bold text-4xl text-amber-500">ARTZA</span>
            </h1>
            <p className="max-w-2xl mx-auto text-white/90 text-lg leading-relaxed">
              Artza, Where Vision Becomes Masterpiece <br />
              We're an art company based in Port Harcourt, started by a group of young creatives who believe art should do more than look good it should mean something. <br />
              We make pieces that range from traditional paintings and sculptures to digital installations and interactive light works. Some of our art sits still. Some of it moves. All of it is made to connect. <br />

              We think art is one of the most honest ways people communicate; how we hold onto feelings, tell our stories, and leave something behind that lasts.
              Whether it's a canvas, a sculpture, or a room-sized installation, everything we create is designed to make you stop and feel something real. <br />

              We're rooted in African creativity, but we work for anyone who wants art that matters.

            </p>
          </FadeInView>
        </section>

        {/* OUR MISSION */}
        <section className="py-20 bg-black text-white">
          <Container>
            <FadeInView>
              <SectionHeading
                title="Our Mission"
                subtitle="Bringing imagination to life through creativity, emotion, and design."
              />
            </FadeInView>

            {/* Mission and Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <FadeInView direction="up">
                <Card className="bg-white/5 border border-white/10">
                  <h3 className="text-xl font-semibold mb-3 text-amber-400">
                    What We're Here to Do
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    We want to change how people in Africa and beyond experience and
                    value art. We create work that blends craft with technology,
                    tradition with new ideas. And we do it in a way that's thoughtful,
                    personal, and built to last.
                    <br />
                    <br />
                    We also want to build a platform for African artists — giving them
                    structure, visibility, and a path to being taken seriously. And we
                    want to put Port Harcourt on the map as a place where art and
                    innovation happen.
                  </p>
                </Card>
              </FadeInView>

              <FadeInView direction="up" delay={0.1}>
                <Card className="bg-white/5 border border-white/10">
                  <h3 className="text-xl font-semibold mb-3 text-amber-400">
                    Where We're Going
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    By 2027, we want Artza to be the most recognized creative art brand
                    in Africa. By 2032, we want to be in conversations with the best art
                    houses in the world — not because we copied what they do, but because
                    we built something that could only come from here.
                    <br />
                    <br />
                    We're building toward a future where art, emotion, and technology
                    work together — where every piece we make tells a story, holds
                    value, and becomes part of someone's life.
                  </p>
                </Card>
              </FadeInView>
            </div>

            {/* What We Stand For */}
            <div className="mt-20">
              <FadeInView>
                <SectionHeading
                  title="What We Stand For"
                  subtitle="Our commitment to artists, collectors, and partners."
                />
              </FadeInView>

              <FadeInView direction="up" delay={0.1}>
                <Card className="mt-8 bg-white/5 border border-white/10">
                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-semibold text-amber-400">
                      To the artists we work with:
                    </span>{" "}
                    We'll give you a platform, structure, and the respect your work
                    deserves.
                    <br />
                    <br />
                    <span className="font-semibold text-amber-400">
                      To the people who collect or commission from us:
                    </span>{" "}
                    You'll get something real, authentic, thoughtfully made, and worth
                    keeping.
                    <br />
                    <br />
                    <span className="font-semibold text-amber-400">
                      To our partners and clients:
                    </span>{" "}
                    We'll bring ideas that feel innovative but never cold. Bold but never
                    empty.
                    <br />
                    <br />
                    We're not just making art. We're building something people can trust
                    and return to.
                  </p>
                </Card>
              </FadeInView>
            </div>

            {/* Who’s Behind This */}
            <div className="mt-20">
              <FadeInView>
                <SectionHeading
                  title="Who's Behind This"
                  subtitle="The people shaping the vision behind Artza."
                />
              </FadeInView>

              <FadeInView direction="up" delay={0.1}>
                <Card className="mt-8 bg-white/5 border border-white/10">
                  <p className="text-gray-300 leading-relaxed">
                    We're artists, designers, curators, and people who care way too much
                    about details. We started Artza because we wanted to create space
                    for the kind of work we believe in — art that's rooted in something
                    real, that reflects where we're from, and that's made with
                    intention.
                    <br />
                    <br />
                    Every piece we put out into the world carries a bit of that belief.
                    We're young, we're ambitious, and we're proudly from Port Harcourt.
                    But the work speaks for itself.
                  </p>
                </Card>
              </FadeInView>
            </div>
          </Container>
        </section>

        {/* CTA SECTION */}
        <section className="py-15 bg-black text-center text-white border-t border-white/10">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Build Something Together
            </h2>
            <p className="max-w-2xl mx-auto text-white/90 mb-8">
              If you're looking for art that changes a space, tells a story, or simply
              feels like home — we'd love to work with you.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                label="Explore Our Work"
                variant="outline"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold"
                onClick={() => router.push("/services")}
              />
              <Button
                label="Get In Touch"
                variant="outline"
                className="border border-amber-400 hover:bg-amber-500 hover:text-white text-amber-400 font-semibold"
                onClick={() => router.push("/contact")}
              />
            </div>
          </FadeInView>
        </section>
      </main>
    </>
  );
}
export default About;
