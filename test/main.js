import { build } from "../main.js";

import Page from "./components/Page.jsx";

await build({
    dir: import.meta.dir,
    path: "/bluejay",
    page: (page, pages) => {
        return (
            <Page title={page.module.title} description={page.module.description}>
                <page.module.default pages={pages} />
            </Page>
        );
    },
});
