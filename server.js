const express = require('express');
const multer = require('multer');
const { signApp } = require('./signing'); // Import your signing logic
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.post('/sign', upload.fields([{ name: 'ipaFile', maxCount: 1 }, { name: 'p12File', maxCount: 1 }, { name: 'mobileprovisionFile', maxCount: 1 }]), async (req, res) => {
    try {
        const ipaFilePath = req.files['ipaFile'][0].path;
        const p12FilePath = req.files['p12File'][0].path;
        const mobileprovisionFilePath = req.files['mobileprovisionFile'][0].path;

        // Call your signing logic function
        const signedAppPath = await signApp(ipaFilePath, p12FilePath, mobileprovisionFilePath);

        res.json({ success: true, downloadLink: signedAppPath }); // Send the signed app back to the user
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
