import { VitePWA } from "vite-plugin-pwa";
export default {
    plugins: [
        VitePWA({
            registerType: "autoUpdate",
            devOptions: {
                enabled: true,
            },
            includeAssets: ["**/*.png"],
            manifest: {
                name: "5学期",
                start_url: "/",
                short_name: "5学期",
                description: "5 Semester Schedule",
                icons: [
                    {
                        src: "favicon.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        }),
    ],
};
