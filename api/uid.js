export default async function handler(req, res) {
    const { uid } = req.query;

    if (!uid) {
        return res.status(400).json({
            status: false,
            message: "UID Required"
        });
    }

    try {
        const response = await fetch(`https://ffname.vercel.app/?uid=${uid}`);
        const data = await response.json();

        return res.status(200).json(data);

    } catch (e) {
        return res.status(500).json({
            status: false,
            error: e.message
        });
    }
}
