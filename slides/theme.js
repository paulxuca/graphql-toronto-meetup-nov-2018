import { code } from "mdx-deck/themes";
import tomorrow from "react-syntax-highlighter/styles/prism/tomorrow";
import prismGraphQL from "react-syntax-highlighter/languages/prism/graphql";
import prismSql from "react-syntax-highlighter/languages/prism/sql";
import prismBash from "react-syntax-highlighter/languages/prism/bash";

export default {
  ...code,
  colors: {
    ...code.colors,
    background: "#fff"
  },
  prism: {
    style: tomorrow,
    languages: {
      graphql: prismGraphQL,
      sql: prismSql,
      bash: prismBash
    }
  },
  p: { fontSize: "0.7em" },
  li: { fontSize: "0.7em" }
};
