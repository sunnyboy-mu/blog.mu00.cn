import { defineNotesConfig } from "vuepress-theme-plume";
import webNotes from "./web-notes";
import memorandum from "./memorandum";

export default defineNotesConfig({
  dir: "",
  link: "/",
  notes: [webNotes, memorandum],
});
