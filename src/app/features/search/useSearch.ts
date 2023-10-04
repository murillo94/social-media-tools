import { type ChangeEvent, useState } from "react";
import { create, insertMultiple, search } from "@orama/orama";

import tools from "../../tools.json";

type Tools = {
  id: string;
  name: string;
  url: string;
  social: string[];
}[];

export const useSearch = () => {
  const [data, setData] = useState<Tools>([]);

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    const db = await create({
      schema: {
        id: "string",
        name: "string",
        url: "string",
        social: "string[]",
      },
    });

    // @ts-ignore
    await insertMultiple(db, tools);

    const searchResult = await search(db, {
      term: e.target.value,
      properties: ["name", "social"],
    });

    let result: any = [];

    for (let i = 0; i < searchResult.hits.length; i++) {
      result.push(searchResult.hits[i].document);
    }

    setData(result);
  };

  return { data: data.length > 0 ? data : tools, handleSearch };
};
