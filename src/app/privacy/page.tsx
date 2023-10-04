import Link from "next/link";
import { Button, Flex, Heading, Text } from "@radix-ui/themes";

import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";

import styles from "./page.module.css";

export const metadata = {
  title: "Privacy Policy — Social Media Tools",
  description:
    "Learn about our Privacy Policy here. Social Media Tools is a starter trip planner that helps you create the best itinerary.",
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
              Privacy Policy
            </Heading>
            <Text color="gray" className={styles["description"]}>
              05 October 2023
            </Text>
          </section>
          <section className={styles["content"]}>
            <Text color="gray">
              Social Media Tools operates the socialmediatools.co website, which
              provides the SERVICE.
            </Text>
            <Text color="gray">
              Our privacy policy is very simple. Your images are yours. You own
              them. When you upload images to ImageResizer.com, we temporarily
              save them on our servers to process them and they are deleted
              automatically from our servers after 24 hrs - forever. We
              don&apos;t ask you for any other private information. If you
              choose to post the resized images to Facebook directly from
              ImageResizer.com, and give us permission by connecting through
              Facebook, then we get your email id from Facebook and we store it
              in our database to keep a track of how many users are making use
              of the feature. Your email is not shared with anyone. If we ever
              send you an email, it will come with an unsubscribe link so you
              can remove yourself form our list.
            </Text>
            <Text color="gray">
              You own them. When you upload images to ImageResizer.com, we
              temporarily save them on our servers to process them and they are
              deleted automatically from our servers after 24 hrs - forever. We
              don&apos;t ask you for any other private information. If you
              choose to post the resized images to Facebook directly from
              ImageResizer.com, and give us permission by connecting through
              Facebook, then we get your email id from Facebook and we store it
              in our database to keep a track of how many users are making use
              of the feature. Your email is not shared with anyone. If we ever
              send you an email, it will come with an unsubscribe link so you
              can remove yourself form our list.
            </Text>
            <Text color="gray">
              We reserve the right to change our privacy policy at any time and
              in case we decide to change the privacy policy, we will post the
              changes on this page.
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
