// сделайте код рабочим, трогать первые 5 строк трогать запрещено!

try {
  throw new Error("hello world!");
} catch (e: unknown) {
  if (e instanceof Error) {
    console.log(e.message);
  } else {
    console.log("unknown error");
  }
}
