import {
  Box,
  Flex,
  Separator,
  Text,
  Link as LinkRadix,
} from "@radix-ui/themes";
import { grayA } from "@radix-ui/colors";
import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.css";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Header = ({ children }: Props) => {
  return (
    <header
      className={styles["header"]}
      style={{
        backgroundColor: grayA.grayA2,
      }}
    >
      <Box
        px={{ md: "9", initial: "5" }}
        py="5"
        className={styles["header-container"]}
      >
        <Flex direction="row" align="center" justify="between" gap="2">
          <LinkRadix asChild underline="auto">
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              <Flex direction="row" align="center" justify="between" gap="2">
                <Image
                  src="/icon.svg"
                  alt="Share icon"
                  height={40}
                  width={40}
                />
                <Text weight="bold">Social Media Tools</Text>
              </Flex>
            </Link>
          </LinkRadix>
          {children}
        </Flex>
      </Box>
      <Separator
        orientation="vertical"
        color="gray"
        style={{ width: "100%", height: 1 }}
      />
    </header>
  );
};
