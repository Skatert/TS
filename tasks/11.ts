// сделайте код рабочим, трогать первые 5 строк трогать запрещено!

try {
  throw new Error('hello world!');
} catch (e: unknown) {
  console.log(e.message);
}
