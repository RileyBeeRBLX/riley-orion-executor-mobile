const fs = require('fs');
const path = require('path');
const signing = require('node-signing');

async function loadFile(filePath) {
    return fs.promises.readFile(filePath);
}

async function signApp(ipaFile, p12File, mobileprovisionFile) {
    try {
        const ipa = await loadFile(ipaFile);
        const p12 = await loadFile(p12File);
        const mobileprovision = await loadFile(mobileprovisionFile);

        const signedApp = await signIPA(ipa, p12, mobileprovision);

        const signedAppPath = path.join(__dirname, 'signedApp.ipa');
        await saveFile(signedAppPath, signedApp);

        return signedAppPath;
    } catch (error) {
        console.error('Error signing app:', error);
        throw error;
    }
}

async function signIPA(ipa, p12, mobileprovision) {
    try {
        return await signing.signIPA({
            app: ipa,
            p12: p12,
            provisioningProfile: mobileprovision
        });
    } catch (error) {
        console.error('Error signing IPA:', error);
        throw error;
    }
}

async function saveFile(filePath, data) {
    try {
        await fs.promises.writeFile(filePath, data);
    } catch (error) {
        console.error('Error saving file:', error);
        throw error;
    }
}

module.exports = { signApp };
