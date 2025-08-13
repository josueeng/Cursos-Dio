import prompt from 'prompt';
import mainPrompt from './Prompts/PromptMain.js';
import createQrcode from './services/qrcode/Create.js';

(async function main() {
    prompt.start();
    prompt.get(mainPrompt, async (err, choose) => {
        if (err) {
            console.error("ola");
            return;
        }
        if (choose.select == 1) {
            await createQrcode();
        } else if (choose.select == 2) {
            console.log("password");
        }
    });
})();