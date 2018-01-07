import * as express from 'express';

const ifArgI = (name: string, defaultValue: any) => {
  const arg = process.argv.find(a => a.startsWith('--port='));
  if (!arg) return defaultValue;
  return Number.parseInt(arg.split("=")[1]);
}

const port = ifArgI("port", 3000);

const app = express();
app.use(express.static('public'))
app.listen(port, () => console.log(`Server: ${port}`));