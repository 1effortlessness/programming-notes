import { PicGo } from "picgo";

const picgo = new PicGo();

// test

try {
  picgo.upload();
} catch (error) {
  console.error(error);
}
