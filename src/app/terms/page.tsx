import Link from "next/link";
import { Button, Flex, Heading, Text } from "@radix-ui/themes";

import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";

import styles from "./page.module.css";

export const metadata = {
  title: "Terms of Use — Social Media Tools",
  description:
    "Learn about our Terms of Use here. Social Media Tools is a starter trip planner that helps you create the best itinerary.",
};

export default function Page() {
  return (
    <>
      <Header>
        <Button asChild variant="classic" size="3">
          <Link href="/?features=true">Features</Link>
        </Button>
      </Header>
      <main>
        <Flex
          direction="column"
          px={{ md: "9", initial: "5" }}
          className={styles["main"]}
        >
          <section className={styles["title"]}>
            <Heading size="8" as="h1">
              Terms of Use
            </Heading>
            <Text color="gray" className={styles["description"]}>
              05 October 2023
            </Text>
          </section>
          <section className={styles["content"]}>
            <Text color="gray">
              Please read these Terms and Conditions (&quot;Terms&quot;,
              &quot;Terms and Conditions&quot;, &quot;Terms of Use&quot;)
              carefully before using the https://socialmediatools.com website
              (the &quot;Service&quot;) operated by Social Media Tools
              (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
            </Text>
            <Text color="gray">
              Your access to and use of the Service is conditioned on your
              acceptance of and compliance with these Terms. These Terms apply
              to all visitors, users and others who access or use the Service.
            </Text>
            <Text color="gray">
              By accessing or using the Service you agree to be bound by these
              Terms. If you disagree with any part of the terms then you may not
              access the Service.
            </Text>
            <Heading size="6" as="h2">
              Entire Agreement
            </Heading>
            <Text color="gray">
              These terms of use forms the entire understanding between you and
              us with respect to your use of our website.
            </Text>
            <Heading size="6" as="h2">
              No Unlawful or Prohibited Use
            </Heading>
            <Text color="gray">
              As a condition of your use of this website, you warrant that you
              will not use this website for any purpose that is unlawful or
              prohibited by these terms of use.
            </Text>
            <Heading size="6" as="h2">
              Termination/Access Restriction
            </Heading>
            <Text color="gray">
              We reserve the right to terminate your access to this website and
              the related services or any portion of it at any time, without
              notice.
            </Text>
            <Heading size="6" as="h2">
              Copyright
            </Heading>
            <Text color="gray">
              All contents of this website are copyright by
              socialmediatools.com. Unless otherwise specified, we own or are
              licensed to use the copyright in all material on our website.
              Please contact us should you require permission to reproduce any
              of the contents of this site. We may or may not be able to
              authorise use, particularly of trademarks or materials of other
              companies. Only your personal use of our copyright materials is
              permitted, which means that you may access, download, or print
              such materials for your personal use only. Commercial use of any
              sort is expressly prohibited.
            </Text>
            <Heading size="6" as="h2">
              Contact Us
            </Heading>
            <Text color="gray">
              If you have any questions regarding this Privacy Policy or the
              practices of this Site, please contact us at
              murillomir0@gmail.com.
            </Text>
          </section>
        </Flex>
      </main>
      <Footer variant="secondary" />
    </>
  );
}
