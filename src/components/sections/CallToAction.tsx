import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

export const CalltoAction = () => {
  return (
    <section className="pb-20 relative">
      <Container>
        <div className="relative rounded-2xl overflow-hidden">
          <div
            className="relative z-10 mx-auto text-center max-w-xl 
          md:max-w-2xl py-8 md:py-10 px-6 md:px-8"
          >
            <h1
              className="text-3xl sm:text-4xl 
            md:text-5xl font-bold text-heading-1"
            >
              Quick Start Your Own
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                AI
              </span>
              Bussiness
            </h1>
            <Paragraph className="pt-10">
              Leverage the power of AI to transform your business. Our platform
              offers a suite of tools designed to enhance productivity,
              streamline operations, and drive growth.
            </Paragraph>
            <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
              <Button>Get In Touch</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
