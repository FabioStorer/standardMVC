import { app } from "./app";
import { config } from "./config/env";

app.listen(config.app_port, () => {
    console.log(`Server ${config.app_name} running at port ${config.app_port}.`);
});