import { Section, Div } from "@/components";
import { Hero, VerticalFeatureRow } from "@/components/home";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Div className="container mx-auto">
        <Section
          title="Join the IoT Revolution"
          description="Get started with Chickies Company today and step into the future of home automation."
        >
          <VerticalFeatureRow
            title="Seamless Hardware Integration"
            description="Our IoT solutions begin with state-of-the-art hardware installation. Receive detailed guidance and support from our experts right at your doorstep to set up your IoT devices effortlessly."
            image="/images/feature_1.svg"
            imageAlt="Seamless Hardware Integration alt text"
          />
          <VerticalFeatureRow
            title="Smart Mobile Application"
            description="Take control of your home with our user-friendly mobile application. It's designed for convenience, allowing you to monitor and manage your home's IoT devices anytime, anywhere."
            image="/images/feature_2.svg"
            imageAlt="Smart Mobile Application alt text"
            reverse
          />

          <VerticalFeatureRow
            title="Comprehensive Admin Control"
            description="Maintain oversight of all your IoT devices with our intuitive admin panel. Our platform ensures that everything is under control, with real-time data and management tools that keep you informed and in charge."
            image="/images/feature_3.svg"
            imageAlt="Comprehensive Admin Control alt text"
          />
        </Section>
      </Div>
    </Fragment>
  );
}
