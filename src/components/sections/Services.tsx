import { Service } from "../cards/Service";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { services } from "../utils/services-data";

export const Services = () => {
  return (
    <section id="services">
      <Container className="space-y-10 md:space-y-12  ">
        <div className="text-center max-w-3xl mx-auto space-y-4 ">
          <Title>Our AI Services</Title>
          <Paragraph>
            Unlock the full potential of your business with our cutting-edge AI
            solutions. Our Services Include:
          </Paragraph>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8  ">
          {services.map((service, key) => (
            <Service
              key={key}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
