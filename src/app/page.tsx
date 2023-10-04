"use client";

import { useRef } from "react";
import Image from "next/image";
import { gray, lime } from "@radix-ui/colors";
import {
  CaretRightIcon,
  CheckIcon,
  StarFilledIcon,
} from "@radix-ui/react-icons";
import {
  Flex,
  Text,
  Button,
  Box,
  Heading,
  Avatar,
  Link as LinkRadix,
} from "@radix-ui/themes";
import Link from "next/link";

import { Search } from "./features/search/search";

import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

import tools from "./tools.json";

import styles from "./page.module.css";

function Arrow() {
  return (
    <svg
      fill="#000000"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 359.171 359.171"
      className={styles["arrow"]}
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <g>
          <g>
            <path d="M351.689,201.729c-0.612-46.512-6.732-95.472-18.972-140.76c-3.061-9.792-17.748-6.12-15.301,4.284 c9.792,40.392,15.912,81.396,17.748,123.013c1.837,41.615,2.448,97.308-27.54,129.743c-15.3,16.524-42.84,15.912-63.647,17.137 c-30.601,1.836-61.812,1.224-92.412-0.612c-30.6-1.224-61.812-4.284-92.412-7.956c-16.524-1.836-43.452-11.016-58.14-3.06 c-1.224,0.611-1.224,2.447-0.612,3.06c11.016,14.076,42.228,13.464,58.752,15.912c36.72,4.896,72.828,7.344,109.548,9.18 c44.675,1.836,114.443,11.017,149.939-22.644C351.077,299.649,351.689,242.121,351.689,201.729z"></path>
            <path d="M338.225,8.949c-4.284-6.12-11.628-4.896-14.688,1.836c-8.567,20.808-22.031,39.78-30.6,60.588 c-2.448,6.12,6.732,9.18,9.792,4.284c9.792-15.912,18.972-31.824,28.764-47.736c2.448,4.896,4.896,9.792,7.345,14.688 c3.06,7.956,3.672,15.912,7.344,23.256c2.447,5.508,9.792,3.06,11.628-1.224C363.929,47.505,348.017,23.025,338.225,8.949z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default function Home() {
  const inputSearchRef = useRef<HTMLInputElement>(null);

  const handleFocusInputSearch = () => {
    inputSearchRef.current?.focus();
  };

  return (
    <>
      <Header>
        <Button
          asChild
          variant="classic"
          size="3"
          onClick={handleFocusInputSearch}
        >
          <Link href="/?features=true">Features</Link>
        </Button>
      </Header>
      <Flex direction="column" justify="between" style={{ gap: 120 }}>
        <section style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              borderRadius: "inherit",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: -1,
            }}
          >
            <Image
              src="/dot.png"
              alt="A lot of gray dots as the background's page"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <Flex
            direction="column"
            align="center"
            justify="center"
            gap="6"
            pt="9"
            px={{ md: "9", initial: "5" }}
          >
            <Heading
              size="9"
              align="center"
              className={styles["hero-container"]}
            >
              The only social media tools you&apos;ll ever need
            </Heading>
            <Text
              size="5"
              align="center"
              className={styles["hero-description-container"]}
            >
              Grow your personal brand with AI-powered tools that help you
              create high-quality content and discover new content ideas.
            </Text>
            <Flex>
              <div style={{ position: "relative" }}>
                <div className={styles["arrow-container"]}>
                  <Arrow />
                </div>
              </div>
              <Button
                asChild
                variant="classic"
                size="4"
                onClick={handleFocusInputSearch}
              >
                <Link href="/?features=true">
                  Use all for free <CaretRightIcon width="24" height="24" />
                </Link>
              </Button>
            </Flex>
            <Flex align="center" justify="center" gap="4">
              <Flex align="center" justify="center" gap="1">
                <CheckIcon width="16" height="16" color={lime.lime10} />
                <Text>No credit card required</Text>
              </Flex>
              <Flex align="center" justify="center" gap="1">
                <CheckIcon width="16" height="16" color={lime.lime10} />
                <Text>Always for free</Text>
              </Flex>
            </Flex>
            <Flex align="center" justify="center" gap="6">
              <Flex align="center" justify="center">
                {[
                  {
                    src: "/person-2.jpg",
                  },
                  {
                    src: "/person-3.jpg",
                  },
                  {
                    src: "/person-1.jpg",
                  },
                  {
                    src: "/person-4.jpg",
                  },
                  {
                    src: "/person-6.jpg",
                  },
                  {
                    src: "/person-5.jpg",
                  },
                ].map((item, index) => (
                  <Box
                    mr="-3"
                    key={index}
                    style={{
                      border: `2px solid ${gray.gray6}`,
                      borderRadius: "100%",
                    }}
                  >
                    <Avatar
                      size="3"
                      radius="full"
                      src={item.src}
                      fallback="P"
                    />
                  </Box>
                ))}
              </Flex>
              <Flex direction="column" align="start" justify="center" gap="1">
                <Flex align="center" justify="center" gap="1">
                  <StarFilledIcon width="16" height="16" color={lime.lime10} />
                  <StarFilledIcon width="16" height="16" color={lime.lime10} />
                  <StarFilledIcon width="16" height="16" color={lime.lime10} />
                  <StarFilledIcon width="16" height="16" color={lime.lime10} />
                  <StarFilledIcon width="16" height="16" color={lime.lime10} />
                </Flex>
                <Text>Loved by 200+ professionals</Text>
              </Flex>
            </Flex>
          </Flex>
        </section>
        <Search ref={inputSearchRef} />
        <section>
          <Flex
            direction="column"
            align="center"
            justify="center"
            gap="8"
            px={{ md: "9", initial: "5" }}
            mx="auto"
            my="0"
            className={styles["explore-tools-container"]}
          >
            <Heading size="8" align="center">
              Everything else you need
            </Heading>
            <Flex align="center" justify="center" wrap="wrap" gap="5">
              {tools.map((item) => (
                <Flex
                  asChild
                  key={item.id}
                  align="center"
                  justify="center"
                  width="auto"
                  p="4"
                  style={{
                    backgroundColor: gray.gray3,
                    borderRadius: 100,
                  }}
                >
                  <LinkRadix asChild underline="hover" color="gray">
                    <Link href={item.url}>
                      <Text align="center" weight="bold">
                        {item.name}
                      </Text>
                    </Link>
                  </LinkRadix>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </section>
        <div
          style={{
            backgroundColor: lime.lime9,
            background:
              "linear-gradient(180deg, rgba(189,238,99,1) 15%, rgba(245,255,226,1) 70%)",
            borderTopLeftRadius: 150,
            borderTopRightRadius: 150,
          }}
        >
          <section style={{ marginTop: 50, marginBottom: 50 }}>
            <Flex
              direction="column"
              gap="6"
              align="center"
              justify="center"
              py="9"
              px={{ md: "9", initial: "5" }}
            >
              <Heading
                size="9"
                align="center"
                className={styles["hero-container"]}
              >
                Grow your personal brand on all social media
              </Heading>
              <Text
                size="5"
                align="center"
                className={styles["hero-description-container"]}
              >
                With the most safe, advanced and affordable social media growth
                platform
              </Text>
              <Button
                asChild
                variant="classic"
                size="4"
                onClick={handleFocusInputSearch}
              >
                <Link href="/?features=true">
                  Use all for free <CaretRightIcon width="24" height="24" />
                </Link>
              </Button>
              <Flex align="center" justify="center" gap="4">
                <Flex align="center" justify="center" gap="1">
                  <CheckIcon width="16" height="16" color={lime.lime11} />
                  <Text>No credit card required</Text>
                </Flex>
                <Flex align="center" justify="center" gap="1">
                  <CheckIcon width="16" height="16" color={lime.lime11} />
                  <Text>Always for free</Text>
                </Flex>
              </Flex>
            </Flex>
          </section>
          <Footer />
        </div>
      </Flex>
    </>
  );
}
