import { Section, Surround } from "@/components";
import { Hero, VerticalFeatureRow } from "@/components/home";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Surround className="container mx-auto">
        <Section
          title="Your title here"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
        >
          <VerticalFeatureRow
            title="Your title here"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
            image="/images/feature.svg"
            imageAlt="First feature alt text"
          />
          <VerticalFeatureRow
            title="Your title here"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
            image="/images/feature.svg"
            imageAlt="First feature alt text"
            reverse
          />

          <VerticalFeatureRow
            title="Your title here"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
            image="/images/feature.svg"
            imageAlt="First feature alt text"
          />

          <VerticalFeatureRow
            title="Your title here"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
            image="/images/feature.svg"
            imageAlt="First feature alt text"
            reverse
          />
        </Section>
      </Surround>
    </Fragment>
  );
}
