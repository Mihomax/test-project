import { css } from "@emotion/css";

export const homePageClasses = () => {
  const container = css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 100,

    "& h1": {
      marginBottom: 50,
    },
  });
  const formRow = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 8,
  });

  const formContainer = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& h3": {
      marginBottom: 8,
    },
  });

  const form = css({
    display: "flex",
    flexDirection: "column",
    border: "1px solid #dedede",
    borderRadius: 10,
    padding: 16,
    width: 250,
    height: 300,
    "& input": {
      height: 24,
      lineHeight: 24,
    },

    "& button": {
      marginLeft: "auto",
      marginTop: "auto",
      width: 100,
      height: 30,
      cursor: "pointer",
    },
  });
  return { container, formContainer, formRow, form };
};
