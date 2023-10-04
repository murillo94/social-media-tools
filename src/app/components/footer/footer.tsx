import { Flex, Separator, Text, Link as LinkRadix } from "@radix-ui/themes";
import Link from "next/link";

import tools from "../../tools.json";
import { limeA } from "@radix-ui/colors";

type Variant = "primary" | "secondary";

interface Props {
  variant?: Variant;
  background?: boolean;
}

const variants = {
  primary: {
    backgroundColor: "transparent",
  },
  secondary: {
    backgroundColor: limeA.limeA3,
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    width: "90%",
    margin: "0 auto",
  },
};

export const Footer = ({ variant = "primary" }: Props) => {
  return (
    <footer
      style={{
        ...variants[variant],
      }}
    >
      {variant === "primary" ? (
        <Separator
          orientation="vertical"
          color="gray"
          style={{ width: "100%", height: 1 }}
        />
      ) : null}
      <Flex
        direction={{ sm: "row", initial: "column" }}
        align="start"
        justify="center"
        py="9"
        px={{ md: "9", initial: "5" }}
        style={{ gap: 200 }}
      >
        <Flex direction="column" gap="4">
          <Text weight="bold">Tools</Text>
          <Flex direction="column" gap="2">
            {tools.map((item) => (
              <LinkRadix key={item.id} asChild underline="hover" color="gray">
                <Link href="#">{item.name}</Link>
              </LinkRadix>
            ))}
          </Flex>
        </Flex>
        <Flex direction="column" gap="4">
          <Text weight="bold">Company</Text>
          <Flex direction="column" gap="2">
            <LinkRadix asChild underline="hover" color="gray">
              <Link href="#">Roadmap</Link>
            </LinkRadix>
            <LinkRadix asChild underline="hover" color="gray">
              <Link href="/privacy">Privacy Policy</Link>
            </LinkRadix>
            <LinkRadix asChild underline="hover" color="gray">
              <Link href="/terms">Terms of Service</Link>
            </LinkRadix>
          </Flex>
        </Flex>
        <Flex direction="column" gap="4">
          <Text weight="bold">Keep in touch</Text>
          <Flex direction="column" gap="2">
            <LinkRadix asChild underline="hover" color="gray">
              <Link href="#">Contact Us</Link>
            </LinkRadix>
            <LinkRadix asChild underline="hover" color="gray">
              <Link href="#">Twitter</Link>
            </LinkRadix>
          </Flex>
        </Flex>
      </Flex>
    </footer>
  );
};
