"use client";

import { type ForwardedRef, forwardRef } from "react";
import { useSearchParams } from "next/navigation";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  Flex,
  Text,
  Box,
  TextField,
  Card,
  Avatar,
  ScrollArea,
} from "@radix-ui/themes";

import { useSearch } from "./useSearch";

import styles from "./search.module.css";

export const Search = forwardRef((_, ref: ForwardedRef<HTMLInputElement>) => {
  const searchParams = useSearchParams();
  const { data, handleSearch } = useSearch();

  return (
    <section>
      <ScrollArea
        size="2"
        type="hover"
        scrollbars="vertical"
        mx="auto"
        my="0"
        style={{ height: 500 }}
        className={styles["input-search-container"]}
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          px={{ md: "9", initial: "5" }}
        >
          <TextField.Root mt="2" style={{ width: "100%" }}>
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
            <TextField.Input
              ref={ref}
              placeholder="Search tools"
              size="3"
              autoFocus={searchParams.get("features") === "true" ? true : false}
              onChange={handleSearch}
            />
          </TextField.Root>
          <Flex direction="column" gap="6" mt="7" width="100%">
            {data.map((item) => (
              <Card key={item.id} asChild variant="ghost">
                <a href="#">
                  <Flex gap="3" align="center">
                    <Avatar
                      size="3"
                      src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                      radius="medium"
                      fallback="T"
                    />
                    <Box>
                      <Text as="div" size="3" weight="bold">
                        {item.name}
                      </Text>
                      <Text as="div" size="2" color="gray">
                        {item.social.join(", ")}
                      </Text>
                    </Box>
                  </Flex>
                </a>
              </Card>
            ))}
          </Flex>
        </Flex>
        <div className={styles["input-search-container-bottom-shadow"]} />
      </ScrollArea>
    </section>
  );
});

Search.displayName = "Search";
